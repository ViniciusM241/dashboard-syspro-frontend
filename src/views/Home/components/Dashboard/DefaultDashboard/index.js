import React from 'react';
import Box from '../../Box';
import Chart from '../../Charts';

function DefaultDashboard({ reports }) {
  return (
    <>
      <Box title='Empresas cadastradas' col={1} row={2}>
        <Chart type='countAllCompanies' dataset={reports?.countAllCompanies} />
      </Box>
      <Box title='Estabelecimentos cadastrados por mês' col={2} row={1}>
        <Chart type='countEstablishments' dataset={reports?.countEstablishments} />
      </Box>
      <Box title='Novas empresas' col={1} row={1}>
        <Chart type='countNewCompanies' dataset={reports?.countNewCompanies} />
      </Box>
      <Box title='Total de produtos' col={1} row={1}>
        <Chart type='countAllCardsByProducts' dataset={reports?.countAllCardsByProducts} />
      </Box>
      <Box title='Empresas positivando' col={1} row={2}>
        <Chart type='listActiveCompanies' dataset={reports?.listActiveCompanies} />
      </Box>
      <Box title='Empresas sem positivação' col={1} row={2}>
        <Chart type='listLessActiveCompanies' dataset={reports?.listLessActiveCompanies} />
      </Box>
    </>
  );
}

export default DefaultDashboard;
