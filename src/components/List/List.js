import React from 'react';
import Gif from 'components/Gif/Gif';
import { createStyles, makeStyles } from '@material-ui/core';
import { Grid, Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

const useStyles = makeStyles(() =>
  createStyles({
    boxGrid: {
      alignItems: 'center',
      display: 'grid',
      gap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridTemplateRows: 'masonry',
      width: '100%',
    },
  })
);

const List = ({ gifs }) => {
  const classes = useStyles();

  return (
    <Box width='100%'>
      <Masonry columns={{ xs: 1, sm: 4, md: 4 }} spacing={1}>
        {gifs.map(({ id, images }, index) => (
          <Gif key={index} id={id} url={images.fixed_width_downsampled.url} />
        ))}
      </Masonry>
    </Box>

    // <Box className={classes.boxGrid}>
    //   {gifs.map(({ id, images }, index) => (
    //     <Gif key={index} id={id} url={images.fixed_width_downsampled.url} />
    //   ))}
    // </Box>

    // <Grid container spacing={1}>
    //   {gifs.map(({ id, images }) => (
    //     <Grid key={id} item xs={12} md={3}>
    //       <Gif id={id} url={images.fixed_width_downsampled.url} />
    //     </Grid>
    //   ))}
    // </Grid>
  );
};

export default List;
