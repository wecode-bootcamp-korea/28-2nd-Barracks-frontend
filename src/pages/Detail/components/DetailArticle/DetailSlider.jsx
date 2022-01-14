import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function DetailSlider({ imageUrlList }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledSlider {...settings}>
      {imageUrlList?.map((url, index) => {
        return (
          <div key={index}>
            <ArticleImage>
              <img alt="upload photo" src={url} />
            </ArticleImage>
          </div>
        );
      })}
    </StyledSlider>
  );
}

const ArticleImage = styled.div`
  height: 800px;
  background-color: ${({ theme }) => theme.secondary};
  margin-top: 20px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide img {
    object-fit: cover;
  }
`;
