import React from 'react';
import styled from 'styled-components';

import CommentWrapper from './CommentWrapper';
import Pagination from './Pagination';

export default function Comments({
  comments,
  isCommentLoading,
  pages,
  goToNextPage,
}) {
  if (isCommentLoading) return <div>Loading...</div>;

  return (
    <Container>
      {comments.map(comment => (
        <CommentWrapper
          key={comment.id}
          userImage={comment.user_image}
          nickName={comment.nickname}
          content={comment.content}
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
