import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import classNames from 'classnames';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
