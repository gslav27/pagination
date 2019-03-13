import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';


const HomeLink = () => (
  <Link
    component={RouterLink}
    to={`${process.env.PUBLIC_URL}/`}
    title='to home page'
  >
    <Typography
      variant='h5'
      color='inherit'
    >
      Pagination
    </Typography>
  </Link>
);

export default HomeLink;
