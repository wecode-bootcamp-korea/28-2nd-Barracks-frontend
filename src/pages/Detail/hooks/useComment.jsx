import useSWR, { useSWRConfig } from 'swr';

const fetcher = async (...args) => await fetch(...args).then(res => res.json());

const useComment = url => {
  const { mutate } = useSWRConfig();
  const { data: commentData } = useSWR(url, fetcher, { refreshInterval: 200 });

  return {
    commentData,
    isLoading: !commentData,
    mutate,
  };
};

export default useComment;
