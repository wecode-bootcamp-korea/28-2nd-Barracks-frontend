import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import Select from 'components/Select/Select';
import CardItemDescriptionKeywordInput from './CardItemDescriptionKeywordInput';

const SPACE_OPTIONS = ['원룸', '거실', '침실'];

function PostDataForm({ tags, createTag, deleteTag }) {
  const { register } = useFormContext();

  return (
    <Wrapper>
      <Select
        register={register}
        name="space"
        defaultValue="공간 (선택)"
        options={SPACE_OPTIONS}
        required={true}
      />
      <TextArea {...register('content')} />
      <CardItemDescriptionKeywordInput
        tags={tags}
        createTag={createTag}
        deleteTag={deleteTag}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 48%;
  margin: 0 12px;
`;

const TextArea = styled.textarea.attrs({
  placeholder: '사진에 대해 설명해주세요',
})`
  width: 98%;
  height: 145px;
  margin: 0 5px 10px;
  padding: 8px 15px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  line-height: 1.4;
  transition: border 300ms ease-in-out, background-color 300ms ease-in-out;
  resize: none;

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.placeholder};
    background-color: ${({ theme }) => theme.background};
  }

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 13px;
  }
`;

export default PostDataForm;
