import React from 'react';
import theme from 'styles/theme';
import styled from 'styled-components';

function TodayStoryCard({ usernames, top_details, bottom_details, imgs }) {
  return (
    <Container>
      <TodayStory>
        <Username>{usernames}</Username>
        <Img src={imgs} />
        <Title>{top_details}</Title>
        <StoryContent>{bottom_details}</StoryContent>
      </TodayStory>
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

const Username = styled.div`
  font-size: 15px;
`;

const StoryContent = styled.p`
  font-size: 13px;
`;

const Title = styled.p`
  font-size: 14px;
`;

const TodayStory = styled.div`
  border: 1px solid gray;
  width: 250px;
  height: 210px;
  border: none;
`;

const Img = styled.img`
  width: 210px;
  height: 150px;
  border-radius: 13px;
  margin: 10px;
  align-self: center;
`;

export default TodayStoryCard;
