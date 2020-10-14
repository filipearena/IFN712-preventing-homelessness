import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = [];

export const links = createReducer(initialState, {
  [types.UPDATE_LINKS](state, action) {
    const { newLinks } = action;
    // Removing duplicate links that were pushed again
    const temp = state.concat(newLinks);
    const final = temp.filter((item, pos) => temp.indexOf(item) === pos);
    return final;
  },
});
