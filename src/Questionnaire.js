import React from 'react';
import { connect } from 'react-redux';

export class App extends React.Component {
  render() {
    const { test } = this.props;
    return <div>{test}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.questionnaire.test,
  };
};

const mapDispatchToProps = {
  // nextPage,
  // previousPage,
  // setTableData,
  // setLoading,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
