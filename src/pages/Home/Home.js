import React from 'react';
import { Box, Grid } from '@mui/material';
import SearchForm from 'components/SearchForm/SearchForm';
import Title from 'components/Title/Title';
import List from 'components/List/List';
import Loading from 'components/Loading/Loading';
import LazyTrendingSearches from 'components/TrendingSearches/TrendingSearches';
import useTrendingGifs from 'hooks/useTrendingGifs';

const Home = () => {
  const { loading, gifs } = useTrendingGifs();

  if (loading) return <Loading />;

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' py={4}>
      <SearchForm />
      <Grid container spacing={1}>
        <Grid item container md={9}>
          <Grid container spacing={1}>
            <Grid item md={12}>
              <Title title='Trending Gifs' />
            </Grid>
            <List gifs={gifs} />
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Title title='Tendencias' />
          <LazyTrendingSearches />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
