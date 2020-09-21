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

const GENDER = [
  { key: 1, value: 'female', label: 'Female' },
  { key: 2, value: 'male', label: 'Male' },
];

function Questionnaire({ onSubmit, navigate }) {
  const history = useHistory();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    gender: 'female',
    password: '',
    email: '',
    authorized: false,
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleChangeCheckbox = (event) => {
    console.log('event.target.name', event.target.name);
    console.log('event.target.checked', event.target.checked);
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const next = (event) => {
    event.preventDefault();
    console.log('values before next step', values);
    console.log('got to next step');
    onSubmit(values);
    history.push('/questionnaireTwo');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTitle title="Section1" />
        <form className={classes.form} onSubmit={next}>
          <CustomTextField
            id="email"
            name="email"
            label="Email"
            onChange={handleChange}
            isRequired={false}
          />
          <CustomRadioGroup
            label="What is your income?"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            options={GENDER}
          />
          <CustomCheckbox
            name="authorized"
            label="Authorized"
            checked={values.authorized}
            onChange={handleChangeCheckbox}
          />
          <CustomHelperLink message="Need Help?" link="https://www.uol.com.br" />
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
