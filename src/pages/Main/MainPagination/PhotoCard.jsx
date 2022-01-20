import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from 'config';
import Card from 'components/Card/Card';

const API = api.postings;
const LIMIT = 8;

function PhotoCard({ photoCards, updatePhotoCard, mountPhotoCard }) {
  const [offset, setOffset] = useState(8);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight > scrollHeight - 10) {
      setOffset(offset + LIMIT);
    }
  };

  const fetchPhotoCards = () => {
    fetch(`${API}?offset=${offset}&limit=${LIMIT}`)
      .then(res => res.json())
      .then(data => {
        updatePhotoCard(data.results);
      });
  };
  useEffect(() => {
    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        mountPhotoCard(data.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    offset > 8 && fetchPhotoCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Container>
      <Articles>
        <ArticleGrid>
          <Cards>
            {photoCards.map(photo => {
              const { id, ...photoInfo } = photo;
              return <Card key={id} {...photoInfo} />;
            })}
          </Cards>
        </ArticleGrid>
      </Articles>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  flex-direction: column;
`;

const Articles = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;

  h1 {
    font-weight: bold;
    align-self: flex-start;
    margin-top: 40px;
  }
`;
const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;

  img:hover {
    overflow: hidden;
    transform: scale(1.02);
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
`;

export default PhotoCard;
