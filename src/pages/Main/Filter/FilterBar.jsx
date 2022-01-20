import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  DropDownWrapper,
  MenuList,
  MenuItem,
} from 'components/DropDown/UserDropDownMenu';
import { api } from 'config';

// 필터 버튼 수정 부분입니다.
function FilterBar({
  handleSpace,
  handleSize,
  handleStyle,
  handleResidence,
  mountPhotoCard,
}) {
  const location = useLocation();
  const [dropdownOpened, setIsDropDownOpened] = useState({
    size: false,
    residence: false,
    style: false,
    space: false,
  });

  const toggleDropDown = e => {
    const { name } = e.target;
    setIsDropDownOpened({ ...dropdownOpened, [name]: !dropdownOpened[name] });
  };
  // useOutsideClick(ref, () => setIsDropDownOpened());
  // 리팩토링 할 때 toggleDropDown 을 객체로 묵어도 좋을 것 같아요

  useEffect(() => {
    fetch(`${api.postings}${location.search}`, {})
      .then(res => res.json())
      .then(data => {
        mountPhotoCard(data.results);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return (
    <Container>
      <MenuButton onClick={toggleDropDown} name="size">
        평수
        {dropdownOpened.size && (
          <FilterDropDown top="30px" left="0px">
            <DropDownList>
              <DropDownItem>
                <button name="1" onClick={handleSize}>
                  10평대
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="2" onClick={handleSize}>
                  20평대
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="3" onClick={handleSize}>
                  30평대
                </button>
              </DropDownItem>
            </DropDownList>
          </FilterDropDown>
        )}
      </MenuButton>

      <MenuButton onClick={toggleDropDown} name="residence">
        주거형태
        {dropdownOpened.residence && (
          <FilterDropDown top="30px" left="0px">
            <DropDownList>
              <DropDownItem>
                <button name="1" onClick={handleResidence}>
                  아파트
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="2" onClick={handleResidence}>
                  오피스텔
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="3" onClick={handleResidence}>
                  빌라
                </button>
              </DropDownItem>
            </DropDownList>
          </FilterDropDown>
        )}
      </MenuButton>

      <MenuButton onClick={toggleDropDown} name="style">
        스타일
        {dropdownOpened.style && (
          <FilterDropDown top="30px" left="0px">
            <DropDownList>
              <DropDownItem>
                <button name="1" onClick={handleStyle}>
                  모던
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="2" onClick={handleStyle}>
                  내추럴
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="3" onClick={handleStyle}>
                  빈티지
                </button>
              </DropDownItem>
            </DropDownList>
          </FilterDropDown>
        )}
      </MenuButton>

      <MenuButton onClick={toggleDropDown} name="space">
        공간
        {dropdownOpened.space && (
          <FilterDropDown top="30px" left="0px">
            <DropDownList>
              <DropDownItem>
                <button name="1" onClick={handleSpace}>
                  침실
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="2" onClick={handleSpace}>
                  욕실
                </button>
              </DropDownItem>
              <DropDownItem>
                <button name="3" onClick={handleSpace}>
                  거실
                </button>
              </DropDownItem>
            </DropDownList>
          </FilterDropDown>
        )}
      </MenuButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  flex-direction: row;
  border: none;
`;

const FilterDropDown = styled(DropDownWrapper)`
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${({ theme }) => theme.dropdownLevel};

  &::before,
  &::after {
    border: 0;
  }
`;

const DropDownList = styled(MenuList)`
  width: 110px;
  position: absolute;
  top: 0;
  left: 0;
`;

const DropDownItem = styled(MenuItem)`
  color: ${({ theme }) => theme.secondary};
  font-size: 14px;
  text-align: center;
  button {
    background-color: inherit;
    border: none;
  }
`;

export default FilterBar;

export const MenuButton = styled.button`
  position: relative;

  width: 120px;
  padding: 5px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  text-align: center;
  margin-left: 10px;
  font-weight: bold;
`;
