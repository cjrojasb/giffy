import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({ title }) => {
  return (
    <Typography variant='h4' component='h4' gutterBottom align='left'>
      {title}
    </Typography>
  );
};

export default Title;
