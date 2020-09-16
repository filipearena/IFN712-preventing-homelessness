import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = {
  gender: 'female',
  password: '',
  email: '',
  authorized: false,
};

export const questionnaire = createReducer(initialState, {
  [types.UPDATE_STATE](state, action) {
    console.log('action', action);
    const { newFields } = action;
    return {
      ...state,
      ...newFields,
    };
  },
});
