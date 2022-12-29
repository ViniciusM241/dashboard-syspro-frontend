import React from "react";
import { useSelector } from "react-redux";

import { Container } from './styles';

function DepartmentSelect() {
  const departments = useSelector(store => store.profile.departments);
  const profileDepartments = useSelector(store => store.profile.user.departments);

  const activeDepartments = departments.filter(x => profileDepartments.includes(x.id));

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Container className="ml-10" onChange={handleChange}>
      <option value={-1}>Syspro</option>
      {
        activeDepartments.map(department => (
          <option key={department.id} value={department.id}>{department.name}</option>
        ))
      }
    </Container>
  );
}

export default DepartmentSelect;
