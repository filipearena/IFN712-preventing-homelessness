import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = {};

export const questionnaire = createReducer(initialState, {
  [types.UPDATE_QUESTIONNAIRE](state, action) {
    const { newFields } = action;
    return {
      ...state,
      ...newFields,
    };
  },
  [types.CLEAR_STATE]() {
    return initialState;
  },
});
