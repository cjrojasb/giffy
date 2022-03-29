import React from 'react';
import { Box, Grid } from '@mui/material';
import SearchForm from 'components/SearchForm/SearchForm';
import Title from 'components/Title/Title';
import List from 'components/List/List';
import Loading from 'components/Loading/Loading';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches';
import useTrendingGifs from 'hooks/useTrendingGifs';
import useTrendingSearches from 'hooks/useTrendingSearches';

const Home = () => {
  const { loading, gifs } = useTrendingGifs();
  const { loadingTrends, trends } = useTrendingSearches();

  if (loading || loadingTrends) return <Loading />;

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
          <TrendingSearches trends={trends} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
