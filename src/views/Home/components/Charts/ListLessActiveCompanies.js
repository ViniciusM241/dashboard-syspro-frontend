import React from 'react';
import formatPrice from "~/utils/formatPrice";

import {
  List,
} from '~/components';

function ListLessActiveCompanies({ dataset, ...props }) {

  const data = dataset?.map((data) => ({
    key: `${data.companyId} - ${data.name}`,
    value: formatPrice(data.value),
  }));

  return (
    <List data={data} />
  );
}

export default ListLessActiveCompanies;
