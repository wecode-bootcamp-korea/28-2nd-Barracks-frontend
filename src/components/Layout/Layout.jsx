import React from 'react';
import styled from 'styled-components';

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;

const Container = styled.div`
  padding-top: 110px;
`;
