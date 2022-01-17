import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PhotoCard from './MainPagination/PhotoCard.jsx';
import TopCarousel from './topCarousel/topCarousel.jsx';
import TodayStoryCard from 'components/Card/TodayStoryCard';
import Filter from './Filter/Filter.jsx';

function Main() {
  const [todayStories, setTodayStories] = useState([]); //오늘의 스토리 반복 부분

  useEffect(() => {
    fetch('http://localhost:3000/data/cardTodayData.json')
      .then(res => res.json())
      .then(data => {
        setTodayStories(data);
      });
  }, []); // 오늘의 스토리 부분 완료시 컴포넌트화 진행예정임.
  return (
    <>
      <TopCarousel />

      <PhotoCard />
    </>
  );
}
export default Main;
