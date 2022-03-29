import React from 'react';
import { Box, Button } from '@mui/material';
import Loading from 'components/Loading/Loading';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm/SearchForm';
import List from 'components/List/List';
import Title from 'components/Title/Title';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs(keyword);

  if (loading) return <Loading />;

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' py={4}>
      <SearchForm />
      <Title title={keyword} decode />
      <List gifs={gifs} />
      <br />
      <Button variant='contained' onClick={handleNextPage}>
        Next Page
      </Button>
    </Box>
  );
};

export default SearchResults;
