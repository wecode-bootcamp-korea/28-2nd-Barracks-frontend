import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Logo({ fontSize }) {
  return (
    <LogoTitle fontSize={fontSize}>
      <Link to="/">동기생활관</Link>
    </LogoTitle>
  );
}

const LogoTitle = styled.h1`
  // TODO: 글꼴이 이상해서 relative 줬음..
  position: relative;
  top: -5px;
  font-family: '양진체';
  font-size: ${props => props.fontSize};

  a {
    color: ${({ theme }) => theme.dark};
    text-decoration: none;
  }
`;

export default Logo;
