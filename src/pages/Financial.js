import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
import GenericForm from '../components/GenericForm';
import {
  makeSelectIsRenting,
  makeSelectHaveLoanOrMortage,
} from '../reducers/selectors/questionnaire';

function Financial({ onPersistData, isRenting, haveLoanOrMortgage, state }) {
  const history = useHistory();

  const [values, setValues] = React.useState({
    haveWork: state.questionnaire.haveWork || '',
    incomeWork: state.questionnaire.incomeWork || '0.00',
    haveSuper: state.questionnaire.haveSuper || '',
    incomeSupper: state.questionnaire.incomeSupper || '0.00',
    haveAgedPension: state.questionnaire.haveAgedPension || '',
    incomeAgedPension: state.questionnaire.incomeAgedPension || '0.00',
    haveFamilySupport: state.questionnaire.haveFamilySupport || '',
    haveDependants: state.questionnaire.haveDependants || '',
    inDebt: state.questionnaire.inDebt || '',
    payForRent: state.questionnaire.payForRent || '0.00',
    payForLoanOrMortgage: state.questionnaire.payForLoanOrMortgage || '0.00',
    incomePercentageSpentOnRent: state.questionnaire.incomePercentageSpentOnRent || '0.00',
    incomePercentageSpentOnMortgage: state.questionnaire.incomePercentageSpentOnMortgage || '0.00',
  });

  const handleChange = (event) => {
    if (event.target.name === 'haveWork') {
      setValues({ ...values, [event.target.name]: event.target.value, incomeWork: '0.00' });
    } else if (event.target.name === 'haveSuper') {
      setValues({ ...values, [event.target.name]: event.target.value, incomeSupper: '0.00' });
    } else if (event.target.name === 'haveAgedPension') {
      setValues({ ...values, [event.target.name]: event.target.value, incomeAgedPension: '0.00' });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const next = (event) => {
    event.preventDefault();
    if (isRenting || haveLoanOrMortgage) {
      const totalIncome =
        parseInt(values.incomeWork, 10) +
        parseInt(values.incomeSupper, 10) +
        parseInt(values.incomeAgedPension, 10) +
        parseInt(state.questionnaire.partnerIncome, 10);
      if (isRenting) {
        const incomePercentageSpentOnRent = values.payForRent / totalIncome;
        onPersistData({
          ...values,
          incomePercentageSpentOnRent: incomePercentageSpentOnRent.toFixed(2),
        });
      }
      if (haveLoanOrMortgage) {
        const incomePercentageSpentOnMortgage = values.payForLoanOrMortgage / totalIncome;
        onPersistData({
          ...values,
          incomePercentageSpentOnMortgage: incomePercentageSpentOnMortgage.toFixed(2),
        });
      }
    } else {
      onPersistData(values);
    }
    history.push('/legal');
  };

  const Form = [
    {
      label: 'Are you currently working?',
      name: 'haveWork',
      type: 'radio',
      onChange: handleChange,
      value: values.haveWork,
      options: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Yes',
        },
      ],
    },
    {
      label: 'What is your weekly income?',
      name: 'incomeWork',
      type: 'currencyInput',
      value: values.incomeWork,
      onChange: handleChange,
      show: values.haveWork === '1',
    },
    {
      label: 'Do you receive superannuation?',
      name: 'haveSuper',
      type: 'radio',
      onChange: handleChange,
      value: values.haveSuper,
      options: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Yes',
        },
      ],
    },
    {
      label: 'How much per week?',
      name: 'incomeSupper',
      type: 'currencyInput',
      value: values.incomeSupper,
      onChange: handleChange,
      show: values.haveSuper === '1',
    },
    {
      label: 'Do you receive aged pension or any other weekly income?',
      name: 'haveAgedPension',
      type: 'radio',
      onChange: handleChange,
      value: values.haveAgedPension,
      options: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Yes',
        },
      ],
    },
    {
      label: 'How much per week?',
      name: 'incomeAgedPension',
      type: 'currencyInput',
      value: values.incomeAgedPension,
      onChange: handleChange,
      show: values.haveAgedPension === '1',
    },
    {
      label: 'Do you have family support?',
      name: 'haveFamilySupport',
      type: 'radio',
      onChange: handleChange,
      value: values.haveFamilySupport,
      options: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Yes',
        },
      ],
    },
    {
      label: 'Are you caring responsibilities for children, or other dependants?',
      name: 'haveDependants',
      type: 'radio',
      onChange: handleChange,
      value: values.haveDependants,
      options: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Yes',
        },
      ],
    },
    {
      label: 'Are you in debt?',
      name: 'inDebt',
      type: 'radio',
      onChange: handleChange,
      value: values.inDebt,
      options: [
        {
          value: '0',
          label: 'No',
        },
        {
          value: '1',
          label: 'Yes',
        },
      ],
    },
    {
      label: 'How much do you pay for rent per week?',
      name: 'payForRent',
      type: 'currencyInput',
      onChange: handleChange,
      value: values.payForRent,
      show: isRenting,
    },
    {
      label: 'How much money do you pay for loan or mortgage?',
      name: 'payForLoanOrMortgage',
      type: 'currencyInput',
      onChange: handleChange,
      value: values.payForLoanOrMortgage,
      show: haveLoanOrMortgage,
    },
  ];

  const disableSubmit = () => {
    if (values.haveWork.length === 0) return true;
    if (values.haveWork === '1' && values.incomeWork === '0.00') return true;
    if (values.haveSuper.length === 0) return true;
    if (values.haveSuper === '1' && values.incomeSupper === '0.00') return true;
    if (values.haveAgedPension.length === 0) return true;
    if (values.haveAgedPension === '1' && values.incomeAgedPension === '0.00') return true;
    if (values.haveFamilySupport.length === 0) return true;
    if (values.inDebt.length === 0) return true;
    if (isRenting && values.payForRent === 0) return true;
    if (haveLoanOrMortgage && values.payForLoanOrMortgage === 0) return true;
  };

  return <GenericForm form={Form} title="Financial" next={next} disableSubmit={disableSubmit} />;
}

const mapStateToProps = (state) => {
  const selectIsRenting = makeSelectIsRenting();
  const selectHaveLoanOrMortgage = makeSelectHaveLoanOrMortage();
  return {
    isRenting: selectIsRenting(state),
    haveLoanOrMortgage: selectHaveLoanOrMortgage(state),
    state,
  };
};

export default connect(mapStateToProps, {
  onPersistData: saveState,
})(Financial);
