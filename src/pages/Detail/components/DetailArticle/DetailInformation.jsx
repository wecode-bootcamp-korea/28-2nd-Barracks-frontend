import React from 'react';
import styled from 'styled-components';

export default function DetailInformation({ hits }) {
  return (
    <InformationList>
      <Information>
        <dt>조회</dt>
        <dd>{hits}</dd>
      </Information>
      <Information>
        <dt>공유</dt>
        <dd>0</dd>
      </Information>
    </InformationList>
  );
}

const InformationList = styled.dl`
  display: flex;
  flex-direction: space-between;
  width: 100%;
  margin: 40px 0;
  color: ${({ theme }) => theme.primary};
  font-weight: 300;
  font-size: 13px;
`;

const Information = styled.div`
  display: flex;

  > dd {
    margin-right: 10px;
  }
`;
