import React from 'react';
import { Grid, Link } from '@material-ui/core';

function CustomHelperLink({ link, message }) {
  return (
    <Grid container style={{ margin: '15px 10px' }}>
      <Grid item xs>
        <Link target="_blank" href={link} variant="body2" style={{ fontSize: 20 }}>
          {message}
        </Link>
      </Grid>
    </Grid>
  );
}

export default CustomHelperLink;
