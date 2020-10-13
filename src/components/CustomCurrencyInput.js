import React from 'react';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  // TODO: increase fontsize for label
  // currencyField: {
  //   '.MuiInputLabel-root': {
  //     fontSize: 20,
  //   },
  // },
}));

function CustomCurrencyInput({ name, id, label, onChange, isRequired }) {
  const classes = useStyles();
  return (
    <Box style={{ marginBottom: 15, justifyContent: 'flex-end', width: '50%' }}>
      <CurrencyTextField
        label={label}
        id={id}
        required={isRequired}
        name={name}
        fullWidth
        textAlign="left"
        variant="outlined"
        currencySymbol="AU$"
        minimumValue="0"
        outputFormat="string"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={onChange}
        // className={classes.currencyField}
      />
    </Box>
  );
}

export default CustomCurrencyInput;
