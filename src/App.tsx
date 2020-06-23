import React from 'react';

import { ToastContainer } from 'react-toastify';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />

    <ToastContainer autoClose={3000} />
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
