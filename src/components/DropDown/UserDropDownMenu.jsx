import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MY_MENU_ITEMS = ['마이페이지', '로그아웃'];

function UserDropDownMenu(props) {
  const { isDropDownMenuOpened } = props;
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('userInfo');
    navigate('/');
  };

  return (
    <DropDownWrapper isDropDownMenuOpened={isDropDownMenuOpened}>
      <MenuList>
        {MY_MENU_ITEMS.map((menu, index) => (
          <MenuItem key={index}>
            <button onClick={logout}>{menu}</button>
          </MenuItem>
        ))}
      </MenuList>
    </DropDownWrapper>
  );
}
export default UserDropDownMenu;

export const DropDownWrapper = styled.div`
  ${({ theme }) => theme.positionCenterX()};
  top: 52px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.18);
  transition: opacity 300ms ease-in-out;

  // TOOLTIP
  &::before,
  &::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -24px;
    display: block;
    width: 0;
    height: 0;
    border-top: 12px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 12px solid #fff;
    border-left: 10px solid transparent;
    content: '';
  }

  // TOOLTIP BORDER
  &::before {
    border-bottom-color: ${({ theme }) => theme.border};
  }

  &::after {
    top: -22px;
    border-bottom-color: ${({ theme }) => theme.white};
  }
`;

export const MenuList = styled.ul`
  width: 200px;
  padding: 8px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;

export const MenuItem = styled.li`
  a,
  button {
    ${({ theme }) => theme.flexBox('row', 'center', 'flex-start')};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.primary};
    width: 100%;
    height: 44px;
    background-color: transparent;
    border: 0;
    padding: 10px 14px;
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.background};
    }
  }
`;
