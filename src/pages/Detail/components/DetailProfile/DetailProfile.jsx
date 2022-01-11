import React from 'react';
import DetailAvatar from '../DetailAvatar/DetailAvatar';
import DetailButton from '../DetailButtons/DetailButton';
import styled from 'styled-components';

export default function DetailProfile() {
  return (
    <Container>
      <DetailAvatar />
      <Description>
        <p>hackeny</p>
        <span className="description">하드코딩중</span>
      </Description>
      <DetailButton color="blue" size="medium" padding="4px" fullWidth="72px">
        팔로우
      </DetailButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 190px;

  > p {
    font-weight: 700;
    margin-bottom: 4px;
  }

  > span {
    font-weight: 300;
  }
`;
