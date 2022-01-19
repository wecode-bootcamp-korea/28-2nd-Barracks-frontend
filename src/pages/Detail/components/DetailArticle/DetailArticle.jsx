import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import useFetch from 'pages/Detail/hooks/useFetch';
import DetailSlider from './DetailSlider';
import DetailInformation from './DetailInformation';

export default function DetailArticle() {
  const BASE_URL = `http://10.58.4.34:8000/postings/${id}`;
  const { id } = useParams();
  const { data: data, loading: isLoading } = useFetch({ url: BASE_URL });

  const dataList = data && data;

  if (isLoading) return <div>Loading...</div>;

  return (
    <article>
      <DetailSlider imageUrlList={dataList.image_urls} />
      <ArticleComments>{dataList.content}</ArticleComments>
      <ArticleTags>
        {dataList.tags?.map((tag, index) => (
          <Link key={index} to="/postings">
            <span>{tag}</span>
          </Link>
        ))}
      </ArticleTags>
      <DetailInformation hits={dataList.hits} />
    </article>
  );
}

const ArticleComments = styled.div`
  margin-top: 80px;
  font-weight: 300;
  font-size: 13px;
`;

const ArticleTags = styled.div`
  margin-top: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.blue};

  > a {
    margin-right: 20px;
    text-decoration: none;
    color: inherit;
  }

  & :hover {
    opacity: 60%;
    cursor: pointer;
  }
`;
