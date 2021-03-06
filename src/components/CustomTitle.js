import React from 'react';
import { Typography } from '@material-ui/core';

function CustomTitle({ title }) {
  return (
    <Typography component="h1" variant="h5" style={{ marginBottom: 15 }}>
      {title}
    </Typography>
  );
}

export default CustomTitle;
