import React from 'react';
import FilterBar from './Filter/FilterBar.jsx';
import PhotoCard from './MainPagination/PhotoCard.jsx';
import TopCarousel from './topCarousel/topCarousel.jsx';

function Main() {
  return (
    <>
      <TopCarousel />
      <FilterBar />
      <PhotoCard />
    </>
  );
}

export default Main;
