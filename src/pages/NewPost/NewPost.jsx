import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { FormProvider, useForm } from 'react-hook-form';
import { api } from 'config';
import Button from 'components/Button/Button';
import ContainerCardList from './ContainerCardList';
import MetadataForm from './MetadataForm';
import PostDataForm from './PostDataForm';

const IMAGE_OBJECT_TEMPLATE = { url: 'default', file: { name: 'default' } };

function NewPost() {
  const formMethods = useForm();
  const [tags, setTags] = useState([]);
  const [uploadImages, setUploadImages] = useState([IMAGE_OBJECT_TEMPLATE]);
  const onSubmit = data => {
    const formData = new FormData();
    const files = uploadImages.map(image => image.file);
    for (let key in data) {
      formData.append(key, data[key]);
    }
    for (let i = 0; i < tags.length; i++) {
      formData.append('tags', tags[i]);
    }
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    fetch(api.posting, {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('access_token'),
      },
      body: formData,
    }).then(res => res.json());
    // .then(data => console.log(data));
  };

  // TAG Control
  const createTag = e => {
    if (e.target.value === ' ' || e.target.value === '') return;
    if (e.code === 'Enter' || e.code === 'Space') {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };
  const deleteTag = deleteIndex => {
    const tagsCopy = [...tags];
    setTags(
      tagsCopy.slice(0, deleteIndex).concat(tagsCopy.slice(deleteIndex + 1))
    );
  };

  // Image Card Control
  const addCardList = () =>
    setUploadImages([...uploadImages, IMAGE_OBJECT_TEMPLATE]);

  const addImage = (image, index) => {
    const copyUploadedImages = [...uploadImages];
    copyUploadedImages.splice(index, 1, image);
    setUploadImages(copyUploadedImages);
  };

  const deleteImage = (e, deleteTarget) => {
    e.stopPropagation();
    if (uploadImages.length === 1) return alert('이미지 한 개는 필수입니다.');
    setUploadImages(uploadImages.filter(image => image.url !== deleteTarget));
  };

  const reorderImages = (destination, source, draggableId) => {
    if (!destination) return;

    const copyUploadedImages = [...uploadImages];
    copyUploadedImages.splice(source.index, 1);
    copyUploadedImages.splice(destination.index, 0, {
      url: draggableId,
      file: uploadImages[source.index]?.file,
    });

    setUploadImages(copyUploadedImages);
  };

  return (
    <Container>
      <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <FormProvider {...formMethods}>
          <MetadataForm />
          <MainFormDiv>
            <ContainerCardList
              uploadImages={uploadImages}
              addCardList={addCardList}
              addImage={addImage}
              deleteImage={deleteImage}
              reorderImages={reorderImages}
            />
            <PostDataForm
              tags={tags}
              createTag={createTag}
              deleteTag={deleteTag}
            />
          </MainFormDiv>
          <Button type="submit" btnSize="fullSize">
            글 업로드 하기
          </Button>
        </FormProvider>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column', 'flex-start', 'flex-start')};
  max-width: 1003px;
  margin: 30px auto 0px;
  padding: 0 30px;
  min-height: 100vh;
`;

const MainFormDiv = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexBox('row', 'flex-start', 'flex-start')};
  margin-bottom: 50px;
`;

const Form = styled.form`
  width: 100%;
`;

export default NewPost;
