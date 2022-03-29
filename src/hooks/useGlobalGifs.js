import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const useGlobalGifs = () => {
  return useContext(GlobalContext).gifs;
};

export default useGlobalGifs;
