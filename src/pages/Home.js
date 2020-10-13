import React from 'react';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import CustomTitle from '../components/CustomTitle';

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

export default Home;
