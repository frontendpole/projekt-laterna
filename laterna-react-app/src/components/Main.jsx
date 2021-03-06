import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const StartPage = React.lazy(() => import('./StartPage'));
const AboutProjectPage = React.lazy(() => import('./AboutProjectPage'));
const PassportPage = React.lazy(() => import('./PassportPage'));
const ContactPage = React.lazy(() => import('./ContactPage'));
const LanternPage = React.lazy(() => import('./LanternPage'));
const ShopPage = React.lazy(() => import('./ShopPage'));
const PrivacyPolicyPage = React.lazy(() => import('./PrivacyPolicyPage'));

const Main = () => {

  return (
    <main>
      <Suspense fallback="Ładowanie strony...">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/o-projekcie" component={AboutProjectPage} />
          <Route exact path="/paszport" component={PassportPage} />
          <Route exact path="/kontakt" component={ContactPage} />
          <Route exact path="/latarnie/:id/:url" component={LanternPage} />
          <Route exact path="/sklep" component={ShopPage} />
          <Route exact path="/polityka-prywatnosci" component={PrivacyPolicyPage} />
        </Switch>
      </Suspense>
    </main>
  )
}

export default Main;