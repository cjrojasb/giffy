import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Link } from 'wouter';

const useStyles = makeStyles(() =>
  createStyles({
    boxGif: {
      '& img': {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        width: '100%'
      },
    },
  })
);

const Gif = ({ id, url }) => {
  const classes = useStyles();

  return (
    <div key={id} className={classes.boxGif}>
      <Link to={`/gifs/${id}`}>
        <img src={url} alt={id} />
      </Link>
    </div>
  );
};

export default Gif;
