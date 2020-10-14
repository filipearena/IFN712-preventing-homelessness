import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
import GenericForm from '../components/GenericForm';

function Housing({ onSubmit, state }) {
  const history = useHistory();

  const [values, setValues] = React.useState({
    housing: state.questionnaire.housing || '',
    loan: state.questionnaire.loan || '',
  });

  const handleChange = (event) => {
    if (event.target.name === 'housing') {
      setValues({ [event.target.name]: event.target.value, loan: '' });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/relationship');
    window.scrollTo(0, 0);
  };

  const disableSubmit = () => {
    if (values.housing !== '1') {
      return values.housing.length === 0;
    }
    return values.loan.length === 0;
  };

  const Form = [
    {
      label: 'What is your housing condition?',
      name: 'housing',
      type: 'radio',
      onChange: handleChange,
      value: values.housing,
      required: true,
      options: [
        {
          value: '1',
          label: 'I own my house',
        },
        {
          value: '2',
          label: "I'm paying to use it (rental/hotel/shared accomodation etc)",
        },
        {
          value: '3',
          label: "I'm staying with friends or family",
        },
        {
          value: '4',
          label: "I'm using Supported Residential Service",
        },
        {
          value: '5',
          label: "I'm staying in a government temporary accomodation",
        },
        {
          value: '6',
          label: 'Other',
        },
      ],
    },
    {
      label: 'Did you take a loan/mortgage to pay for it?',
      name: 'loan',
      type: 'radio',
      value: values.loan,
      onChange: handleChange,
      required: true,
      options: [
        {
          value: '1',
          label: 'Yes',
        },
        { value: '0', label: 'No' },
      ],
      show: values.housing === '1',
    },
  ];

  return <GenericForm form={Form} title="Housing" next={next} disableSubmit={disableSubmit} />;
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(Housing);
