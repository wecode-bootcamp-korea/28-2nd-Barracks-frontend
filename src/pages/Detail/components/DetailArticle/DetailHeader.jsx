import React from 'react';
import styled from 'styled-components';
import useDetail from 'pages/Detail/hooks/useDetail';

export default function DetailHeader() {
  const { detailData, isLoading } = useDetail();
  if (isLoading) return <div>loading...</div>;

  const {
    result: { residence, size, space, style },
  } = detailData;

  const detailHeaderContents = [residence, size, space, style];

  return (
    <Container>
      <div>
        {detailHeaderContents?.map(
          content => content && <Option key={content}>{content}</Option>
        )}
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
