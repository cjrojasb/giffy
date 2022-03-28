import { useState, useEffect } from 'react';
import { getGifs } from '../providers/Provider';

export const useGifs = (keyword) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword })
      .then((res) => {
        setGifs(res);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [keyword, setGifs]);

  return { loading, gifs };
};
