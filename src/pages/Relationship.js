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
    partnerIncome: state.questionnaire.partnerIncome || '0.00',
  });

  const handleChange = (event) => {
    if (event.target.name === 'single') {
      setValues({ ...values, [event.target.name]: event.target.value, partnerHelps: '' });
    } else if (event.target.name === 'partnerHelps') {
      setValues({ ...values, [event.target.name]: event.target.value, partnerIncome: '0.00' });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const disableSubmit = () => {
    if (values.single === '0') {
      return values.partnerHelps.length === 0;
    }
    if (values.partnerHelps === '1') {
      return values.partnerIncome.length === '0.00';
    }
    return values.single.length === 0;
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/financial');
    window.scrollTo(0, 0);
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
    {
      label: 'What is his weekly income?',
      name: 'partnerIncome',
      type: 'currencyInput',
      value: values.partnerIncome,
      onChange: handleChange,
      show: values.partnerHelps === '1',
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
