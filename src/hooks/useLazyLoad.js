import { useEffect, useState, useRef } from 'react';

const useLazyLoad = ({
  distance = '100px',
  externalRef = false,
  once = true,
} = {}) => {
  const [show, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const onChange = (entries, observer) => {
      const lazyElement = entries[0];
      if (lazyElement.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    const element = externalRef || fromRef;
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    observer.observe(element.current);

    return () => observer.disconnect();
  }, []);

  return { show, fromRef };
};

export default useLazyLoad;
