import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DetailSlider from './DetailSlider';

export default function DetailArticle() {
  const [detailData, setDetailData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/data/DetailMockData.json')
      .then(res => res.json())
      .then(data => setDetailData(data[0]))
      .then(setIsLoading(false));
  }, []);

  if (isLoading || !detailData) return <div>Loading</div>;

  return (
    <article>
      <DetailSlider imageUrlList={detailData.image_urls} />
      <ArticleComments>{detailData.content}</ArticleComments>
      <ArticleTags>
        {detailData.tags?.map((tag, index) => (
          <Link key={index} to="/contents">
            <span>{tag}</span>
          </Link>
        ))}
      </ArticleTags>
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
