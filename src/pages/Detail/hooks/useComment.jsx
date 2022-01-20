import useSWR, { useSWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const useComment = url => {
  const { mutate } = useSWRConfig();
  const { data: commentData } = useSWR(url, fetcher);

  return {
    commentData,
    isLoading: !commentData,
    mutate,
  };
};

export default useComment;
