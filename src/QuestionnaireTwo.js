import React from 'react';
import { connect } from 'react-redux';
// import { useForm, Controller } from 'react-hook-form';
import { RadioGroup, Button, FormControl, FormLabel, Radio } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { saveState } from './actions';

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

function QuestionnaireTwo({ onSubmit }) {
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
    setValues({ ...values, [event.target.name]: event.target.checked });
  };

  const next = (event) => {
    event.preventDefault();
    console.log('values before next step', values);
    console.log('got to next step');
    onSubmit(values);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={next}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
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
})(QuestionnaireTwo);
