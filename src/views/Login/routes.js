import React from 'react';
const Login = React.lazy(() => import('./index'));

export default [
  {
    path: '/login',
    element: Login,
    title: 'Syspro Dashboard - Login',
  },
];
