import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import getReports from '../Charts/services/getReports';
import { DepartmentsEnum } from '~/utils/enums';

import PosVendasDashboard from './PosVendasDashboard';
import DefaultDashboard from './DefaultDashboard';

import { Wrapper } from './styles';

function Dashboard() {
  let Charts = null;
  const selectedDepartment = useSelector(store => store.profile.selectedDepartment);

  const [reports, setReports] = useState({});
  const [filters, setFilters] = useState({});

  const _getReports = async () => {
    const reports = await getReports({
      department: selectedDepartment,
      filters,
    });

    setReports(reports);
  };

  useEffect(() => {
    _getReports();
  }, [selectedDepartment, filters]);

  switch (selectedDepartment) {
    case DepartmentsEnum.POSVENDAS.value:
      Charts = PosVendasDashboard;
      break;
    default:
      Charts = DefaultDashboard;
  }
  return (
    <Wrapper className='mt-10'>
      {
        <Charts
          reports={reports}
          filters={filters}
          setFilters={setFilters}
        />
      }
    </Wrapper>
  );
}

export default Dashboard;
