import React from 'react';
import styled from 'styled-components';

export default function DetailArticle() {
  return (
    <article>
      <ArticleImage>
        <img />
      </ArticleImage>
      <ArticleComments>
        아이맥 사이로 촘촘하게 들어오는 아침해가 좋아서 얼른 아이폰 들고
        찍었어요
      </ArticleComments>
      <ArticleTags>
        <span>#오하우스</span>
        <span>#데스크테리어</span>
        <span>#작업실</span>
      </ArticleTags>
    </article>
  );
}

const ArticleImage = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.secondary};
  margin-top: 20px;

  > img {
    width: 100%;
  }
`;

const ArticleComments = styled.div`
  margin-top: 40px;
  font-weight: 300;
  font-size: 13px;
`;

const ArticleTags = styled.div`
  margin-top: 20px;
  font-weight: 300;
  color: ${({ theme }) => theme.blue};

  > span {
    margin-right: 20px;
  }

  & :hover {
    opacity: 60%;
    cursor: pointer;
  }
`;
