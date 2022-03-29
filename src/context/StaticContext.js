import { createContext } from 'react';

const StaticContext = createContext({
  name: 'initialState without Provider',
  isStaticContext: true,
});

export default StaticContext;
