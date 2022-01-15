import React, { useState } from 'react';
import styled from 'styled-components';

import useFetch from 'pages/Detail/hooks/useFetch';
import DetailAvatar from '../DetailAvatar/DetailAvatar';
import Comments from './Comments';

const COUNT_LIMIT = 5;

export default function DetailComments() {
  const [offset, setOffset] = useState(0);
  const { data: commentList, loading: isCommentLoading } = useFetch({
    url: `http://localhost:3000/data/comment/offset=${offset}&limit=${COUNT_LIMIT}.json`,
    query: offset,
  });
  const pages = commentList && commentList[0].count / COUNT_LIMIT;

  const goToNextPage = event => {
    const { value } = event.target;
    const queryOffset = +value * 5;
    setOffset(queryOffset);
  };

  return (
    <Container>
      <CommentCount>
        <span>댓글</span>
        <Count>{commentList && commentList[0].count}</Count>
      </CommentCount>
      <CommentInput>
        <DetailAvatar />
        <InputWrapper>
          <input placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)" />
          <button type="button" disabled>
            등록
          </button>
        </InputWrapper>
      </CommentInput>
      {commentList && (
        <Comments
          commentList={commentList}
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

const CommentInput = styled.div`
  display: flex;
  margin: 20px 0;
`;

const InputWrapper = styled.div`
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

      &:disabled {
        opacity: 60%;
      }
    }
  }
`;
