import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DepartmentsEnum } from "~/utils/enums";
import { setDepartment } from "../Profile/store/actions";

import { Container } from './styles';

function DepartmentSelect() {
  const dispatch = useDispatch();
  const profileDepartments = useSelector(store => store.profile.user.departments);
  const selectedDepartment = useSelector(store => store.profile.selectedDepartment);

  const handleChange = (e) => {
    dispatch(setDepartment(e.target.value));
  };

  return (
    <Container className="ml-10" onChange={handleChange} defaultValue={selectedDepartment}>
      <option value={-1}>Syspro</option>
      {
        profileDepartments.map((department, index) => (
          <option key={index} value={DepartmentsEnum[department].value}>{DepartmentsEnum[department].label}</option>
        ))
      }
    </Container>
  );
}

export default DepartmentSelect;
