import React from 'react';
import './App.css';
import { Route } from 'wouter';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import SearchResults from './pages/SearchResults/SearchResults';
// Static Context
import StaticContext from './context/StaticContext';
// Global Context
import { GlobalContextProvider } from './context/GlobalContext';

const App = () => {
  return (
    <StaticContext.Provider
      value={{
        name: 'initialState with Provider',
        isStaticContext: true,
      }}
    >
      <section className='App-content'>
        <Header />
        <Container maxWidth='xl'>
          <GlobalContextProvider>
            <Route path='/' component={Home} />
            <Route path='/gifs/:id' component={Detail} />
            <Route path='/gifs/search/:keyword' component={SearchResults} />
          </GlobalContextProvider>
        </Container>
      </section>
    </StaticContext.Provider>
  );
};

export default App;
