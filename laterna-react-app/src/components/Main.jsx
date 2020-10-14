import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from './StartPage';
import AboutProjectPage from './AboutProjectPage';
import PassportPage from './PassportPage';
import ContactPage from './ContactPage';
import lanterns from '../data/lanterns.json';
import LanternPage from './LanternPage';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route exact path="/oprojekcie" component={AboutProjectPage} />
        <Route exact path="/paszport" component={PassportPage} />
        <Route exact path="/kontakt" component={ContactPage} />
        <Route exact path="/latarnie/:id" component={LanternPage} />
      </Switch>
    </main>
  )
}

export default Main;