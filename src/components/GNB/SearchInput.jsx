import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import SearchDropDownMenu from 'components/DropDown/SearchDropDownMenu';
import useOutsideClick from 'hooks/useOutsideClick';

function SearchInput(props) {
  const ref = useRef();
  const { register, handleSubmit } = useForm();
  const [isOpened, setOpened] = useState(false);
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem('searchHistory'))
  );

  const openDropDown = () => {
    setOpened(true);
  };

  const onSubmit = ({ search }, e) => {
    e.target.reset();
    setSearchHistory(searchHistory => [search, ...searchHistory]);
    setSearchHistory(searchHistory => [...searchHistory].slice(0, 5));
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  };
  useOutsideClick(ref, () => setOpened(false));

  return (
    <InputWrapper onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <SearchIcon />
      <Input {...register('search')} onClick={openDropDown} />
      {isOpened && (
        <SearchDropDownMenu isOpened searchHistory={searchHistory} />
      )}
    </InputWrapper>
  );
}

const InputWrapper = styled.form`
  ${({ theme }) => theme.flexBox('row', 'center', 'flex-start')};
  position: relative;
  width: 266px;
  height: 40px;
  padding: 10px 10px 10px 40px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.background};
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  } ;
`;

const SearchIcon = styled(BsSearch)`
  ${({ theme }) => theme.positionCenterY('absolute')};
  left: 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;

const Input = styled.input.attrs({
  type: 'text',
  name: 'search',
  placeholder: '동기생활관 통합검색',
  autoComplete: 'off',
  required: true,
  maxLength: 20,
})`
  border: 0;
  background-color: transparent;
  font-size: 15px;
  color: ${({ theme }) => theme.primary};

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

export default SearchInput;
