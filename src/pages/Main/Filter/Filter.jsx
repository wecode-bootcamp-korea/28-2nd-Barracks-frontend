import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import Card from 'components/Card/Card';
import FilterBar from './FilterBar';

function Filter() {
  const [isFilter, setIsFilter] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(`http://localhost:3000/data/Mains.json`, {})
      .then(res => res.json())
      .then(res => setIsFilter(res));
  }, [location.search]);

  const handleSpace = isSpace => {
    // 인자로 받는 isSpace가 마지막 주소로 들어감
    const qs = new URLSearchParams(location.search);
    qs('space', isSpace); //앞에 space는 백엔드에서 전달받는 인자명과 동일함.
    navigate('?' + qs.toString());
  };

  // 이후 필터 필요한부분만 const 작성 예제 : const handleSize = 인자 => 이후 내용 유사함.
  const handleSize = isSize => {
    const qs = new URLSearchParams(location.search);
    qs('size', isSize);
    navigate('?' + qs.toString());
  };

  const handleStyle = isStyle => {
    const qs = new URLSearchParams(location.search);
    qs('style', isStyle);
    navigate('?' + qs.toString());
  };

  const handleResidence = isResidence => {
    const qs = new URLSearchParams(location.search);
    qs('residence', isResidence);
    navigate('?' + qs.toString());
  };
  // 백엔드에서 전달예정인 필터링 요소 space , style , residence, size 만 작성.

  return (
    <Container>
      <Card />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Filter;
