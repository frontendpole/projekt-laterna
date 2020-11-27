import React from 'react';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import { HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <ScrollToTop />
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
