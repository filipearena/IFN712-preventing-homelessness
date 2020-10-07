import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

function CustomCurrencyInput({ name, id, label, onChange, isRequired }) {
  return (
    <CurrencyTextField
      label={label}
      id={id}
      required={isRequired}
      name={name}
      variant="standard"
      fullWidth
      currencySymbol="AU$"
      minimumValue="0"
      outputFormat="string"
      decimalCharacter="."
      digitGroupSeparator=","
      onChange={onChange}
    />
  );
}

export default CustomCurrencyInput;
