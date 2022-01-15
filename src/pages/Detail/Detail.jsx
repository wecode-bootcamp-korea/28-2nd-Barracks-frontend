import React from 'react';
import styled from 'styled-components';

import DetailAside from './components/DetailAside/DetailAside';
import DetailHeader from './components/DetailArticle/DetailHeader';
import DetailArticle from './components/DetailArticle/DetailArticle';
import DetailInformation from './components/DetailArticle/DetailInformation';
import DetailComments from './components/DetailComments/DetailComments';

function Detail() {
  return (
    <Container>
      <Contents>
        <DetailHeader />
        <DetailArticle />
        <DetailComments />
      </Contents>
      <Aside>
        <DetailAside />
      </Aside>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 1140px;
  margin: 0 auto;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 40px;
  padding: 0px 40px;
`;

const Aside = styled.div`
  display: flex;
  width: 30%;
  border-left: 1px solid ${({ theme }) => theme.border};
`;

export default Detail;
