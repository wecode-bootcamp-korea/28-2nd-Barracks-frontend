import React, { useRef } from 'react';
import styled from 'styled-components';
import { BsFillCameraFill } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';

const ALLOW_EXTENSION = ['png', 'jpg', 'jpeg', 'gif'];

function CardListItem(props) {
  const { image, addImage, deleteImage, index } = props;
  const inputRef = useRef(null);
  const uploadImage = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleImage = e => {
    e.preventDefault();
    const { files } = e.target;
    const file = files[0];
    const isValid = validateInputFile(file);

    if (isValid) {
      const uploadedFile = URL.createObjectURL(file);
      addImage({ url: uploadedFile, file: file }, index);
    } else {
      alert('png, jpg, jpeg, gif 확장자만 업로드 가능합니다');
    }
  };

  const validateInputFile = file => {
    const extension = file.name.split('.').pop().toLowerCase();
    const isAllowExtension = ALLOW_EXTENSION.find(ext => ext === extension);

    return isAllowExtension ? true : false;
  };

  return (
    <CardList>
      <HiddenImageInput
        onChange={handleImage}
        ref={inputRef}
        type="file"
        name="uploadImage"
      />
      {image.file.name !== 'default' ? (
        <ImageWrapper onClick={uploadImage}>
          <img src={image.url} alt="유저업로드이미지" />
          <DeleteButton
            onClick={e => {
              deleteImage(e, image.url);
            }}
          />
        </ImageWrapper>
      ) : (
        <UploadButton onClick={uploadImage}>
          <ButtonContent>
            <CameraIcon />
            <Placeholder>사진 올리기</Placeholder>
          </ButtonContent>
        </UploadButton>
      )}
    </CardList>
  );
}

const CardList = styled.div``;

const HiddenImageInput = styled.input.attrs({ type: 'file' })`
  display: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 560px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const UploadButton = styled.button`
  position: relative;
  top: -15px;
  width: 100%;
  height: 100%;
  padding-bottom: 60%;
  border: 0;
  border-radius: 4px;
  background-color: transparent;
`;

const ButtonContent = styled.div`
  position: absolute;
  left: 0;
  ${({ theme }) => theme.flexBox('column', 'center', 'center')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  border: 1px dashed ${({ theme }) => theme.border};
  border-radius: 4px;
  cursor: pointer;
`;

const CameraIcon = styled(BsFillCameraFill)`
  font-size: 48px;
  color: ${({ theme }) => theme.placeholder};
  margin-bottom: 12px;
`;

const Placeholder = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.placeholder};
`;

const DeleteButton = styled(IoCloseOutline)`
  position: absolute;
  font-size: 32px;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};
  border-radius: 50%;
`;

export default CardListItem;
