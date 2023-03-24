import React from 'react';
import isLogged from '~/middlewares/isLogged';
const EditProfile = React.lazy(() => import('./index'));

export default [
  {
    path: '/meu-perfil',
    element: EditProfile,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
    ],
  },
];
