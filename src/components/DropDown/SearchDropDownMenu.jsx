import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DropDownWrapper, MenuList, MenuItem } from './UserDropDownMenu';

function SearchDropDownMenu({ isOpened, searchHistory, ...props }) {
  return (
    <SearchDropDownWrapper isSearchDropDownMenuOpened={isOpened}>
      <SearchList>
        <SearchListHeader as="header">최근 검색어</SearchListHeader>
        {searchHistory?.map((searchItem, index) => (
          <MenuItem key={index}>
            <Link to="#">{searchItem}</Link>
          </MenuItem>
        ))}
      </SearchList>
    </SearchDropDownWrapper>
  );
}

const SearchDropDownWrapper = styled(DropDownWrapper)`
  top: 45px;

  &::before,
  &::after {
    border: none;
  }
`;

const SearchList = styled(MenuList)`
  width: 266px;
`;

const SearchListHeader = styled(MenuItem)`
  padding: 10px 14px;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.tertiary};
`;

export default SearchDropDownMenu;
