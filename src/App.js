import React from 'react';
import './App.css';
import { Route } from 'wouter';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import SearchResults from './pages/SearchResults/SearchResults';

const App = () => {
  return (
    <section className='App-content'>
      <Header />
      <Container maxWidth='xl'>
        <Route path='/' component={Home} />
        <Route path='/gifs/:id' component={Detail} />
        <Route path='/gifs/search/:keyword' component={SearchResults} />
      </Container>
    </section>
  );
};

export default App;
