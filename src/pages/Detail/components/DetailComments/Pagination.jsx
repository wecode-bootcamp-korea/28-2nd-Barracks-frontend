import React from 'react';
import styled from 'styled-components';
import DetailButton from '../DetailButtons/DetailButton';

export default function Pagination({ pages, goToNextPage }) {
  return (
    <Container>
      {pages &&
        Array(pages)
          .fill()
          .map((_, index) => (
            <DetailButton
              key={index + 1}
              value={index}
              color="blue"
              size="medium"
              fullWidth="25px"
              onClick={goToNextPage}
            >
              {index + 1}
            </DetailButton>
          ))}
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox()}
`;
