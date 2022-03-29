import { useState, useEffect } from 'react';
import { getTrendingSearches } from 'providers/Provider';

const useTrendingSearches = () => {
  const [trends, seTrends] = useState([]);
  const [loadingTrends, setLoadingTrends] = useState(false);

  useEffect(() => {
    setLoadingTrends(true);
    getTrendingSearches()
      .then((res) => {
        seTrends(res);
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoadingTrends(false);
      });
  }, []);

  return { loadingTrends, trends };
};

export default useTrendingSearches;
