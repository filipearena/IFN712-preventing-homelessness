import React from 'react';
import { Grid, Link } from '@material-ui/core';

function CustomHelperLink({ link, message }) {
  return (
    <Grid container>
      <Grid item xs>
        <Link target="_blank" href={link} variant="body2">
          {message}
        </Link>
      </Grid>
    </Grid>
  );
}

export default CustomHelperLink;
