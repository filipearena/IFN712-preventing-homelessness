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
import { saveState } from './actions';
import CustomRadioGroup from './components/CustomRadioGroup';
import CustomCheckbox from './components/CustomCheckbox';
import CustomTextField from './components/CustomTextField';
import CustomHelperLink from './components/CustomHelperLink';
import CustomTitle from './components/CustomTitle';
import FormGenerator from './components/FormGenerator';

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

function Questionnaire({ onSubmit, navigate }) {
  const history = useHistory();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    salaryOne: '0',
    salaryTwo: '1000',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleChangeCheckbox = (event) => {
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/questionnaireTwo');
  };

  const Form = [
    {
      label: 'What is your income?',
      name: 'salaryOne',
      type: 'radio',
      onChange: handleChange,
      value: values.salaryOne,
      options: [
        {
          value: '0',
          label: 'None',
        },
        { value: '1000', label: '5 - 1000' },
      ],
    },
    {
      label: 'What is your income?',
      name: 'salaryTwo',
      type: 'radio',
      value: values.salaryTwo,
      onChange: handleChange,
      options: [
        {
          value: '0',
          label: 'None',
        },
        { value: '1000', label: '5 - 1000' },
      ],
    },
  ];

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTitle title="Section1" />
        <form className={classes.form} onSubmit={next}>
          <FormGenerator form={Form} />
          <Button type="submit" fullWidth variant="contained" className={classes.submit}>
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(Questionnaire);
