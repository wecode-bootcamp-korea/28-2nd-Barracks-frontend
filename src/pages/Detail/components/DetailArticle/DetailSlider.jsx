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
      {imageUrlList?.map(url => {
        return (
          <div key={url.image_id}>
            <ArticleImage>
              <img alt="upload photo" src={url.image_url} />
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
    width: 100%;
    height: 100%;
  }
`;
