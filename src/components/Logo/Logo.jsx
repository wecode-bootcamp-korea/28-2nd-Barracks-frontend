import React from 'react';
import styled from 'styled-components';

function Logo({ fontSize }) {
  return <LogoTitle fontSize={fontSize}>동기생활관</LogoTitle>;
}

const LogoTitle = styled.h1`
  font-family: '양진체';
  font-size: ${props => props.fontSize};
`;

export default Logo;
