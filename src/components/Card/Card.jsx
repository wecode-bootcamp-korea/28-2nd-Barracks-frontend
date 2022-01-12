import React from 'react';
import styled from 'styled-components';

function Card({ id, username, top_detail, bottom_detail, img }) {
  return (
    <Container>
      <Article>
        <Title>{username}</Title>
        <div>
          <Img alt="product_image" src={img} />
        </div>
        <ProfileDesc>{top_detail}</ProfileDesc>
        <ArticleContent>{bottom_detail}</ArticleContent>
      </Article>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column wrap;
`;

const Article = styled.p`
  border: 1px solid gray;
  width: 250px;
  height: 210px;
  margin: 1px 5px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const ProfileDesc = styled.p`
  font-size: 13px;
`;

const ArticleContent = styled.p`
  font-size: 12px;
`;

const Img = styled.img`
  width: 210px;
  height: 130px;
  border-radius: 15px;
  align-self: center;
`;

export default Card;
