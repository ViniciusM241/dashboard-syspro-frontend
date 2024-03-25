import React, { useState, useMemo, useCallback, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import getUsers from './services/getUsers';
import getTotalUsers from './services/getTotalUsers';

import UserDetails from './components/UserDetails';
import { T1, Col, Inline, Table, Button } from '~/components';
import { Container } from './styles';

function Users() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState('');
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const _getTotalUsers = async () => {
    const totalUsers = await getTotalUsers(filters);
    setTotalUsers(totalUsers);
  };

  const _getUsers = async () => {
    const users = await getUsers(filters);
    await _getTotalUsers();
    setUsers(users);
  };

  const createNewUser = () => {
    setIsEditing(false);
    setSelectedUserId(1);
  };

  const columns = useMemo(() => [
    {
      label: 'Data',
      accessor: 'createdAt',
      value: (original, row) => {
        const formatted = moment(row).format('DD/MM/yyyy');
        return formatted;
      },
    },
    {
      label: 'Nome',
      accessor: 'name',
    },
    {
      label: 'E-mail',
      accessor: 'email',
    },
    {
      label: 'Tipo Perfil',
      accessor: 'isAdmin',
      value: (original, row) => {
        if (row) return 'Administrador';
        else return 'Usuário';
      },
    },
  ], [moment]);

  const onClickRow = useCallback((original, row) => {
    const id = row.id;

    setSelectedUserId(id);
    setIsEditing(true);
  }, [navigate]);

  const onFetchData = ({ order, pageIndex, maxPage }) => {
    const query = [];

    query.push(`start=${pageIndex * maxPage}&limit=${maxPage}`);

    if (order)
      query.push(`sort=${order.accessor}&order=${order.asc ? 'asc' : 'desc'}`);

    setFilters(query.join('&'));
  };

  useEffect(() => {
    _getUsers();
  }, [filters]);

  useEffect(() => {
    _getTotalUsers();
  }, []);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Gerenciar usuários</T1>
      </Col>
      <Col cols={12} className="mt-20">
        <Button onClick={createNewUser}> Criar novo + </Button>
      </Col>
      <Col cols={12} className="mt-10">
        <Inline>
          <Table
            data={users}
            columns={columns}
            onClickRow={onClickRow}
            onFetchData={onFetchData}
            maxPage={5}
            total={totalUsers}
          />
        </Inline>
      </Col>
      {
        selectedUserId && (
          <UserDetails
            userId={selectedUserId}
            isEditing={isEditing}
            searchUsers={_getUsers}
            reset={setSelectedUserId}
            className='mt-20'
          />
        )
      }
    </Container>
  );
}

export default Users;
