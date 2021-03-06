import React from 'react';
import { KAKAO_GET_AUTH_URL } from 'socialLogin/KakaoLogin';
import styled, { keyframes } from 'styled-components';

function Login(props) {
  return (
    <Container>
      <ContentBox>
        <ContentRow as="header">
          <ContentAnimationBox>
            <Emoji>๐</Emoji>
          </ContentAnimationBox>
          <Title>๋ฐ๊ฐ์ต๋๋ค!</Title>
          <Greeting>์ธํ๋ฆฌ์ด์ ๋ชจ๋  ๊ฒ, ๋๊ธฐ์ํ๊ด</Greeting>
          <LoginButton>
            <img
              src="/images/kakao_login_large_wide.png"
              alt="์นด์นด์คํก๋ก๊ทธ์ธ"
            />
          </LoginButton>
        </ContentRow>
      </ContentBox>
    </Container>
  );
}

const Container = styled.section`
  ${({ theme }) => theme.flexBox()}
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

const ContentRow = styled.div`
  text-align: center;
`;

const sayHelloAnimation = keyframes`
  from {
    transform: rotate(-20deg);
  }to{
    transform: rotate(10deg);
  }
`;

const ContentAnimationBox = styled(ContentRow)`
  animation: ${sayHelloAnimation} 1s linear infinite alternate;
`;

const Emoji = styled.p`
  font-size: 60px;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const Greeting = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;

const ContentBox = styled.div`
  ${({ theme }) => theme.flexBox()}
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.white};
  padding: 60px;
`;

const LoginButton = styled.a.attrs({ href: KAKAO_GET_AUTH_URL })`
  display: block;
  width: 100%;
  margin: 0 auto;
  border: 0;
  background-color: ${({ theme }) => theme.white};

  img {
    display: block;
    width: 100%;
    transition: box-shadow 0.2s;
    border-radius: 10px;

    &:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
    }
  }
`;

export default Login;
