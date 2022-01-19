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
function FilterBar() {
  const [filterBar, setFilterBar] = useState([]);
  const [result, setResult] = useState('');
  // const API = `http://10.58.6.142:8000/postings`;
  const ref = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://10.58.6.142:8000/postings${location.search}`, {})
      .then(res => res.json())
      .then(data => setFilterBar(data.result));
  }, [location.search]);

  const handleSpace = space => {
    // 인자로 받는 isSpace가 마지막 주소로 들어감
    const qs = new URLSearchParams(location.search);
    qs.set('space', space); //앞에 space는 백엔드에서 전달받는 인자명과 동일함.
    navigate('?' + qs.toString());
  };

  // 이후 필터 필요한부분만 const 작성 예제 : const handleSize = 인자 => 이후 내용 유사함.
  const handleSize = isSize => {
    const qs = new URLSearchParams(location.search);
    qs.set('size', isSize);
    navigate('?' + qs.toString());
  };

  const handleStyle = isStyle => {
    const qs = new URLSearchParams(location.search);
    qs.set('style', isStyle);
    navigate('?' + qs.toString());
  };

  const handleResidence = isResidence => {
    const qs = new URLSearchParams(location.search);
    qs.set('residence', isResidence);
    navigate('?' + qs.toString());
  };

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
  useOutsideClick(ref, () => setIsDropDownOpened());
  // 리팩토링 할 때 toggleDropDown 을 객체로 묵어도 좋을 것 같아요

  return (
    <Container>
      <MenuButton onClick={toggleDropDown} name="size">
        평수
      </MenuButton>
      {dropdownOpened.size && (
        <FilterDropDown top="40px" left="60px">
          <DropDownList>
            <DropDownItem>
              <button
                onClick={() => {
                  handleSize(handleSize.id);
                }}
              >
                10평대
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleSize(handleSize.id);
                }}
              >
                20평대
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleSize(handleSize.id);
                }}
              >
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
              <button
                onClick={() => {
                  handleResidence(handleResidence.id);
                }}
              >
                아파트
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleResidence(handleResidence.id);
                }}
              >
                오피스텔
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleResidence(handleResidence.id);
                }}
              >
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
              <button
                onClick={() => {
                  handleStyle(handleStyle.id);
                }}
              >
                모던
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleStyle(handleStyle.id);
                }}
              >
                내추럴
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleStyle(handleStyle.id);
                }}
              >
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
              <button
                onClick={() => {
                  handleSpace(handleSpace.id);
                }}
              >
                침실
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleSpace(handleSpace.id);
                }}
              >
                욕실
              </button>
            </DropDownItem>
            <DropDownItem>
              <button
                onClick={() => {
                  handleSpace(handleSpace.id);
                }}
              >
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
