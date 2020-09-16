import React from 'react';
import { connect } from 'react-redux';
import { exempleAction } from './actions';

function Questionnaire({ onUpdate, test }) {
  const handleOnPress = () => {
    onUpdate({ newText: 'UPDATED' });
  };
  return (
    <div>
      <button type="button" onClick={() => handleOnPress()}>
        update state
      </button>
      <span>{test}</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    test: state.questionnaire.test,
  };
};

export default connect(mapStateToProps, {
  onUpdate: exempleAction,
})(Questionnaire);
