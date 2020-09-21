import React from 'react';
import { Checkbox, FormControl, FormLabel, FormControlLabel } from '@material-ui/core';

function CustomCheckbox({ name, label, checked, onChange }) {
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">{label}</FormLabel>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} name={name} color="primary" />}
        label={label}
      />
    </FormControl>
  );
}

export default CustomCheckbox;
