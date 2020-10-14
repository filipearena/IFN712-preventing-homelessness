import { combineReducers } from 'redux';
import { questionnaire } from './questionnaire';
import { links } from './links';

export default combineReducers({
  questionnaire,
  links,
});
