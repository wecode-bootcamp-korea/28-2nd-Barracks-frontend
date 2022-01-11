import React from 'react';
import styled from 'styled-components';

export default function DetailAvatar() {
  return (
    <ImageWrapper>
      <img />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${({ theme }) => theme.secondary};
  margin-right: 10px;
`;
