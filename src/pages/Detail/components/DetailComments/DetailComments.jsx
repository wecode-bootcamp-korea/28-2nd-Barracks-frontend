import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useParams } from 'react-router';

import useFetch from 'pages/Detail/hooks/useFetch';
import Comments from './Comments';
import CommentInputWrapper from './CommentInputWrapper';

const COUNT_LIMIT = 5;

export default function DetailComments() {
  const [offset, setOffset] = useState(0);
  const [newComment, setNewComment] = useState('');
  const { pathname } = useLocation();

  const BASE_URL = `http://10.58.4.34:8000${pathname}`;

  const { data: commentList, loading: isCommentLoading } = useFetch({
    url: `${BASE_URL}?offset=${offset}&limit=${COUNT_LIMIT}`,
    query: offset,
  });

  const count = commentList && commentList.comments_totals;
  const pages = Math.ceil(count / COUNT_LIMIT);

  const goToNextPage = event => {
    const { value } = event.target;
    const queryOffset = +value * 5;
    setOffset(queryOffset);
  };

  const handleInputComment = event => {
    const { value } = event.target;
    setNewComment(value);
  };

  const addNewComment = event => {
    event.preventDefault();
    setOffset(0);
    setNewComment('');

    const submitForm = {
      method: 'POST',
      // headers: {
      //   // 'Content-Type': 'application/json',
      //   // Authorization: sessionStorage.getItem('access_token');
      // },
      body: JSON.stringify({
        content: newComment,
        user_id: 1,
      }),
    };

    fetch(BASE_URL, submitForm)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <Container>
      <CommentCount>
        <span>댓글</span>
        <Count>{commentList && commentList.comments_totals}</Count>
      </CommentCount>
      <CommentInputWrapper
        handleInputComment={handleInputComment}
        addNewComment={addNewComment}
        newComment={newComment}
      />
      {commentList && (
        <Comments
          comments={commentList.comments}
          isCommentLoading={isCommentLoading}
          offset={offset}
          pages={pages}
          goToNextPage={goToNextPage}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const CommentCount = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const Count = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme.blue};
`;
