import React, { useEffect, useState } from 'react';
import getUserById from '../../services/getUserById';
import createUser from '../../services/createUser';
import updateUser from '../../services/updateUser';
import deleteUser from '../../services/deleteUser';
import userSchema from '~/utils/validations/userSchema';
import { getProfile } from '~/layout/Main/components/Profile/store/actions';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  T2,
  Inline,
  Col,
  Form,
  Input,
  Check,
  CheckGroup,
  Button,
  StyledError,
} from '~/components';

function UserDetails({ userId, isEditing=false, searchUsers, reset }) {
  const dispatch = useDispatch();

  const loggedUser = useSelector(store => store.profile.user);
  const departments = useSelector(store => store.profile.departments);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({ name: '', email: '', isAdmin: false, token: '', departments: [] });

  const handleSubmit = async ({ values }) => {
    let success = false;

    setIsLoading(true);

    if (userId && isEditing) {
      success = await updateUser(user.id, values);
    } else {
      success = await createUser(values);
    }

    setIsLoading(false);

    if (success) {
      searchUsers();
      reset(null);

      if (loggedUser.id === user.id) {
        dispatch(getProfile());
      }
    }
  };

  const _getUserById = async () => {
    const user = await getUserById(userId);

    setUser(user);
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await deleteUser(user.id);

    setIsLoading(false);

    if (success) {
      searchUsers();
      reset(null);
    }
  };

  useEffect(() => {
    if (user && isEditing) {
      setInitialValues({
        id: user.id || null,
        name: user.name || '',
        email: user.email || '',
        isAdmin: Object.prototype.hasOwnProperty.call(user, 'isAdmin') ? user.isAdmin : false,
        token: user.token || '',
        departments: user.departments || [],
      });
    } else {
      setInitialValues({
        id: null,
        name: '',
        email: '',
        isAdmin: false,
        token: '',
        departments: [],
      });
    }
  }, [user, isEditing]);

  useEffect(() => {
    if (userId && isEditing)
      _getUserById()
  }, [userId]);

  return (
    <Box className='mt-20'>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        {
          ({ errors }) => (
            <Inline>
              <Col cols={12}>
                <T2>
                  Detalhes do usuário
                  {
                    userId && isEditing ? (
                      <strong> #{String(userId).padStart(3, '0')}</strong>
                    ) : <></>
                  }
                </T2>
              </Col>
              <Col className="mt-10" cols={4}>
                <Input type="text" name="name" label="Nome" placeholder="Nome" />
              </Col>
              <Col className="mt-10 ml-10" cols={4}>
                <Input type="email" name="email" label="E-mail" placeholder="E-mail" />
              </Col>
              <Col className="mt-10 ml-10" cols={3}>
                <Check type="radio" name="isAdmin" label="É administrador?" />
              </Col>
              <Col className="mt-10" cols={4}>
                <Input type="password" name="token" label="Senha" placeholder="Senha" />
              </Col>
              <Col className="mt-10" cols={12}>
                <T2>
                  Departamentos:
                </T2>
              </Col>
              <Col className="mt-10" cols={12} style={{ flexWrap: 'wrap' }}>
                {
                  departments.map(department => (
                    <CheckGroup key={department.id} type="radio" name="departments" label={department.name} value={department.id} />
                  ))
                }
              </Col>
              {
                errors.departments ? (
                  <StyledError className="mt-10">{errors.departments}</StyledError>
                ) : <></>
              }
              <Col className="mt-20" cols={12}>
                <Inline right>
                  {
                    userId && isEditing && loggedUser?.id !== user?.id ? (
                      <Button className="mr-10" isLoading={isLoading} onClick={handleDeleteUser}>Deletar</Button>
                    ) : <></>
                  }
                  <Button type="submit" isLoading={isLoading}>{userId && isEditing ? 'Salvar' : 'Criar'}</Button>
                </Inline>
              </Col>
            </Inline>
          )
        }
      </Form>
    </Box>
  );
}

export default UserDetails;
