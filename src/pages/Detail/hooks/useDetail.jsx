import { api } from 'config';
import { useParams } from 'react-router';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

const useDetail = () => {
  const param = useParams();
  const { data: detailData } = useSWR(`${api.postings}/${param.id}`, fetcher);

  return {
    detailData,
    isLoading: !detailData,
  };
};

export default useDetail;
