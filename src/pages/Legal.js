import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { saveState } from '../actions';
import GenericForm from '../components/GenericForm';

function Legal({ onSubmit, state }) {
  const history = useHistory();

  const [values, setValues] = React.useState({
    isVictim: state.questionnaire.isVictim || '',
    forceOfWorked: state.questionnaire.forceOfWorked || '',
    housingDiscrimination: state.questionnaire.housingDiscrimination || '',
    deathOfIncomeEarningPartner: state.questionnaire.deathOfIncomeEarningPartner || '',
    facingDivorce: state.questionnaire.facingDivorce || '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const next = (event) => {
    event.preventDefault();
    onSubmit(values);
    history.push('/health');
  };

  const disableSubmit = () => {
    if (values.isVictim.length === 0) return true;
    if (values.forceOfWorked.length === 0) return true;
    if (values.housingDiscrimination.length === 0) return true;
    if (values.deathOfIncomeEarningPartner.length === 0) return true;
    if (values.facingDivorce.length === 0) return true;
  };

  const Form = [
    {
      label: 'Are you a victim of domestic or family violence?',
      name: 'isVictim',
      type: 'radio',
      onChange: handleChange,
      value: values.isVictim,
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
      label: 'Where you forced out of work?',
      name: 'forceOfWorked',
      type: 'radio',
      onChange: handleChange,
      value: values.forceOfWorked,
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
      label: 'Are you facing discrimination in the housing market?',
      name: 'housingDiscrimination',
      type: 'radio',
      onChange: handleChange,
      value: values.housingDiscrimination,
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
      label: 'Are you currently facing the death of an income earning partner/relative?',
      name: 'deathOfIncomeEarningPartner',
      type: 'radio',
      onChange: handleChange,
      value: values.deathOfIncomeEarningPartner,
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
      label: 'Are you currently facing separation/divorce?',
      name: 'facingDivorce',
      type: 'radio',
      onChange: handleChange,
      value: values.facingDivorce,
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

  return <GenericForm form={Form} title="Legal" next={next} disableSubmit={disableSubmit} />;
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  onSubmit: saveState,
})(Legal);
