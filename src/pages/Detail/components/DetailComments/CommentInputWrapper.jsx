import useFetch from 'pages/Detail/hooks/useFetch';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import DetailAvatar from '../DetailAvatar/DetailAvatar';

const INPUT_TEXT = {
  placeholder: '칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)',
  button: '등록',
};

const loginUser = {
  image_url: '/images/img-user-default.png',
};

export default function CommentInputWrapper({
  handleInputComment,
  addNewComment,
  newComment,
}) {
  return (
    <Container>
      <DetailAvatar imageUrl={loginUser.image_url} />
      <CommentInput onSubmit={addNewComment}>
        <input
          placeholder={INPUT_TEXT.placeholder}
          onChange={handleInputComment}
          value={newComment}
        />
        <button type="button" onClick={addNewComment}>
          {INPUT_TEXT.button}
        </button>
      </CommentInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 20px 0;
`;

const CommentInput = styled.form`
  position: relative;
  width: 670px;
  height: 35px;

  input {
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;

    &:focus {
      outline: 0;
    }
  }

  button {
    all: unset;
    position: absolute;
    right: 10px;
    height: 100%;
    color: ${({ theme }) => theme.blue};
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;

    &:disabled {
      opacity: 60%;
    }
  }
`;
