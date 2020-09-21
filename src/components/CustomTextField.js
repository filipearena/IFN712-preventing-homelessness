import React from 'react';
import { TextField } from '@material-ui/core';

function CustomTextField({ name, id, label, onChange, isRequired }) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={isRequired}
      fullWidth
      id={id}
      label={label}
      name={name}
      onChange={onChange}
      autoFocus
    />
  );
}

export default CustomTextField;
