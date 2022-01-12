import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import Card from 'components/Card/Card';
import TodayStoryCard from 'components/Card/TodayStoryCard';
import Logo from 'components/Logo/Logo';

const settings = {
  dots: true, //지정컨텐츠로 바로이동하는 버튼
  infinite: true, //컨텐츠 끝에 도달시 다음컨텐츠를 반복하여 가져옴
  slidesToShow: 1, // 한 화면에 보이는 컨텐츠
  slidesToScroll: 1, // 한번에 넘어가는 컨텐츠 수
  speed: 700,
  autoplay: true,
  autoplaySpeed: 700,
  prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
  nextArrow: "<button type='button' class='slick-next'>Next</button>",
}; //react-slick 기본 설정

function Main() {
  const [images, setImages] = useState([]); // 최상단 점보트론 이미지 백엔드에서 받기전 예비용
  const [articles, setArticles] = useState([]);
  const [todayStories, setTodayStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/cardTodayData.json')
      .then(res => res.json())
      .then(data => {
        setTodayStories(data);
      });
  }, []);

  useEffect(() => {
    // 상단 점보트론 좌/우 슬라이드
    fetch('http://localhost:3000/data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setImages(data);
      });
  }, []);

  return (
    <>
      <Logo />
      <Container>
        <Slider {...settings}>
          <MainSlider>
            {images.map((data, idx) => {
              return <img alt="main_slider" src={data.img} key={idx} />;
            })}
          </MainSlider>
        </Slider>

        <TodayStory>
          <h3>오늘의 집 오늘의 스토리 반복부분임</h3>
          <Cards>
            {todayStories.map(todayStory => {
              return (
                <TodayStoryCard
                  key={todayStory.id}
                  img={todayStory.imgs}
                  username={todayStory.usernames}
                  top_detail={todayStory.top_details}
                  bottom_detail={todayStory.bottom_details}
                />
              );
            })}
          </Cards>
        </TodayStory>

        <Articles>
          <h1>오늘의 집 사진 카드 반복부분</h1>
          <ArticleGrid>
            {articles.map(article => {
              return (
                <Card
                  key={article.id}
                  img={article.img}
                  username={article.username}
                  top_detail={article.top_detail}
                  bottom_detail={article.bottom_detail}
                />
              );
            })}
          </ArticleGrid>
        </Articles>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
`;

const MainSlider = styled(Slider)`
  display: flex;
  width: 1000px;
  margin: 90px auto;

  button {
    z-index: 1;
    border: none;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 35px;
  }

  .slick-prev {
    left: 15px;
  }
  .slick-next {
    right: 25px;
  }

  img {
    height: 400px;
    border-radius: 10px;
  }
`;

const TodayStory = styled.div`
  display: flex;
  justify-content: space-around;
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

const Articles = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;

  h1 {
    font-weight: bold;
    align-self: flex-start;
    margin-top: 80px;
  }
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  img {
    width: 100%;
  }
`;

export default Main;
