import { useState, useEffect } from 'react';
import { getGif } from 'providers/Provider';

const useGif = (id) => {
  const [gif, setGif] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGif(id)
      .then((res) => {
        setGif(res);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, setGif]);

  return { loading, gif };
};

export default useGif;
