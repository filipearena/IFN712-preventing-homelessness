import * as types from './types';

export const exempleAction = ({ newText }) => (dispatch, getState) => {
  dispatch({
    type: types.UPDATE_STATE,
    newText,
  });
};
