import React from 'react';
import styled, { css } from 'styled-components';

function Avatar({ isActive: isDropDownOpen }) {
  // TODO: size별 width값 출력 다르게 할 것
  // TODO: 만약 회원 프로필이 없다면 기본 프로필로 설정되게끔 할 것!
  return (
    <ImageWrapper isDropDownOpen={isDropDownOpen}>
      <img src="/images/img-user-default.png" alt="user" />
    </ImageWrapper>
  );
}

const hoverStyle = css`
  ${({ theme }) => theme.positionCenter()};
  content: '';
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.blue};
`;

const ImageWrapper = styled.div`
  ${({ theme }) => theme.flexBox()};
  position: relative;
  width: 36px;
  height: 36px;
  padding: 4px;
  overflow: hidden;
  border-radius: 50%;

  img {
    display: block;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  :hover::after {
    ${hoverStyle}
  }

  ${({ isDropDownOpen }) =>
    isDropDownOpen &&
    css`
      &::after {
        ${hoverStyle}
      }
    `}
`;

export default Avatar;
