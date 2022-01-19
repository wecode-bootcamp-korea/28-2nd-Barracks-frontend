import React from 'react';
import { useLocation } from 'react-router';
import DetailButton from '../DetailButtons/DetailButton';

const BASE_URL = 'http://localhost:3000';

export default function ClipboardButton() {
  const { pathname } = useLocation();

  const duplicateUrl = () => {
    const url = BASE_URL + pathname;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert(`${url}을 클립보드에 복사했습니다.`);
      })
      .catch(() => {
        alert('복사 실패!');
      });
  };

  return (
    <DetailButton
      color="blue"
      size="large"
      padding="10px"
      fullWidth="100%"
      onClick={duplicateUrl}
    >
      공유하기
    </DetailButton>
  );
}
