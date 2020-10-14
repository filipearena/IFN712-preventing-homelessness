import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import CustomTitle from './CustomTitle';
import FormGenerator from './FormGenerator';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
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
    backgroundColor: 'rgb(39,39,200)',
    color: 'white',
  },
  backButton: {
    backgroundColor: '#ccc',
    color: 'black',
    margin: theme.spacing(3, 0, 2),
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

function GenericForm({ title, form, next, disableSubmit }) {
  const history = useHistory();
  const classes = useStyles();

  const goBack = () => {
    history.goBack();
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper}>
        <CustomTitle title={title} />
        <form className={classes.form} onSubmit={next}>
          <FormGenerator form={form} />
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
      </Paper>
    </Container>
  );
}

export default GenericForm;
