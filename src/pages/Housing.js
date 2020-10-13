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
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'grey',
    color: 'black',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function Housing({ onSubmit, state }) {
  const history = useHistory();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    housing: state.questionnaire.housing || '',
    loan: state.questionnaire.loan || '',
  });

  const handleChange = (event) => {
    if (event.target.name === 'housing') {
      setValues({ [event.target.name]: event.target.value, loan: '' });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/relationship');
  };

  const goBack = () => {
    history.goBack();
  };

  const disableSubmit = () => {
    if (values.housing !== '1') {
      return values.housing.length === 0;
    }
    return values.loan.length === 0;
  };

  const Form = [
    {
      label: 'What is your housing condition?',
      name: 'housing',
      type: 'radio',
      onChange: handleChange,
      value: values.housing,
      required: true,
      options: [
        {
          value: '1',
          label: 'Own a house',
        },
        {
          value: '2',
          label: 'Renting',
        },
        {
          value: '3',
          label: 'Staying with friends or family',
        },
        {
          value: '4',
          label: 'Using Supported Residential Service',
        },
        {
          value: '5',
          label: 'Staying in temporary accomodation',
        },
      ],
    },
    {
      label: 'Did you take a loan/mortgage to pay for it?',
      name: 'loan',
      type: 'radio',
      value: values.loan,
      onChange: handleChange,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        { value: '0', label: 'No' },
      ],
      show: values.housing === '1',
    },
  ];

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <CustomTitle title="Housing" />
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
})(Housing);
