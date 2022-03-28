import React from 'react';
import { Box } from '@mui/material';
import Loading from '../../components/Loading/Loading';
import { useGifs } from '../../hooks/useGifs';
import SearchForm from '../../components/SearchForm/SearchForm';
import List from '../../components/List/List';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs(keyword);

  if (loading) return <Loading />;

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' py={4}>
      <SearchForm />
      <List gifs={gifs} />
    </Box>
  );
};

export default SearchResults;
