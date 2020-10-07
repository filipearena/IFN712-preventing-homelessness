import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
// import CustomHelperLink from '../components/CustomHelperLink';
import CustomTitle from '../components/CustomTitle';
import FormGenerator from '../components/FormGenerator';
import {
  makeSelectIsRenting,
  makeSelectHaveLoanOrMortage,
} from '../reducers/selectors/questionnaire';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Financial({ onPersistData, isRenting, haveLoanOrMortgage, state }) {
  const history = useHistory();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    haveWork: state.questionnaire.haveWork || '',
    incomeWork: state.questionnaire.incomeWork || 0,
    haveSuper: state.questionnaire.haveSuper || '',
    incomeSupper: state.questionnaire.incomeSupper || 0,
    haveAgedPension: state.questionnaire.haveAgedPension || '',
    incomeAgedPension: state.questionnaire.incomeAgedPension || 0,
    haveFamilySupport: state.questionnaire.haveFamilySupport || '',
    haveDependants: state.questionnaire.haveDependants || '',
    inDebt: state.questionnaire.inDebt || '',
    payForRent: state.questionnaire.payForRent || 0,
    payForLoanOrMortgage: state.questionnaire.payForLoanOrMortgage || 0,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const next = (event) => {
    event.preventDefault();
    // TODO: CALCULATE HOW MUCH PERSON IS SPENDING ON HOUSING FROM INCOME
    onPersistData(values);
    history.push('/relationship');
  };

  const goBack = () => {
    history.goBack();
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
      label: 'Do you have superannuation?',
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
      label: 'How much do you receive from super on a weekly basis?',
      name: 'incomeSuper',
      type: 'currencyInput',
      value: values.incomeSuper,
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
      label: 'How much do you receive from aged pension or others on a weekly basis?',
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
      label: 'How much money do you pay for rent?',
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

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTitle title="Financial" />
        <form className={classes.form} onSubmit={next}>
          <FormGenerator form={Form} />
          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            Next
          </Button>
          <Button onClick={() => goBack()} className={classes.submit}>
            Back
          </Button>
        </form>
      </div>
    </Container>
  );
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
