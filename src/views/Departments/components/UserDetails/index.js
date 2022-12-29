import React, { useEffect, useState } from 'react';
import getUserById from '../../services/getUserById';

import {
  Box,
  T2,
  Inline,
  Col,
  Form,
  Input,
  Check,
  Button,
} from '~/components';

function UserDetails({ userId, isEditing=false }) {
  const [user, setUser] = useState(null);
  const [initialValues, setInitialValues] = useState({ name: '', email: '', isAdmin: false });

  const handleSubmit = ({ values }) => {
    console.log(values);
  };

  const _getUserById = async () => {
    const user = await getUserById(userId);

    setUser(user);
  };

  useEffect(() => {
    if (user && isEditing) {
      setInitialValues({
        name: user.name || '',
        email: user.email || '',
        isAdmin: Object.prototype.hasOwnProperty.call(user, 'isAdmin') ? user.isAdmin : false,
      });
    } else {
      setInitialValues({
        name: '',
        email: '',
        isAdmin: false,
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
      >
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
            <Check type="radio" name="isAdmin" label="Administrador" />
          </Col>
          <Col className="mt-20" cols={12}>
            <Inline right>
              <Button type="submit">{userId && isEditing ? 'Salvar' : 'Criar'}</Button>
            </Inline>
          </Col>
        </Inline>
      </Form>
    </Box>
  );
}

export default UserDetails;
