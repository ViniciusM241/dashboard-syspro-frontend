import React from 'react';
import isLogged from '~/middlewares/isLogged';
const Notifications = React.lazy(() => import('./index'));

export default [
  {
    path: '/notificacoes',
    element: Notifications,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
    ],
  },
];
