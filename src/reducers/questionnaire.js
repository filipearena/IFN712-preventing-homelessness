import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = {};

export const questionnaire = createReducer(initialState, {
  [types.UPDATE_STATE](state, action) {
    const { newFields } = action;
    return {
      ...state,
      ...newFields,
    };
  },
});
