import { createContext, useState } from 'react';

const GlobalContext = createContext({});

export const GlobalContextProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        gifs,
        setGifs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
