import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterBar from './Filter/FilterBar.jsx';
import PhotoCard from './MainPagination/PhotoCard.jsx';
import TopCarousel from './topCarousel/topCarousel.jsx';

function Main() {
  const location = useLocation();
  const navigate = useNavigate();
  const [photoCards, setPhotoCards] = useState([]);

  // Handle Photo Cards
  const mountPhotoCard = photos => {
    setPhotoCards(photos);
  };

  const updatePhotoCard = photos => {
    setPhotoCards([...photoCards, ...photos]);
  };

  // Handle Filter
  const handleSpace = e => {
    // 인자로 받는 isSpace가 마지막 주소로 들어감
    const { name } = e.target;
    const qs = new URLSearchParams(location.search);
    qs.set('space_id', name); //앞에 space는 백엔드에서 전달받는 인자명과 동일함.
    navigate('?' + qs.toString());
  };

  // 이후 필터 필요한부분만 const 작성 예제 : const handleSize = 인자 => 이후 내용 유사함.
  const handleSize = e => {
    const { name } = e.target;
    const qs = new URLSearchParams(location.search);
    qs.set('size_id', name);
    navigate('?' + qs.toString());
  };

  const handleStyle = e => {
    const { name } = e.target;
    const qs = new URLSearchParams(location.search);
    qs.set('style_id', name);
    navigate('?' + qs.toString());
  };

  const handleResidence = e => {
    const { name } = e.target;
    const qs = new URLSearchParams(location.search);
    qs.set('residence_id', name);
    navigate('?' + qs.toString());
  };
  return (
    <>
      <TopCarousel />
      <FilterBar
        handleSpace={handleSpace}
        handleSize={handleSize}
        handleStyle={handleStyle}
        handleResidence={handleResidence}
        mountPhotoCard={mountPhotoCard}
      />
      <PhotoCard
        photoCards={photoCards}
        updatePhotoCard={updatePhotoCard}
        mountPhotoCard={mountPhotoCard}
      />
    </>
  );
}

export default Main;
