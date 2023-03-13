import React from 'react';
import Router from '~/layout/Router';

import GlobalStyle from './styles/GlobalStyle';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Layout () {
  return (
    <>
      <div className='App'>
        <GlobalStyle />
        <Router />
      </div>
      <ToastContainer/>
    </>
  );
}

export default Layout;
