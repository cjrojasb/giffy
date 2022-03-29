import useLazyLoad from 'hooks/useLazyLoad';
import Loading from 'components/Loading/Loading';
import TrendingSearches from 'components/TrendingSearches/TrendingSearches';

const LazyTrendingSearches = () => {
  const { show, fromRef } = useLazyLoad({ distance: '200px' });

  return <div ref={fromRef}>{show ? <TrendingSearches /> : <Loading />}</div>;
};

export default LazyTrendingSearches;
