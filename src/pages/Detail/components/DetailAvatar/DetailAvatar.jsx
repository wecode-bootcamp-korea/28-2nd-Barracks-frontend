import React from 'react';
import styled from 'styled-components';

export default function DetailAvatar({ imageUrl }) {
  return (
    <ImageWrapper>
      <img alt="user avatar" src={imageUrl} />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 50%;
  margin-right: 10px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
