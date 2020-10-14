import React from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomTitle from '../components/CustomTitle';
import { clearState } from '../actions';
import CustomHelperLink from '../components/CustomHelperLink';
import { makeSelectLinks } from '../reducers/selectors/links';

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

function Resources({ onClearState, links }) {
  const history = useHistory();
  const classes = useStyles();

  const goToAssessment = () => {
    onClearState();
    history.push('/housing');
    window.scrollTo(0, 0);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper}>
        <CustomTitle title="Resources" />
        <span>Here are some links you might find usefull:</span>
        {links.map((link) => {
          return <CustomHelperLink key={Math.random()} link={link} message={link} />;
        })}
        <Button
          fullWidth
          variant="contained"
          onClick={() => goToAssessment()}
          className={classes.button}
        >
          Redo Assessment
        </Button>
      </Paper>
    </Container>
  );
}

const mapStateToProps = (state) => {
  const selectLinks = makeSelectLinks();
  return {
    state,
    links: selectLinks(state),
  };
};

export default connect(mapStateToProps, { onClearState: clearState })(Resources);
