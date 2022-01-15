import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { HiOutlineDotsVertical } from 'react-icons/hi';

import DetailProfile from '../DetailProfile/DetailProfile';
import HeartToggleButton from './HeartToggleButton';
import BookMarkToggleButton from './BookMarkToggleButton';
import ClipboardButton from './ClipboardButton';

export default function DetailAside() {
  return (
    <Container>
      <AsideUser>
        <LikeWrapper>
          <HeartToggleButton />
          <BookMarkToggleButton />
          <DotButton>
            <HiOutlineDotsVertical />
          </DotButton>
        </LikeWrapper>
        <DetailProfile />
      </AsideUser>
      <ButtonContainer>
        <ClipboardButton />
      </ButtonContainer>
    </Container>
  );
}

const ButtonContainer = styled.div`
  position: fixed;
  width: 300px;
  bottom: 10px;
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
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  margin-left: 40px;
  ${Sticky}
`;
