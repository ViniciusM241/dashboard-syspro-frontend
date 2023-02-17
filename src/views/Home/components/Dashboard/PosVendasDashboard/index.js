import React from 'react';
import Box from '../../Box';
import Chart from '../../Charts';

function PosVendasDashboard({ reports, filters, setFilters }) {
  return (
    <>
      <Box
        title='Empresas positivando'
        col={1}
        row={2}
        filterType="month/year"
        filters={filters}
        setFilters={setFilters}
      >
        <Chart type='listActiveCompanies' dataset={reports?.listActiveCompanies} />
      </Box>
      <Box
        title='Empresas sem positivação'
        col={1}
        row={2}
        filterType="month/year"
        filters={filters}
        setFilters={setFilters}
      >
        <Chart type='listLessActiveCompanies' dataset={reports?.listLessActiveCompanies} />
      </Box>
    </>
  );
}

export default PosVendasDashboard;
