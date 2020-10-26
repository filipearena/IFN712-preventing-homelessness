import React from 'react';
import { Grid, Link } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

function CustomHelperLink({ link, message }) {
  const [hover, setHover] = React.useState(false);
  return (
    <Grid container style={{ margin: '15px 10px' }}>
      <Grid item xs>
        <Link
          target="_blank"
          href={link}
          variant="body2"
          style={{ fontSize: 20, textDecoration: 'none' }}
        >
          <Paper
            style={{
              padding: '20px',
              backgroundColor: hover ? '#901d77f2' : '#922179db',
              color: 'white',
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {message}
          </Paper>
        </Link>
      </Grid>
    </Grid>
  );
}

export default CustomHelperLink;
