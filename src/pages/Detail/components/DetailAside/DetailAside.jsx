import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import DetailButton from '../DetailButtons/DetailButton';
import DetailProfile from '../DetailProfile/DetailProfile';

import styled, { css, keyframes } from 'styled-components';

export default function DetailAside() {
  const [isClickedIcon, setIsClickedIcon] = useState(false);

  const clickLikeButton = () => {
    setIsClickedIcon(!isClickedIcon);
  };

  return (
    <Container>
      <AsideUser>
        <LikeWrapper>
          <AsideDetailButton color="border" size="large">
            {isClickedIcon ? (
              <AiFillHeart className="fillButton" onClick={clickLikeButton} />
            ) : (
              <AiOutlineHeart onClick={clickLikeButton} />
            )}
            <span>12</span>
          </AsideDetailButton>
          <AsideDetailButton color="border" size="large">
            {isClickedIcon ? (
              <BsFillBookmarkFill
                className="fillButton"
                onClick={clickLikeButton}
              />
            ) : (
              <BsBookmark onClick={clickLikeButton} />
            )}
            <span>18</span>
          </AsideDetailButton>
          <DotButton>
            <HiOutlineDotsVertical />
          </DotButton>
        </LikeWrapper>
        <DetailProfile />
      </AsideUser>
      <ButtonContainer>
        <DetailButton color="blue" size="large" padding="10px" fullWidth="100%">
          공유하기
        </DetailButton>
      </ButtonContainer>
    </Container>
  );
}

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const DotButton = styled.button`
  width: 30px;
  background: none;
  border: none;
  font-size: 20px;
  color: ${({ theme }) => theme.secondary};
  cursor: pointer;
`;

const AsideDetailButton = styled(DetailButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  width: 120px;
  text-align: center;
  font-weight: 300;
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => theme.border};
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 40px;
  text-align: center;

  .fillButton {
    color: ${({ theme }) => theme.blue};
    animation: ${fadeIn} 1s;
  }
`;

const AsideUser = styled.div`
  display: flex;
  flex-direction: column;
`;

const Sticky = css`
  position: fixed !important;
  background-color: white;
  transition: all 0.6s ease-in-out;
  color: black;
`;

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  margin-left: 40px;
  ${Sticky}
`;
