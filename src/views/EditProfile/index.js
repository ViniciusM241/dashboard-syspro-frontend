import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from '~/layout/Main/components/Profile/store/actions';
import userSchema from '~/utils/validations/userSchema';
import updateUser from './services/updateUser';
import { toast } from "react-toastify";

import {
  Container,
  Box,
  Inline,
  Col,
  Input,
  Button,
  T2,
  T3,
  Form,
} from '~/components';

function EditProfile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const user = profile.user;

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async ({ values }) => {
    console.log(values)
    let success = false;

    setIsLoading(true);

    success = await updateUser(values);

    setIsLoading(false);

    if (success) {
      toast.success("Perfil alterado com sucesso");
      dispatch(getProfile());
    } else {
      toast.error("Erro ao atualizar perfil");
    }
  };

  return (
    <Container>
      <Box className="mt-20">
        <Col cols={12}>
          <T2>Boas vindas, {user.name}</T2>
        </Col>

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
          {
            ({ errors }) => (
              <Inline className="mt-20">
                <Col cols={12}>
                  <T3>
                    Editar Perfil
                  </T3>
                </Col>
                <Col className="mt-10" cols={4}>
                  <Input type="text" name="name" label="Nome" placeholder="Nome" />
                </Col>
                <Col className="mt-10 ml-10" cols={4}>
                  <Input type="email" name="email" label="E-mail" placeholder="E-mail" />
                </Col>
                <Col className="mt-10" cols={4}>
                  <Input type="password" name="token" label="Senha" placeholder="Senha" />
                </Col>
                <Col className="mt-10" cols={12}>
                  <Button type="submit" isLoading={isLoading}>Salvar</Button>
                </Col>
              </Inline>
            )
          }
        </Form>
      </Box>
    </Container>
  );
}

export default EditProfile;
