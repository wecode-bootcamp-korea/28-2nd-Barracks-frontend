import React, { useRef, useState } from 'react';
import useOutsideClick from 'hooks/useOutsideClick';
import styled from 'styled-components';
import Avatar from 'components/Avatar/Avatar';
import UserDropDownMenu from 'components/DropDown/UserDropDownMenu';
import { BsBookmark, BsBell } from 'react-icons/bs';
import { IconGroup } from '../GNB';

function GeneralUser({ userInfo }) {
  const { profile_image: profileImage } = userInfo;
  const ref = useRef();
  const [isDropDownMenuOpened, setIsDropDownMenuOpened] = useState(false);

  const toggleDropDownMenu = () => {
    setIsDropDownMenuOpened(!isDropDownMenuOpened);
  };

  useOutsideClick(ref, () => setIsDropDownMenuOpened(false));

  return (
    <IconGroup>
      <ButtonIcon>
        <BsBookmark href="#" />
      </ButtonIcon>
      <ButtonIcon>
        <BsBell href="#">회원가입</BsBell>
      </ButtonIcon>
      <AvatarWrapper as="button" onClick={toggleDropDownMenu} ref={ref}>
        <Avatar isActive={isDropDownMenuOpened} profileImage={profileImage} />
        {isDropDownMenuOpened && <UserDropDownMenu isDropDownMenuOpened />}
      </AvatarWrapper>
    </IconGroup>
  );
}
const ButtonIcon = styled.a`
  ${({ theme }) => theme.flexBox()};
  width: 36px;
  height: 36px;
  padding: 6px;
  margin-right: 5px;
  border-radius: 50%;
  font-size: 20px;
  color: ${({ theme }) => theme.tertiary};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:not(:last-child):hover {
    background-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.white};
  }
`;

const AvatarWrapper = styled(ButtonIcon)`
  background: none;
  border: none;
  border-radius: 50%;
  position: relative;
  padding: 0;
`;
export default GeneralUser;
