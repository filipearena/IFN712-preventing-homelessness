import React from 'react';
import { RadioGroup, FormControl, FormLabel, Radio, FormControlLabel } from '@material-ui/core';

function Option({ value, label }) {
  return <FormControlLabel value={value} control={<Radio color="primary" />} label={label} />;
}

function CustomRadioGroup({ label, name, value, onChange, options }) {
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup name={name} value={value} onChange={onChange}>
        {options.map((props, index) => (
          <Option key={index} {...props} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioGroup;
