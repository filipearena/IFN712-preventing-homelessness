import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { Box } from '@material-ui/core';

function CustomCurrencyInput({ name, id, label, onChange, isRequired }) {
  return (
    <Box style={{ marginBottom: 15 }}>
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
    </Box>
  );
}

export default CustomCurrencyInput;
