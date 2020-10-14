import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
import CustomRadioGroup from '../components/CustomRadioGroup';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomTextField from '../components/CustomTextField';
import CustomHelperLink from '../components/CustomHelperLink';
import CustomTitle from '../components/CustomTitle';
import FormGenerator from '../components/FormGenerator';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: '25px 40px 15px 40px',
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
    backgroundColor: 'blue',
    color: 'white',
  },
  backButton: {
    backgroundColor: 'grey',
    color: 'black',
    margin: theme.spacing(3, 0, 2),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function Legal({ onSubmit, state }) {
  const history = useHistory();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    isVictim: state.questionnaire.isVictim || '',
    forceOfWorked: state.questionnaire.forceOfWorked || '',
    housingDiscrimination: state.questionnaire.housingDiscrimination || '',
    deathOfIncomeEarningPartner: state.questionnaire.deathOfIncomeEarningPartner || '',
    facingDivorce: state.questionnaire.facingDivorce || '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/health');
  };

  const goBack = () => {
    history.goBack();
  };

  const disableSubmit = () => {
    if (values.isVictim.length === 0) return true;
    if (values.forceOfWorked.length === 0) return true;
    if (values.housingDiscrimination.length === 0) return true;
    if (values.deathOfIncomeEarningPartner.length === 0) return true;
    if (values.facingDivorce.length === 0) return true;
  };

  const Form = [
    {
      label: 'Are you a victim of domestic or family violence?',
      name: 'isVictim',
      type: 'radio',
      onChange: handleChange,
      value: values.isVictim,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
    {
      label: 'Where you forced out of work?',
      name: 'forceOfWorked',
      type: 'radio',
      onChange: handleChange,
      value: values.forceOfWorked,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
    {
      label: 'Are you facing discrimination in the housing market?',
      name: 'housingDiscrimination',
      type: 'radio',
      onChange: handleChange,
      value: values.housingDiscrimination,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
    {
      label: 'Are you currently facing the death of an income earning partner/relative?',
      name: 'deathOfIncomeEarningPartner',
      type: 'radio',
      onChange: handleChange,
      value: values.deathOfIncomeEarningPartner,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
    {
      label: 'Are you currently facing separation/divorce?',
      name: 'facingDivorce',
      type: 'radio',
      onChange: handleChange,
      value: values.facingDivorce,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
  ];

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <CustomTitle title="Legal" />
        <form className={classes.form} onSubmit={next}>
          <FormGenerator form={Form} />
          <div className={classes.buttonsContainer}>
            <Button onClick={() => goBack()} className={classes.backButton}>
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              className={classes.submit}
              disabled={disableSubmit()}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(Legal);
