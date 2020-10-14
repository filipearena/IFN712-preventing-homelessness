import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
import GenericForm from '../components/GenericForm';

function RelationShip({ onSubmit, state }) {
  const history = useHistory();

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

  const Form = [
    {
      label: 'Are you single?',
      name: 'single',
      type: 'radio',
      onChange: handleChange,
      value: values.single,
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

  return <GenericForm form={Form} title="Relationship" next={next} disableSubmit={disableSubmit} />;
}

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(RelationShip);
