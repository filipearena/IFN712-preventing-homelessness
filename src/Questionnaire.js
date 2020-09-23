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
    age: '1',
    salary: '1',
    liveAlone: '1',
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
      label: 'What is your age?',
      name: 'age',
      type: 'radio',
      onChange: handleChange,
      value: values.age,
      options: [
        {
          value: '1',
          label: '60-64',
        },
        {
          value: '2',
          label: '65-70',
        },
        {
          value: '3',
          label: '71-75',
        },
        {
          value: '4',
          label: '76-80',
        },
      ],
    },
    {
      label: 'What is your monthly income?',
      name: 'salary',
      type: 'radio',
      value: values.salary,
      onChange: handleChange,
      options: [
        {
          value: '1',
          label: 'None',
        },
        { value: '2', label: '0 - 1,000 AU$' },
        { value: '3', label: '1,000 - 2,000 AU$' },
        { value: '4', label: '3,000 - 4,000 AU$' },
      ],
    },
    {
      label: 'Do you live alone?',
      name: 'liveAlone',
      type: 'radio',
      value: values.liveAlone,
      onChange: handleChange,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        { value: '2', label: 'No' },
      ],
    },
  ];

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTitle title="Profile" />
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
