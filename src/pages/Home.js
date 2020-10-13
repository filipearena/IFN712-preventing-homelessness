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
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'blue',
    color: 'white',
  },
}));

function Home({ onSubmit, state }) {
  const history = useHistory();
  const classes = useStyles();

  const goToAssessment = () => {
    history.push('/housing');
  };

  const needHelpNow = () => {
    window.location.href = 'https://askizzy.org.au/';
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <CustomTitle title="Welcome" />
        <Button
          fullWidth
          variant="contained"
          onClick={() => needHelpNow()}
          className={classes.submit}
        >
          I Need Help Now
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => goToAssessment()}
          className={classes.submit}
        >
          Proceed with Assessment
        </Button>
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
  // onSubmit: saveState,
})(Home);
