import React from 'react';
import Gif from '../Gif/Gif';
import { Grid } from '@mui/material';

const List = ({ gifs }) => {
  return (
    <Grid container spacing={1}>
      {gifs.map(({ id, images }) => (
        <Grid key={id} item>
          <Gif id={id} url={images.fixed_width_downsampled.url} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;