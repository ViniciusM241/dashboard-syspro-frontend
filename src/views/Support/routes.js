import React from 'react';
import isLogged from '~/middlewares/isLogged';
import belongsTo from '~/middlewares/belongsTo';
import { DepartmentsEnum } from '~/utils/enums';
const Migration = React.lazy(() => import('./Migration/index'));

export default [
  {
    path: '/suporte/migracao',
    element: Migration,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
      (next, redirect) => belongsTo(next, redirect, [DepartmentsEnum.SUPORTE.value]),
    ],
  },
];
