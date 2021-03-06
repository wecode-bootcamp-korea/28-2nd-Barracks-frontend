import { useState, useEffect } from 'react';

const useFetch = opts => {
  const [state, setState] = useState({
    data: null,
    loading: true,
  });

  useEffect(() => {
    fetch(opts.url)
      .then(res => res.json())
      .then(data => {
        setState({
          data: data.result,
          loading: false,
        });
      });
  }, [opts.query]);

  return { ...state };
};

export default useFetch;
