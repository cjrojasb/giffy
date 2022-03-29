import { useEffect, useState, useRef } from 'react';

const useLazyLoad = ({ distance = '100px' } = {}) => {
  const [show, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const lazyElement = entries[0];
      if (lazyElement.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(fromRef.current);

    return () => observer.disconnect();
  }, []);

  return { show, fromRef };
};

export default useLazyLoad;
