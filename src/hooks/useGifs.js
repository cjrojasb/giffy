import { useState, useEffect, useContext } from 'react';
import { getGifs } from 'providers/Provider';
import GlobalContext from 'context/GlobalContext';

const INITIAL_PAGE = 0;

export const useGifs = (keyword) => {
  const { gifs, setGifs } = useContext(GlobalContext);
  // const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);

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

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getGifs({ keyword, page })
      .then((nextGifs) => {
        setGifs((prevGifs) => prevGifs.concat(nextGifs));
      })
      .catch((error) => {
        console.log('error', error);
      })
      .finally(() => {
        setLoadingNextPage(false);
      });
  }, [keyword, page, setGifs]);

  return { loading, loadingNextPage, gifs, setPage };
};
