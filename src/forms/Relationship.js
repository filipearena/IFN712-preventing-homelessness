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
    backgroundColor: 'grey',
    color: 'black',
  },
}));

function RelationShip({ onSubmit, state }) {
  const history = useHistory();
  const classes = useStyles();

  const [values, setValues] = React.useState({
    single: state.questionnaire.single || '',
    partnerHelps: state.questionnaire.partnerHelps || '',
  });

  const handleChange = (event) => {
    if (event.target.name === 'single') {
      setValues({ [event.target.name]: event.target.value, partnerHelps: '' });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const disableSubmit = () => {
    if (values.single === '0') {
      return values.partnerHelps.length === 0;
    }
    return values.single.length === 0;
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/financial');
  };

  const goBack = () => {
    history.goBack();
  };

  const Form = [
    {
      label: 'Are you single?',
      name: 'single',
      type: 'radio',
      onChange: handleChange,
      value: values.single,
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
      label: 'Does your partner help with the income?',
      name: 'partnerHelps',
      type: 'radio',
      value: values.partnerHelps,
      onChange: handleChange,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        { value: '0', label: 'No' },
      ],
      show: values.single === '0',
    },
  ];

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CustomTitle title="Relationship" />
        <form className={classes.form} onSubmit={next}>
          <FormGenerator form={Form} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            disabled={disableSubmit()}
          >
            Next
          </Button>
          <Button onClick={() => goBack()} className={classes.backButton}>
            Back
          </Button>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(RelationShip);
