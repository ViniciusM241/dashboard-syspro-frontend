import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from '~/layout/Main/components/Profile/store/actions';
import userSchema from '~/utils/validations/userSchema';
import updateUser from './services/updateUser';
import { toast } from "react-toastify";
import getCroppedImg from "~/utils/getCroppedImg";

import {
  Container,
  Box,
  Col,
  Input,
  Button,
  T2,
  T3,
  Form,
  ProfileImg,
  ModalCropImage,
  Row,
} from '~/components';
import client from "~/boot/client";

function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.profile.user);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ imgSrc, setImgSrc ] = useState(user.imgUrl);
  const [deleteImg, setDeleteImg] = useState(null);
  const [ files, setFiles ] = useState({});
  const [ isModalOpened, setIsModalOpened ] = useState(false);

  const handleSubmit = async ({ values }) => {
    let success = false;
    values.imgUrl = imgSrc;

    setIsLoading(true);

    success = await updateUser(values);

    setIsLoading(false);

    if (deleteImg) {
      client.delete(`/static/${deleteImg}`)
        .then(res => {
          if (res.status === 204) {
            setDeleteImg(false);
            dispatch(getProfile());
          } else {
            toast.error("Erro ao remover imagem");
          }
        })
        .catch(err => {
          toast.error("Erro ao remover imagem");
          console.log(err);
        });
    }

    if (success) {
      toast.success("Perfil alterado com sucesso");
      dispatch(getProfile());
    } else {
      toast.error("Erro ao atualizar perfil");
    }
  };

  const handleFileChange = () => {
    const inputFile = document.getElementById('uploadImage');
    inputFile.click();
  };

  const handleUpload = (e) => {
    const inputFile = e.target;
    const files = inputFile.files;
    const reader = new FileReader();

    const openModal = () => {
      setImgSrc(reader.result.toString() || '');
      setIsModalOpened(true);
      setFiles(files[0]);
      reader.removeEventListener('load', openModal);
      inputFile.value = '';
    };

    if (files.length) {
      reader.addEventListener('load', openModal);
      reader.readAsDataURL(files[0]);
    }
  };

  const onConfirmCrop = async (crop) => {
    const newBlob = await getCroppedImg(imgSrc, crop, files);
    const file = new File([newBlob], files.name, { type: files.type });
    const reader = new FileReader();

    const setSrc = () => {
      setImgSrc(reader.result.toString() || '');
      reader.removeEventListener('load', setSrc);
    };

    reader.addEventListener('load', setSrc);
    reader.readAsDataURL(file);

    setIsModalOpened(false);
    const data = new FormData();
    data.append('file', file, file.name);

    client.post('/static', data)
      .then(res => {
        setImgSrc(`${process.env.REACT_APP_API_BASE_URL}${res.data.file.url}`);
      })
      .catch(err => {
        setImgSrc('');
        console.log(err);
      });
  };

  const onCancelCrop = () => {
    setIsModalOpened(false);
    setImgSrc('');
  };

  const removeProfilePhoto = () => {
    if (imgSrc?.includes('foto.jpg') ||
        imgSrc === null ||
        imgSrc === ''
    ) {
      setDeleteImg(false);
      return;
    }

    const imgId = imgSrc?.replace(`${process.env.REACT_APP_API_BASE_URL}/static/`, '');
    setImgSrc(`${process.env.REACT_APP_API_BASE_URL}/static/foto.jpg`);
    setDeleteImg(imgId);
  };

  useEffect(() => {
    setImgSrc(user.imgUrl);
  }, [user]);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <>
      <Container>
        <Box className="mt-20">
          <Col cols={12}>
            <T2>Boas vindas, {user.name}</T2>
          </Col>

          <Col className="mt-20" cols={12}>
            <T3>
              Editar Perfil
            </T3>
          </Col>

          <Row>
            <Col cols={3} className="mt-10" style={{ flexDirection: 'column', display: 'flex' }}>
              <ProfileImg
                size="medium"
                img={imgSrc}
              />
              <Button
                className="mt-10"
                onClick={removeProfilePhoto}
                disabled={imgSrc?.includes('foto.jpg')}
              >
                Remover foto
              </Button>
              <Button className="mt-10" onClick={handleFileChange}>Adicionar foto</Button>
            </Col>
            <Col cols={9} className="mt-10">
              <Form
                initialValues={{
                  name: user.name || '',
                  email: user.email || '',
                  token: user.token || '',
                  isAdmin: user.isAdmin,
                  departments: user.departments,
                }}
                onSubmit={handleSubmit}
                validationSchema={userSchema}
              >
                <Col className="mt-10" cols={12}>
                  <Input type="text" name="name" label="Nome" placeholder="Nome" />
                </Col>
                <Col className="mt-10 ml-10" cols={12}>
                  <Input type="email" name="email" label="E-mail" placeholder="E-mail" />
                </Col>
                <Col className="mt-10" cols={12}>
                  <Input type="password" name="token" label="Senha" placeholder="Senha" />
                </Col>
                <Col className="mt-10" cols={12} style={{ justifyContent: 'flex-end' }}>
                  <Button type="submit" isLoading={isLoading}>Salvar</Button>
                </Col>
              </Form>
            </Col>
          </Row>
        </Box>
      </Container>
      {isModalOpened && (
        <ModalCropImage
          src={imgSrc}
          onClose={onCancelCrop}
          onConfirm={async (crop) => await onConfirmCrop(crop)}
        />
      )}
      <input
        type="file"
        id="uploadImage"
        accept="image/jpeg,image/png,image/pjpeg,image/gif"
        name="files"
        style={{display: 'none'}}
        onChange={handleUpload}
      />
    </>
  );
}

export default EditProfile;
