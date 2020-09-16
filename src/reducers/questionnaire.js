import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = {
  test: 'this is comming from the state',
};

export const questionnaire = createReducer(initialState, {
  [types.UPDATE_STATE](state, action) {
    const { newText } = action;
    return {
      ...state,
      test: newText,
    };
  },
});
