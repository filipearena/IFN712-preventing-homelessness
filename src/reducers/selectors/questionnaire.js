import { createSelector } from 'reselect';

const questionnaireSelector = (state) => state.questionnaire;

export const makeSelectIsRenting = () =>
  createSelector([questionnaireSelector], (questionnaire) => questionnaire.housing === '2');

export const makeSelectHaveLoanOrMortage = () =>
  createSelector(
    [questionnaireSelector],
    (questionnaire) => questionnaire.housing === '1' && questionnaire.loan === '1'
  );
