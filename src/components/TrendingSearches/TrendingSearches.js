import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'wouter';
import Loading from 'components/Loading/Loading';
import useTrendingSearches from 'hooks/useTrendingSearches';

const useStyles = makeStyles(() =>
  createStyles({
    popularLink: {
      color: '#fff',
      textDecoration: 'none',
    },
  })
);

const TrendingSearches = () => {
  const { loadingTrends, trends } = useTrendingSearches();
  const classes = useStyles();

  if (loadingTrends) return <Loading />;

  return (
    <List dense>
      {trends.map((trend, index) => (
        <ListItem disablePadding key={index} dense>
          <ListItemButton component='button'>
            <ListItemText>
              <Link
                className={classes.popularLink}
                to={`/gifs/search/${trend}`}
              >
                {trend}
              </Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TrendingSearches;
