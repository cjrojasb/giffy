import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'wouter';

const useStyles = makeStyles(() =>
  createStyles({
    popularLink: {
      color: '#fff',
      textDecoration: 'none',
    },
  })
);

const PopularGif = ({ popularGifs }) => {
  const classes = useStyles();

  return (
    <List dense>
      {popularGifs.map((popularGif, index) => (
        <ListItem disablePadding key={index} dense>
          <ListItemButton component='button'>
            <ListItemText>
              <Link
                className={classes.popularLink}
                to={`/gifs/search/${popularGif}`}
              >{`Gifs de ${popularGif}`}</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default PopularGif;
