import React from 'react';
import isLogged from '~/middlewares/isLogged';
const Home = React.lazy(() => import('./index'));

export default [
  {
    path: '/home',
    element: Home,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
    ],
  },
];
