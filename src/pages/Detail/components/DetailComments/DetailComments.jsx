import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

import DetailButton from '../DetailButtons/DetailButton';
import DetailAvatar from '../DetailAvatar/DetailAvatar';

export default function DetailComments() {
  return (
    <Container>
      <CommentCount>
        <span>댓글</span>
        <span className="count">1</span>
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
      <CommentList>
        <DetailAvatar />
        <CommentWrapper>
          <CommentText>
            <p>닉네임</p>
            <span>댓글입니다.</span>
          </CommentText>
          <CommentInformation>
            <div>1시간 전</div>
            <div>
              <AiOutlineHeart />
              <span>좋아요</span>
            </div>
            <div>답글달기</div>
          </CommentInformation>
        </CommentWrapper>
      </CommentList>
      <CommentButton>
        <DetailButton color="blue" size="medium" padding="4px" fullWidth="25px">
          1
        </DetailButton>
      </CommentButton>
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

  .count {
    margin-left: 10px;
    color: ${({ theme }) => theme.blue};
  }
`;

const CommentButton = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
`;

const CommentInput = styled.div`
  display: flex;
  margin: 20px 0;
`;

const CommentList = styled.div`
  display: flex;
  margin: 10px 0;
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

const CommentWrapper = styled.div`
  color: ${({ theme }) => theme.primary};
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
