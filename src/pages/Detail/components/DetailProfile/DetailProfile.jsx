import React from 'react';
import DetailAvatar from '../DetailAvatar/DetailAvatar';
import DetailButton from '../DetailButtons/DetailButton';
import styled from 'styled-components';

const guestUser = {
  nickname: '치악산복숭아당도최고',
  image_url: '/images/img-user-default.png',
};

export default function DetailProfile() {
  const loginUser = JSON.parse(sessionStorage.getItem('userInfo'));

  return (
    <Container>
      <DetailAvatar
        imageUrl={loginUser ? loginUser.profile_image : guestUser.image_url}
      />
      <Description>
        <p>{loginUser ? loginUser.nickname : guestUser.nickname}</p>
        <span className="description">즐거운 우리집</span>
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
