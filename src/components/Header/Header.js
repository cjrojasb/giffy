import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import { createStyles, makeStyles } from '@material-ui/core';
import Logo from 'assets/images/logo.png';
import { Link } from 'wouter';

const useStyles = makeStyles(() =>
  createStyles({
    boxAppBar: {
      backgroundColor: 'black !important',
    },
    logo: {
      cursor: 'pointer',
      height: 64,
      width: 64,
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='fixed' className={classes.boxAppBar}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          {/* <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}
          <Link to='/'>
            <img src={Logo} alt='Giffy' className={classes.logo} />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
