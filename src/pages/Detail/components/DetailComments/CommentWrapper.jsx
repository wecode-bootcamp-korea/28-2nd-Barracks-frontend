import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

import DetailAvatar from '../DetailAvatar/DetailAvatar';

export default function CommentWrapper({ userImage, nickName, content }) {
  return (
    <Container>
      <DetailAvatar imageUrl={userImage} />
      <CommentContents>
        <CommentText>
          <p>{nickName}</p>
          <span>{content}</span>
        </CommentText>
        <CommentInformation>
          <div>1시간 전</div>
          <div>
            <AiOutlineHeart />
            <span>좋아요</span>
          </div>
          <div>답글달기</div>
        </CommentInformation>
      </CommentContents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  color: ${({ theme }) => theme.primary};
`;

const CommentContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CommentText = styled.div`
  display: flex;
  font-size: 14px;

  > span {
    margin-right: 10px;
  }

  > p {
    margin-right: 10px;
    font-weight: 700;
  }
`;

const CommentInformation = styled.div`
  display: flex;
  margin: 4px 0;
  font-size: 12px;

  > div {
    margin: auto 0;
    margin-right: 10px;
  }
`;
