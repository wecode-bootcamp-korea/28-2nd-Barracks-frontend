import React from 'react';
import styled from 'styled-components';

function FilterBar({ residence, style, size, space }) {
  return (
    <Container>
      <ul>residence</ul>
      <li>오피스텔</li>
      <li>아파트</li>
      <li>빌라</li>
      {/* 백엔드에서 받아오는 필터 주요 컨텐츠 */}

      <ul>size</ul>
      <li>10평대</li>
      <li>20평대</li>
      <li>30평대</li>

      <ul>space</ul>
      <li>거실</li>
      <li>침실</li>
      <li>욕실</li>

      <ul>style</ul>
      <li>모던</li>
      <li>빈티지</li>
      <li>내추럴</li>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
`;

export default FilterBar;

const isFilterBarResidence = [
  { id: 1, text: '오피스텔' },
  { id: 2, text: '아파트' },
  { id: 3, text: '빌라' },
];

const isFilterBarSize = [
  { id: 1, text: '10평대' },
  { id: 2, text: '20평대' },
  { id: 3, text: '30평대' },
];

const isFilterBarSpace = [
  { id: 1, text: '거실' },
  { id: 2, text: '침실' },
  { id: 3, text: '욕실' },
];

const isFilterBarStyle = [
  { id: 1, text: '모던' },
  { id: 2, text: '빈티지' },
  { id: 3, text: '내추럴' },
];
