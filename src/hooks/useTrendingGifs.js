import { useState, useEffect } from 'react';
import { getTrendingGifs } from 'providers/Provider';

const useTrendingGifs = () => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingGifs()
      .then((res) => {
        setGifs(res);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setGifs]);

  return { loading, gifs };
};

export default useTrendingGifs;
