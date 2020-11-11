import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const StartPage = React.lazy(() => import('./StartPage'));
const AboutProjectPage = React.lazy(() => import('./AboutProjectPage'));
const PassportPage = React.lazy(() => import('./PassportPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));
const LanternPage = React.lazy(() => import('./LanternPage'));
const ShopPage = React.lazy(() => import('./ShopPage'));

const Main = () => {


  return (
    <main>
      <Suspense fallback="Ładowanie strony...">
        <Switch>
          <Route exact path="/projekt-laterna" component={StartPage} />
          <Route exact path="/projekt-laterna/oprojekcie" component={AboutProjectPage} />
          <Route exact path="/projekt-laterna/paszport" component={PassportPage} />
          <Route exact path="/projekt-laterna/kontakt" component={ContactPage} />
          <Route exact path="/projekt-laterna/latarnie/:id" component={LanternPage} />
          <Route exact path="/projekt-laterna/sklep" component={ShopPage} />
        </Switch>
      </Suspense>
    </main>
  )
}

export default Main;