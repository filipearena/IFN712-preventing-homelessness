import * as types from './types';
import { valueToLink } from './constants/links';

export const saveState = (newFields) => (dispatch, getState) => {
  // Generating links from values informed inside the state
  const keys = Object.keys(newFields);
  const links = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keys.length; i++) {
    if (valueToLink[keys[i]] && [newFields[keys[i]]]) {
      links.push(valueToLink[keys[i]][newFields[keys[i]]]);
    }
  }

  dispatch({
    type: types.UPDATE_QUESTIONNAIRE,
    newFields,
  });

  dispatch({
    type: types.UPDATE_LINKS,
    newLinks: links[0],
  });
};
