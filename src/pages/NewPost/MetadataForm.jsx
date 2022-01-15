import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import Select from 'components/Select/Select';

const SIZE_OPTIONS = ['10평 미만', '10평대', '20평대 이상'];
const RESIDENCE_OPTIONS = ['원룸&오피스텔', '아파트', '빌라&연립'];
const STYLE_OPTIONS = ['모던', '북유럽', '빈티지'];

function MetadataForm(props) {
  const { register } = useFormContext();
  return (
    <MetadataFormDiv>
      <SelectGroup>
        <Select
          register={register}
          name="size"
          defaultValue="평수"
          options={SIZE_OPTIONS}
        />
        <Select
          register={register}
          name="residence"
          defaultValue="주거형태"
          options={RESIDENCE_OPTIONS}
        />
        <Select
          register={register}
          name="style"
          defaultValue="스타일"
          options={STYLE_OPTIONS}
        />
      </SelectGroup>
      <TitleInput
        {...register('title', { required: true })}
        placeholder="포스트제목을 입력해주세요"
      />
    </MetadataFormDiv>
  );
}

const MetadataFormDiv = styled.div`
  ${({ theme }) => theme.flexBox('row', 'flex-start', 'space-between')};
  width: 100%;
  margin-bottom: 40px;
`;

const SelectGroup = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'flex-start')};
`;
const TitleInput = styled.input`
  min-width: 300px;
  height: 40px;
  padding: 0 15px;
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
  transition: border 300ms ease-in-out, background-color 300ms ease-in-out;

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  :hover,
  :focus {
    border: 1px solid ${({ theme }) => theme.placeholder};
    background-color: ${({ theme }) => theme.background};
  }

  :focus {
    outline: none;
  }
`;

export default MetadataForm;
