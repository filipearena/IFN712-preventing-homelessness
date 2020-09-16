import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = {
  test: 'this is comming from the state',
};

export const questionnaire = createReducer(initialState, {
  [types.GET_VIRTUAL_VIDEO_SESSIONS_LIST_SUCCESS](state, action) {
    const { videoSessionsList } = action;
    return {
      ...state,
      videoSessionsList,
    };
  },
});
