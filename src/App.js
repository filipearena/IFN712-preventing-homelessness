import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { APP_ROUTES } from './app-routes';
import QuestionnairePage from './Questionnaire';
import QuestionnairePageTwo from './QuestionnaireTwo';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to={APP_ROUTES.questionnaire} />
      <Route path={APP_ROUTES.questionnaire} exact component={QuestionnairePage} />
      <Route path={APP_ROUTES.questionnaireTwo} exact component={QuestionnairePageTwo} />
    </Switch>
  );
};

export default App;
