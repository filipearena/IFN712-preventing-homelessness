import React from 'react';
import CustomRadioGroup from './CustomRadioGroup';
// import CustomCheckbox from './CustomCheckbox';
import CustomCurrencyInput from './CustomCurrencyInput';

function GenerateCustomComponent({ show, ...props }) {
  const { type } = props;
  if (type === 'radio' && show) {
    return <CustomRadioGroup {...props} />;
  }
  // if (type === 'checkbox' && show) {
  //   return <CustomCheckbox {...props} />;
  // }
  if (type === 'currencyInput' && show) {
    return <CustomCurrencyInput {...props} />;
  }
  return null;
}

function FormGenerator({ form }) {
  return (
    <>
      {form.map((props, index) => (
        <GenerateCustomComponent key={index} {...props} />
      ))}
    </>
  );
}

GenerateCustomComponent.defaultProps = {
  show: true,
};

export default FormGenerator;
