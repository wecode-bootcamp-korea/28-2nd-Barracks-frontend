import React from 'react';
import styled from 'styled-components';

import CommentWrapper from './CommentWrapper';
import Pagination from './Pagination';

export default function Comments({
  commentList,
  isCommentLoading,
  pages,
  goToNextPage,
}) {
  if (isCommentLoading) return <div>Loading...</div>;

  return (
    <Container>
      {commentList.map(data => (
        <CommentWrapper
          key={data.comment_id}
          userImage={data.user_image}
          nickName={data.nickname}
          text={data.text}
        />
      ))}
      <ButtonWrapper>
        <Pagination pages={pages} goToNextPage={goToNextPage} />
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
`;
