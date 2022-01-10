import React from 'react';
import theme from 'styles/theme';
import styled from 'styled-components';

function Main(props) {
  return <TestBox>여긴 메인페이지다.</TestBox>;
}

const TestBox = styled.div`
  color: ${theme.colors.red};
`;

export default Main;
