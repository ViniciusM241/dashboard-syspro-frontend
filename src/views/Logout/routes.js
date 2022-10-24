import React from 'react';
const Logout = React.lazy(() => import('./index'));

export default [
  {
    path: '/sair',
    element: Logout,
  },
];
