import React from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import CustomTitle from '../components/CustomTitle';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: '25px 40px 15px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'rgb(39,39,200)',
    color: 'white',
  },
}));

function Home() {
  const history = useHistory();
  const classes = useStyles();

  const goToAssessment = () => {
    history.push('/housing');
  };

  const needHelpNow = () => {
    window.location.href = 'https://askizzy.org.au/';
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper}>
        <CustomTitle title="Welcome" />
        <Button
          fullWidth
          variant="contained"
          onClick={() => needHelpNow()}
          className={classes.button}
        >
          I Need Help Now
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => goToAssessment()}
          className={classes.button}
        >
          Proceed with Assessment
        </Button>
      </Paper>
    </Container>
  );
}

export default Home;
