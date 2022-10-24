import React from 'react';
import isLogged from '~/middlewares/isLogged';
import isAdmin from '~/middlewares/isAdmin';
const Home = React.lazy(() => import('./index'));

export default [
  {
    path: '/usuarios',
    element: Home,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
      isAdmin,
    ],
  },
];
