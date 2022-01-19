import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodayStoryCard from 'components/Card/TodayStoryCard';

function TodayStoryCardmap() {
  const [todayStories, setTodayStories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/Mains/cardTodayData.json')
      .then(res => res.json())
      .then(res => {
        setTodayStories(res);
      });
  }, []);

  return (
    <Container>
      <Cards>
        {TodayStoryCard.map(todayStoryCard => {
          return (
            <TodayStoryCard
              key={todayStoryCard.id}
              img={todayStoryCard.imgs}
              username={todayStoryCard.usernames}
              top_detail={todayStoryCard.top_details}
              bottom_detail={todayStoryCard.bottom_details}
            />
          );
        })}
      </Cards>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;

  flex-flow: column warp;

  h3 {
    font-weight: bold;
    font-size: 20px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;

  img {
    width: 90%;
  }
`;
export default TodayStoryCardmap;
