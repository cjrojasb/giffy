import { lazy, Suspense } from 'react';
import useLazyLoad from 'hooks/useLazyLoad';
import Loading from 'components/Loading/Loading';

const TrendingSearches = lazy(() => import('./TrendingSearches'));

const LazyTrendingSearches = () => {
  const { show, fromRef } = useLazyLoad({ distance: '200px' });

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Loading />}>
        {show ? <TrendingSearches /> : <Loading />}
      </Suspense>
    </div>
  );
};

export default LazyTrendingSearches;
