import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { APP_ROUTES } from './app-routes';
import Housing from './forms/Housing';
import Relationship from './forms/Relationship';
import Financial from './forms/Financial';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={APP_ROUTES.housing} />
      <Route path={APP_ROUTES.housing} exact component={Housing} />
      <Route path={APP_ROUTES.relationship} exact component={Relationship} />
      <Route path={APP_ROUTES.financial} exact component={Financial} />
    </Switch>
  );
};

export default App;
