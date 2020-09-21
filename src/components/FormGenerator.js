import React from 'react';
import CustomRadioGroup from './CustomRadioGroup';
import CustomCheckbox from './CustomCheckbox';

function GenerateCustomComponent(props) {
  if (props.type === 'radio') {
    return <CustomRadioGroup {...props} />;
  }
  if (props.type === 'checkbox') {
    return <CustomCheckbox {...props} />;
  }
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

export default FormGenerator;
