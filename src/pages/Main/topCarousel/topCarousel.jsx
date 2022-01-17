import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

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

function TopCarousel() {
  const [images, setImages] = useState([]); // 최상단 점보트론 이미지 백엔드에서 받기전 예비용

  useEffect(() => {
    // 상단 점보트론 좌/우 슬라이드
    fetch('http://localhost:3000/data/Mains/ImageSlideData.json')
      .then(res => res.json())
      .then(data => {
        setImages(data);
      });
  }, []);

  return (
    <Container>
      <Slider {...settings}>
        <MainSlider>
          {images.map((data, idx) => {
            return <img alt="main_slider" src={data.img} key={idx} />;
          })}
        </MainSlider>
      </Slider>
    </Container>
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

export default TopCarousel;
