import { createSelector } from 'reselect';

const linksSelector = (state) => state.links;

export const makeSelectLinks = () => createSelector([linksSelector], (links) => links);
