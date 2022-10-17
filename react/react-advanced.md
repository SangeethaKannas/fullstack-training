### Abort Controller

useEffect(() => {
  const abortController = new AbortController();
  const fetch = async () => {
    try {
      const data = await fetch('a', { signal: abortController.signal});

      setData(data)

    }catch(error) {

    }

  };
  fetch();
  return () => abortController.abort();

}, [])


### Is Mounted

import { useEffect, uesRef } from 'react';

const useIsMounted = () => {

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    }

  }, []);

  const getIsMounted = () => {
    return isMounted.current;
  }


  reurn getIsMounted;
}
