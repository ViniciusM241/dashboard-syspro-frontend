import React from 'react';
import isLogged from '~/middlewares/isLogged';
import isAdmin from '~/middlewares/isAdmin';
const Departments = React.lazy(() => import('./index'));

export default [
  {
    path: '/departamentos',
    element: Departments,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
      isAdmin,
    ],
  },
];
