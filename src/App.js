import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { APP_ROUTES } from './app-routes';
import Housing from './pages/Housing';
import Relationship from './pages/Relationship';
import Financial from './pages/Financial';
import Home from './pages/Home';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={APP_ROUTES.home} />
      <Route path={APP_ROUTES.home} exact component={Home} />
      <Route path={APP_ROUTES.housing} exact component={Housing} />
      <Route path={APP_ROUTES.relationship} exact component={Relationship} />
      <Route path={APP_ROUTES.financial} exact component={Financial} />
    </Switch>
  );
};

export default App;
