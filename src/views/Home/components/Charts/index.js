import React, { useMemo } from 'react';
import CountAllCompanies from './CountAllCompanies';
import CountEstablishments from './CountEstablishments';
import CountNewCompanies from './CountNewCompanies';
import CountAllCardsByProducts from './CountAllCardsByProducts';
import ListActiveCompanies from './ListActiveCompanies';
import ListLessActiveCompanies from './ListLessActiveCompanies';


function Chart({ type, ...props }) {
  const charts = useMemo(() => ({
    countAllCompanies: CountAllCompanies,
    countEstablishments: CountEstablishments,
    countNewCompanies: CountNewCompanies,
    countAllCardsByProducts: CountAllCardsByProducts,
    listActiveCompanies: ListActiveCompanies,
    listLessActiveCompanies: ListLessActiveCompanies,
  }), []);

  if (charts[type]) {
    return React.createElement(charts[type], props);
  } else {
    return 'Chart not found';
  }
}

export default Chart;
