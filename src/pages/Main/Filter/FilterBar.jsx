import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import UserDropDownMenu from 'components/DropDown/UserDropDownMenu';
import styled from 'styled-components';
import useOutsideClick from 'hooks/useOutsideClick';
import Main from '../Main';
import {
  DropDownWrapper,
  MenuList,
  MenuItem,
} from 'components/DropDown/UserDropDownMenu';

// 필터 버튼 수정 부분입니다.
function FilterBar({
  handleSpace,
  handleSize,
  handleStyle,
  handleResidence,
  mountPhotoCard,
}) {
  const ref = useRef();
  const location = useLocation();
  const navigate = useNavigate();
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
    fetch(`http://10.58.6.142:8000/postings${location.search}`, {})
      .then(res => res.json())
      .then(data => {
        mountPhotoCard(data.results);
      });
  }, [location.search]);

  return (
    <Container>
      <MenuButton onClick={toggleDropDown} name="size">
        평수
      </MenuButton>
      {dropdownOpened.size && (
        <FilterDropDown top="40px" left="60px">
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

      <MenuButton onClick={toggleDropDown} name="residence">
        주거형태
      </MenuButton>
      {dropdownOpened.residence && (
        <FilterDropDown top="40px" left="170px">
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

      <MenuButton onClick={toggleDropDown} name="style">
        스타일
      </MenuButton>
      {dropdownOpened.style && (
        <FilterDropDown top="40px" left="280px">
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

      <MenuButton onClick={toggleDropDown} name="space">
        공간
      </MenuButton>
      {dropdownOpened.space && (
        <FilterDropDown top="40px" left="390px">
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
  width: 120px;
  padding: 5px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  text-align: center;
  margin-left: 10px;
  font-weight: bold;
`;
