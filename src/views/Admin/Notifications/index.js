import React, { useState, useEffect } from "react";
import { DepartmentsEnum } from "~/utils/enums";
import getUsers from "./services/getUsers";
import createNotification from "./services/createNotification";
import notificationSchema from '~/utils/validations/notificationSchema';
import { toast } from 'react-toastify';

import {
  Container,
  Col,
  T1,
  T3,
  Button,
  Form,
  Input,
  Inline,
  Box,
  CheckGroup,
  Check,
  StyledError,
} from '~/components';

function Notifications () {
  const [ users, setUsers ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async ({ values }) => {
    const data = {...values};

    data.to = data.to.filter(user => {
      const userData = users.find(x => x.id === user);
      const departments = userData.userDepartments.map(x => x.department);

      if (data.departments.some( x => departments.filter(y => y === x).length)) {
        return true;
      }

      return false;
    });

    delete data.departments;
    delete data.allDepartments;
    delete data.allUsers;

    setIsLoading(true);

    const success = await createNotification(data);

    if (success) {
      toast.success('Notificação enviada com sucesso');
    } else {
      toast.error('Erro ao enviar notificação');
    }

    setIsLoading(false);
  };

  const fetchUsers = async () => {
    const users = await getUsers();

    setUsers(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Gerenciar notificações</T1>
      </Col>
      <Box className="mt-20">
        <Col cols={12} className="mb-20">
          <T3>Cadastre uma nova notificação e selecione seu redirecionamento</T3>
        </Col>
        <Form
          initialValues={{
            title: '',
            message: '',
            link: '',
            departments: [],
            to: [],
            allDepartments: false,
            allUsers: false,
          }}
          onSubmit={handleSubmit}
          validationSchema={notificationSchema}
        >
          {
            ({ values, errors }) => (
              <>
                <Inline>
                  <Col cols={7}>
                    <Input type="text" name="title" placeholder="Digite o título" label="Título" />
                  </Col>
                  <Col cols={5}>
                    <Input type="text" name="link" maxLength={255} placeholder="Digite o link" label="Link" />
                  </Col>
                </Inline>
                <Col className="mt-10" cols={12}>
                  <Input type="text" name="message" placeholder="Digite a mensagem" label="Mensagem" />
                </Col>
                <Col cols={12} className="mt-20 mb-20">
                  <T3>Redirecionamento</T3>
                </Col>
                <Col cols={12} className="mt-10 mb-10">
                  <p>Departamentos:</p>
                </Col>
                <Col className="mt-10" cols={12} style={{ flexWrap: 'wrap' }}>
                  <Check name="allDepartments" label="Todos" type="radio" value="true" />
                  <>
                    {
                      Object.keys(DepartmentsEnum).map((department, index) => (
                        <CheckGroup
                          key={index}
                          name="departments"
                          type="radio"
                          checked={values.allDepartments}
                          label={DepartmentsEnum[department].label}
                          value={DepartmentsEnum[department].value}
                        />
                      ))
                    }
                  </>
                </Col>
                {
                  errors.departments ? (
                    <Col cols={12}>
                      <StyledError className="mt-10">{errors.departments}</StyledError>
                    </Col>
                  ) : <></>
                }
                {
                  values.departments.length ? (
                    <>
                      <Col cols={12} className="mt-20 mb-10">
                        <p>Usuários:</p>
                      </Col>
                      <Col className="mt-10" cols={12} style={{ flexWrap: 'wrap' }}>
                        {
                          users.filter(x => values.departments.some(y => x.userDepartments.filter(z => z.department === y).length)).length ?
                            <Check name="allUsers" label="Todos" value="true" type="radio" />
                          : <></>
                        }
                        <>
                          {
                            users.filter(x => values.departments.some(y => x.userDepartments.filter(z => z.department === y).length)).map(user => (
                              <CheckGroup
                                key={user.id}
                                value={user.id}
                                label={`${user.name} <${user.email}>`}
                                checked={values.allUsers}
                                name="to"
                                type="radio"
                              />
                            ))
                          }
                        </>
                      </Col>
                    </>
                  ) : <></>
                }
                {
                  errors.users ? (
                    <Col cols={12}>
                      <StyledError className="mt-10">{errors.users}</StyledError>
                    </Col>
                  ) : <></>
                }
                <Col cols={12} className="mt-10">
                  <Inline right>
                    <Button type="submit" isLoading={isLoading}> Salvar </Button>
                  </Inline>
                </Col>
              </>
            )
          }
        </Form>
      </Box>
    </Container>
  );
}

export default Notifications;
