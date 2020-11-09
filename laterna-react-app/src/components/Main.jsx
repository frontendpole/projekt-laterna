import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StartPage from './StartPage';
import AboutProjectPage from './AboutProjectPage';
import PassportPage from './PassportPage';
import ContactPage from './ContactPage';
import LanternPage from './LanternPage';
import ShopPage from './ShopPage';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/projekt-laterna" component={StartPage} />
        <Route exact path="/projekt-laterna/oprojekcie" component={AboutProjectPage} />
        <Route exact path="/projekt-laterna/paszport" component={PassportPage} />
        <Route exact path="/projekt-laterna/kontakt" component={ContactPage} />
        <Route exact path="/projekt-laterna/latarnie/:id" component={LanternPage} />
        <Route exact path="/projekt-laterna/sklep" component={ShopPage} />
      </Switch>
    </main>
  )
}

export default Main;