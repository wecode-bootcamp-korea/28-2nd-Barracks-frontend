import React from 'react';
import styled from 'styled-components';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import DetailButton from '../DetailButtons/DetailButton';

export default function BookmarkToggleButton({ onClick, isClicked }) {
  return (
    <AsideDetailButton color="border" size="large" onClick={onClick}>
      {isClicked ? (
        <BsFillBookmarkFill className="fillButton" />
      ) : (
        <BsBookmark />
      )}
      <span>18</span>
    </AsideDetailButton>
  );
}

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
