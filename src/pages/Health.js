import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
import GenericForm from '../components/GenericForm';

function Health({ onSubmit, state }) {
  const history = useHistory();

  const [values, setValues] = React.useState({
    illness: state.questionnaire.illness || '',
    drugAbuse: state.questionnaire.drugAbuse || '',
    lonelyness: state.questionnaire.lonelyness || '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/resources');
  };

  const disableSubmit = () => {
    if (values.illness.length === 0) return true;
    if (values.drugAbuse.length === 0) return true;
    if (values.lonelyness.length === 0) return true;
  };

  const Form = [
    {
      label: 'Are you suffering from an illness?',
      name: 'illness',
      type: 'radio',
      onChange: handleChange,
      value: values.illness,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
    {
      label: 'Do you suffer or have history of substance/drug abuse?',
      name: 'drugAbuse',
      type: 'radio',
      onChange: handleChange,
      value: values.drugAbuse,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
    {
      label: 'Are you suffering form depression or lonelyness?',
      name: 'lonelyness',
      type: 'radio',
      onChange: handleChange,
      value: values.lonelyness,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        {
          value: '0',
          label: 'No',
        },
      ],
    },
  ];

  return <GenericForm form={Form} title="Health" next={next} disableSubmit={disableSubmit} />;
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(Health);
