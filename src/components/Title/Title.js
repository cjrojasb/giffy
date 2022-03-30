import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({ title, decode = false }) => {
  return (
    <Typography
      variant='h4'
      component='h4'
      gutterBottom
      align='left'
      display='block'
    >
      {decode ? decodeURI(title) : title}
    </Typography>
  );
};

export default Title;
