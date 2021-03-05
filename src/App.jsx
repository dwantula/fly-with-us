import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'shared/store';

import Footer from 'shared/components/Footer/Footer';
import Header from 'shared/components/Header/Header';
import Main from 'shared/components/Main/Main';

import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
