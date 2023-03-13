import React from 'react';
import isLogged from '~/middlewares/isLogged';
import isAdmin from '~/middlewares/isAdmin';
const Users = React.lazy(() => import('./Users/index'));
const Notifications = React.lazy(() => import('./Notifications/index'));

export default [
  {
    path: '/admin/usuarios',
    element: Users,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
      isAdmin,
    ],
  },
  {
    path: '/admin/notificacoes',
    element: Notifications,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
      isAdmin,
    ],
  },
];
