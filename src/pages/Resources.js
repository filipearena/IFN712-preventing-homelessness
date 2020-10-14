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

function Resources({ onClearState, links, state }) {
  const history = useHistory();
  const classes = useStyles();

  const goToAssessment = () => {
    onClearState();
    history.push('/home', null);
    window.scrollTo(0, 0);
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper className={classes.paper}>
        <CustomTitle title="Resources" />
        {(state.questionnaire.incomePercentageSpentOnRent > '0.30' ||
          state.questionnaire.incomePercentageSpentOnMortgage > '0.30') && (
          <span style={{ margin: '15px 10px', color: 'red' }}>
            Warning: You are spending more than 30% or your total income on housing. For more
            information on how to change this situation, refer to the links below:
          </span>
        )}
        {links.map((link) => {
          return <CustomHelperLink key={Math.random()} link={link} message={link} />;
        })}
        <Button variant="contained" onClick={() => goToAssessment()} className={classes.button}>
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
