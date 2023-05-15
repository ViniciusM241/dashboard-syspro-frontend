import React from 'react';
import isLogged from '~/middlewares/isLogged';
import belongsTo from '~/middlewares/belongsTo';
import { DepartmentsEnum } from '~/utils/enums';
const Migration = React.lazy(() => import('./Migration/index'));
const Cities = React.lazy(() => import('./Migration/subpages/Cities'));
const City = React.lazy(() => import('./Migration/subpages/City'));
const CityEstablishments = React.lazy(() => import('./Migration/subpages/CityEstablishments'));

export default [
  {
    path: '/suporte/migracao',
    element: Migration,
    title: 'Syspro Dashboard - Migração',
    middlewares: [
      isLogged,
      (next, redirect) => belongsTo(next, redirect, [DepartmentsEnum.SUPORTE.value]),
    ],
  },
  {
    path: '/suporte/migracao/:uf/cidades',
    element: Cities,
    title: 'Syspro Dashboard - Migração',
    middlewares: [
      isLogged,
      (next, redirect) => belongsTo(next, redirect, [DepartmentsEnum.SUPORTE.value]),
    ],
  },
  {
    path: '/suporte/migracao/:uf/cidades/:ibgeId/:city',
    element: City,
    title: 'Syspro Dashboard - Migração',
    middlewares: [
      isLogged,
      (next, redirect) => belongsTo(next, redirect, [DepartmentsEnum.SUPORTE.value]),
    ],
  },
  {
    path: '/suporte/migracao/:uf/cidades/:ibgeId/:city/estabelecimentos',
    element: CityEstablishments,
    title: 'Syspro Dashboard - Migração (estabelecimentos)',
    middlewares: [
      isLogged,
      (next, redirect) => belongsTo(next, redirect, [DepartmentsEnum.SUPORTE.value]),
    ],
  },
];
