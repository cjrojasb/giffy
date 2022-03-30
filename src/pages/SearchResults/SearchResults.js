import React, { useCallback, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/core';
import Loading from 'components/Loading/Loading';
import { useGifs } from 'hooks/useGifs';
import SearchForm from 'components/SearchForm/SearchForm';
import List from 'components/List/List';
import Title from 'components/Title/Title';
import useLazyLoad from 'hooks/useLazyLoad';
import debounce from 'just-debounce-it';

const useStyles = makeStyles(() =>
  createStyles({
    boxGifs: {
      minHeight: '100vh',
    },
  })
);

const SearchResults = ({ params }) => {
  const classes = useStyles();
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs(keyword);
  const externalRef = useRef();
  const { show } = useLazyLoad({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const debounceHandleNextPage = useCallback(
    debounce(() => handleNextPage(), 1000),
    [setPage]
  );

  useEffect(() => {
    if (show) debounceHandleNextPage();
  }, [debounceHandleNextPage, show]);

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' py={4}>
      <SearchForm />
      <Title title={keyword} decode />
      <Box className={classes.boxGifs}>
        {gifs.length > 0 ? <List gifs={gifs} /> : <Loading />}
      </Box>
      <br />
      <Button variant='contained' onClick={handleNextPage}>
        Next Page
      </Button>
      <div ref={externalRef}></div>
    </Box>
  );
};

export default SearchResults;
