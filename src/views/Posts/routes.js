import React from 'react';
import isLogged from '~/middlewares/isLogged';
const Posts = React.lazy(() => import('./index'));

export default [
  {
    path: '/posts/:id/:title',
    element: Posts,
    title: 'Syspro Dashboard',
    middlewares: [
      isLogged,
    ],
  },
];
