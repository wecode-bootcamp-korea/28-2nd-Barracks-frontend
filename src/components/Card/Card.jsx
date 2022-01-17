import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsChat } from 'react-icons/bs';

function Card({
  id,
  username,
  top_detail,
  bottom_detail,
  img,
  residence,
  size,
  space,
  viewCount,
  style,
}) {
  const navigate = useNavigate();

  function goToDetail(id) {
    navigate(`/contents/${id}`);
  }

  return (
    <Container>
      <Article>
        <Head>
          <Title>{username}</Title>
          <ProfileDesc>{top_detail}</ProfileDesc>
        </Head>

        <ImgBox>
          <Img alt="product_image" src={img[0]} onClick={() => goToDetail()} />
          {/* <ViewCount>{viewCount}</ViewCount> 필터 완료시 레이아웃 수정용 */}
        </ImgBox>
        {/* <IconList>
          <AiOutlineHeart />
          <BsBookmark />
          <BsChat />
        </IconList> 필터 완료시 레이아웃 수정용 */}
      </Article>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const Article = styled.p`
  width: 250px;
  height: 300px;
  min-height: 16px;
  margin: 0 3px 40px 0;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 60px 5px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

const ProfileDesc = styled.p`
  font-size: 13px;
  color: #bfbbbb;
  line-height: 28px;
`;

const ImgBox = styled.div`
  display: grid;
  z-index: 1;
`;

const Img = styled.img`
  width: 230px;
  height: 250px;
  border-radius: 15px;
  align-self: center;
  z-index: 1;
`;

const ViewCount = styled.p`
  font-size: 14px;
  color: red;
  align-self: center;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 94px;

  > div {
    margin: auto;
  }
`;

export default Card;
