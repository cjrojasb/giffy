import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'wouter';
import useTrendingSearches from 'hooks/useTrendingSearches';
import Loading from 'components/Loading/Loading';

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

const LazyTrendingSearches = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const LazyTrendingElement = document.getElementById('LazyTrending');
    const onChange = (entries) => {
      const lazyElement = entries[0];
      if (lazyElement.isIntersecting) {
        setShow(true);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px',
    });

    observer.observe(LazyTrendingElement);
  }, []);

  return (
    <div id='LazyTrending'>{show ? <TrendingSearches /> : <Loading />}</div>
  );
};

export default LazyTrendingSearches;
