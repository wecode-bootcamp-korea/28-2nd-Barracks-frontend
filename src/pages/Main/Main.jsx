import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';

function Main(props) {
  return (
    <>
      <Logo fontSize="30px" />
      <TestBox>여긴 메인페이지다.</TestBox>
    </>
  );
}

const TestBox = styled.div`
  color: ${({ theme }) => theme.red};
`;

export default Main;
