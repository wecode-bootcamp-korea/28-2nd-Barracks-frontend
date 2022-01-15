import React from 'react';
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useToggle } from 'pages/Detail/hooks/useToggle';
import DetailButton from '../DetailButtons/DetailButton';

export default function HeartToggleButton() {
  const [isClickedLike, setIsClickedLike] = useToggle(false);

  const clickLikeButton = () => {
    setIsClickedLike(isClickedLike);
  };

  return (
    <AsideDetailButton color="border" size="large" onClick={clickLikeButton}>
      {isClickedLike ? (
        <AiFillHeart className="fillButton" />
      ) : (
        <AiOutlineHeart />
      )}
      <span>12</span>
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
