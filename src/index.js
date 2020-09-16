import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css';

import { Provider } from 'react-redux';
import AppContainer from './App';
import configureStore from './configureStore';

// REDUX

const { store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
  </Provider>,

  document.getElementById('root')
);
