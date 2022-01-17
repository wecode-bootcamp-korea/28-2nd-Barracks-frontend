import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import Filter from './Filter';

function FilterList({ handleSize, handleSpace, handleResidence, handleStyle }) {
  return(
  <Container>
    <Filter 
    handleSize={handleSize}
    handleSpace={handleSpace}
    handleResidence={handleResidence}
    handleStyle={handleStyle}
    /> //Filter.jsx에서 필터 관련 URLSearchParms 부분 호출 예정지역
    <Cards
    id={id}
    
    />
     


  </Container>


    {/* <Card></Card> card.jsx에서 받아오는 데이터 보관하는 부분 */}
 
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export default FilterList;
