import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';

// const API = '/data/Mains/Mains.json'; mockdata
const API = `http://10.58.6.142:8000/postings`;
const LIMIT = 8;

function PhotoCard({ photoCards, updatePhotoCard, mountPhotoCard }) {
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    fetch(`${API}?offset=${offset}&limit=${LIMIT}`)
      .then(res => res.json())
      .then(data => {
        updatePhotoCard(data.results);
        // setPhotoCards([...photoCards, ...data.results]);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);

    fetch(`${API}`)
      .then(res => res.json())
      .then(data => {
        mountPhotoCard(data.results);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    offset > 8 && fetchPhotoCards();
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
            {/* {user_name} */}
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

  /* img {
    width: 100%;
    height: 100%;
  } */

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
