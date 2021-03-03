import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from 'shared/components/Footer/Footer';
import Header from 'shared/components/Header/Header';
import Main from 'shared/components/Main/Main';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
