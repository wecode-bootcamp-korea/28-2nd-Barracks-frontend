import React from 'react';
import styled from 'styled-components';

const filterList = ['30평대', '빈티지스타일', '빌라&연립'];

export default function DetailHeader() {
  return (
    <Container>
      <div>
        {filterList.map((filter, index) => (
          <Option key={filter + index}>{filter}</Option>
        ))}
      </div>
      <span>어제</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
`;

const Option = styled.span`
  display: inline-block;
  text-align: center;
  margin-right: 4px;

  &::after {
    content: '|';
    top: 0;
    right: 0;
    height: 16px;
    margin: 8px;
  }

  &:last-child::after {
    content: '';
  }
`;
