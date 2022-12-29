import React, { useEffect, useState } from 'react';
import getReports from '../Charts/services/getReports';

import { Wrapper } from './styles';

import Box from '../Box';

import Chart from '../Charts';

function Dashboard() {
  const [reports, setReports] = useState({});

  const _getReports = async () => {
    const reports = await getReports();

    setReports(reports);
  };

  useEffect(() => {
    _getReports();
  }, []);

  return (
    <Wrapper className='mt-10'>
      <Box title='Empresas cadastradas' col={1} row={2}>
        <Chart type='countAllCompanies' dataset={reports.countAllCompanies} />
      </Box>
      <Box title='Estabelecimentos cadastrados por mês' col={2} row={1}>
        <Chart type='countEstablishments' dataset={reports.countEstablishments} />
      </Box>
      <Box title='Novas empresas' col={1} row={1}>
        <Chart type='countNewCompanies' dataset={reports.countNewCompanies} />
      </Box>
      <Box title='Total de produtos' col={1} row={1}>
        <Chart type='countAllCardsByProducts' dataset={reports.countAllCardsByProducts} />
      </Box>
      <Box title='Empresas positivando' col={1} row={2}>
        <Chart type='listActiveCompanies' dataset={reports.listActiveCompanies} />
      </Box>
      <Box title='Empresas sem positivação' col={1} row={2}>
        <Chart type='listLessActiveCompanies' dataset={reports.listLessActiveCompanies} />
      </Box>
    </Wrapper>
  );
}

export default Dashboard;
