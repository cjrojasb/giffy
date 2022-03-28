import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation } from 'wouter';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#fff',
    },
    input: {
      color: 'black',
    },
  })
);

const SearchForm = () => {
  const [keyword, setKeyword] = useState('');
  const [setLocation] = useLocation();
  const clases = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(`/gifs/search/${keyword}`);
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Box mb={3}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          onChange={handleInputChange}
          placeholder='Search a gif here...'
          type='text'
          variant='outlined'
          InputProps={{
            classes: {
              root: clases.root,
            },
            className: clases.input,
            endAdornment: <SearchIcon />,
          }}
          margin='normal'
          value={keyword}
        />
      </form>
    </Box>
  );
};

export default SearchForm;
