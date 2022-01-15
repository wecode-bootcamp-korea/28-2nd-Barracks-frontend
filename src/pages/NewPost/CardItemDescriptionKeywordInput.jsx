import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCloseOutline } from 'react-icons/io5';

function CardItemDescriptionKeywordInput({ tags, createTag, deleteTag }) {
  return (
    <Wrapper>
      <InputWrapper>
        {tags.map((tag, index) => (
          <Tag
            key={index}
            as="button"
            onClick={e => {
              e.preventDefault();
            }}
          >
            {tag}
            <DeleteButton
              onClick={() => {
                deleteTag(index);
              }}
            />
          </Tag>
        ))}

        <Input onKeyPress={createTag} />
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const DeleteButton = styled(IoCloseOutline)`
  ${({ theme }) => theme.positionCenterY()};
  right: 10px;
  font-size: 18px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  max-width: calc(100% - 6px);
  margin: 4px;
  color: ${({ theme }) => theme.tertiary};
  border-radius: 4px;
`;

const Tag = styled(InputWrapper)`
  border: 0;
  padding: 6px 36px 6px 25px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.tertiary};
  height: 32px;
  font-size: 15px;

  ::after {
    ${({ theme }) => theme.positionCenterY()};
    left: 10px;
    content: '#';
  }
`;

const Input = styled.input.attrs({ placeholder: '태그 작성' })`
  display: inline-block;
  position: relative;
  top: 2px;
  width: 100px;
  max-width: calc(100% - 26px);
  margin: 4px;
  padding: 6px 2px 5px 18px;
  font-size: 15px;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.background};
  line-height: 1.4;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  :focus {
    outline: none;
  }

  ::after {
    ${({ theme }) => theme.positionCenterY()};
    left: 10px;
    content: '#';
  }

  ::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

export default CardItemDescriptionKeywordInput;
