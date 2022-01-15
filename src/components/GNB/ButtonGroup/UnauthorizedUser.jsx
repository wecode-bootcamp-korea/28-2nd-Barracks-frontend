import React from 'react';
import { IconGroup } from '../GNB';
import { ButtonItem } from '../NavButtonGroup';

function UnauthorizedUser(props) {
  return (
    <IconGroup>
      <ButtonItem href="/users/login">로그인</ButtonItem>
      <ButtonItem href="/users/login">회원가입</ButtonItem>
    </IconGroup>
  );
}

export default UnauthorizedUser;
