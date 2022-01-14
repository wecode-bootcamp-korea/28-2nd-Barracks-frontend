import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { useToggle } from 'pages/Detail/hooks/UseToggle';
import { HiOutlineDotsVertical } from 'react-icons/hi';

import DetailButton from '../DetailButtons/DetailButton';
import DetailProfile from '../DetailProfile/DetailProfile';
import HeartToggleButton from './HeartToggleButton';
import BookMarkToggleButton from './BookMarkToggleButton';

export default function DetailAside() {
  const [isClickedLike, setIsClickedLike] = useToggle(false);
  const [isClickedBookMark, setIsClickedBookMark] = useToggle(false);

  const clickLikeButton = () => {
    setIsClickedLike(isClickedLike);
  };

  const clickBookMarkButton = () => {
    setIsClickedBookMark(!isClickedBookMark);
  };

  return (
    <Container>
      <AsideUser>
        <LikeWrapper>
          <HeartToggleButton
            onClick={clickLikeButton}
            isClicked={isClickedLike}
          />
          <BookMarkToggleButton
            onClick={clickBookMarkButton}
            isClicked={isClickedBookMark}
          />
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
  position: fixed;
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
