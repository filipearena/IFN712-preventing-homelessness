import { createReducer } from 'redux-create-reducer';
import * as types from '../types';

const initialState = [
  // {
  //   url:
  //     'https://www.salvationarmy.org.au/need-help/financial-assistance/financial-counselling/#youretheboss',
  //   name: 'Salvation Army - Financial Counselling',
  // },
  // {
  //   url: 'https://www.salvationarmy.org.au/need-help/financial-assistance/no-interest-loan-scheme/',
  //   name: 'Salvation Army - No Interest Loan Scheme',
  // },
  // {
  //   url: 'https://www.missionaustralia.com.au/servicedirectory/190-financial-support',
  //   name: 'Mission Australia - Financial Support',
  // },
];

export const links = createReducer(initialState, {
  [types.UPDATE_LINKS](state, action) {
    const { newLinks } = action;
    // Removing duplicate links that were pushed again
    const temp = state.concat(newLinks);
    const final = temp.filter((item, pos) => temp.indexOf(item) === pos);
    return final;
  },
  [types.CLEAR_STATE]() {
    return initialState;
  },
});
