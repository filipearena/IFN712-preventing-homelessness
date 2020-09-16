import * as types from './types';

export const saveState = (newFields) => (dispatch, getState) => {
  dispatch({
    type: types.UPDATE_STATE,
    newFields,
  });
};
