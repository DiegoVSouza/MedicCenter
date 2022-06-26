import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/routes';
import GlobalStyles from './styles/global';

import { ModalProvider } from './hooks/useModal';
import { AuthProvider } from './hooks/AuthContext';
import { ScheduleProvider } from './hooks/ScheduleContext';
import Modal from 'react-modal'
import Header from './components/Header';
import Footer from './components/Footer';

Modal.setAppElement('#root');

const App = (): JSX.Element => {


  return (
    <BrowserRouter>
      <AuthProvider>
        <ScheduleProvider>
        <ModalProvider>
          <GlobalStyles />
          <Header/>
          <Routes />
        </ModalProvider>
        </ScheduleProvider>
        </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
