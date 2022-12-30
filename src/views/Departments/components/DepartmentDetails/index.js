import React, { useEffect, useState } from 'react';
import getDepartmentById from '../../services/getDepartmentById';
import createDepartment from '../../services/createDepartment';
import updateDepartment from '../../services/updateDepartment';
import deleteDepartment from '../../services/deleteDepartment';
import departmentSchema from '~/utils/validations/departmentSchema';
import { useDispatch } from 'react-redux';
import { getDepartments } from '~/layout/Main/components/Profile/store/actions';

import {
  Box,
  T2,
  Inline,
  Col,
  Form,
  Input,
  Button,
} from '~/components';

function DepartmentDetails({ departmentId, isEditing=false, searchDepartments, reset }) {
  const dispatch = useDispatch();

  const [department, setDepartment] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({ name: '' });

  const handleSubmit = async ({ values }) => {
    let success = false;

    setIsLoading(true);

    if (departmentId && isEditing) {
      success = await updateDepartment(department.id, values);
    } else {
      success = await createDepartment(values);
    }

    setIsLoading(false);

    if (success) {
      searchDepartments();
      dispatch(getDepartments());
      reset(null);
    }
  };

  const _getDepartmentById = async () => {
    const department = await getDepartmentById(departmentId);

    setDepartment(department);
  };

  const handleDeleteDepartment = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await deleteDepartment(department.id);

    setIsLoading(false);

    if (success) {
      searchDepartments();
      dispatch(getDepartments());
      reset(null);
    }
  };

  useEffect(() => {
    if (department && isEditing) {
      setInitialValues({
        id: department.id || null,
        name: department.name || '',
      });
    } else {
      setInitialValues({
        id: null,
        name: '',
      });
    }
  }, [department, isEditing]);

  useEffect(() => {
    if (departmentId && isEditing)
      _getDepartmentById()
  }, [departmentId]);

  return (
    <Box className='mt-20'>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={departmentSchema}
      >
        {
          () => (
            <Inline>
              <Col cols={12}>
                <T2>
                  Detalhes do departamento
                  {
                    departmentId && isEditing ? (
                      <strong> #{String(departmentId).padStart(3, '0')}</strong>
                    ) : <></>
                  }
                </T2>
              </Col>
              <Col className="mt-10" cols={4}>
                <Input type="text" name="name" label="Nome" placeholder="Nome" />
              </Col>
              <Col className="mt-20" cols={12}>
                <Inline right>
                  {
                    departmentId && isEditing ? (
                      <Button className="mr-10" isLoading={isLoading} onClick={handleDeleteDepartment}>Deletar</Button>
                    ) : <></>
                  }
                  <Button type="submit" isLoading={isLoading}>{departmentId && isEditing ? 'Salvar' : 'Criar'}</Button>
                </Inline>
              </Col>
            </Inline>
          )
        }
      </Form>
    </Box>
  );
}

export default DepartmentDetails;
