import React, { useState, useMemo, useCallback, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import getDepartments from './services/getDepartments';
import getTotalDepartments from './services/getTotalDepartments';

import DepartmentDetails from './components/DepartmentDetails';
import { T1, Col, Inline, Table, Button } from '~/components';
import { Container } from './styles';

function Departments() {
  const navigate = useNavigate();

  const [filters, setFilters] = useState('');
  const [departments, setDepartments] = useState([]);
  const [totalDepartments, setTotalDepartments] = useState(0);
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const _getTotalDepartments = async () => {
    const totalDepartments = await getTotalDepartments(filters);
    setTotalDepartments(totalDepartments);
  };

  const _getDepartments = async () => {
    const departments = await getDepartments(filters);
    await _getTotalDepartments();
    setDepartments(departments);
  };

  const createNewDepartment = () => {
    setIsEditing(false);
    setSelectedDepartmentId(1);
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
  ], [moment]);

  const onClickRow = useCallback((original, row) => {
    const id = row.id;

    setSelectedDepartmentId(id);
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
    _getDepartments();
  }, [filters]);

  useEffect(() => {
    _getTotalDepartments();
  }, []);

  return (
    <Container>
      <Col cols={12} className="mt-10">
        <T1>Departamentos</T1>
      </Col>
      <Col cols={12} className="mt-20">
        <Button onClick={createNewDepartment}> Criar novo + </Button>
      </Col>
      <Col cols={12} className="mt-10">
        <Inline>
          <Table
            data={departments}
            columns={columns}
            onClickRow={onClickRow}
            onFetchData={onFetchData}
            maxPage={5}
            total={totalDepartments}
          />
        </Inline>
      </Col>
      {
        selectedDepartmentId && (
          <DepartmentDetails
            departmentId={selectedDepartmentId}
            isEditing={isEditing}
            searchDepartments={_getDepartments}
            reset={setSelectedDepartmentId}
            className='mt-20'
          />
        )
      }
    </Container>
  );
}

export default Departments;
