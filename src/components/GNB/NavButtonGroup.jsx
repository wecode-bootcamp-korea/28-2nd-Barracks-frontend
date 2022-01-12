import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import GeneralUser from './ButtonGroup/GeneralUser';
import UnauthorizedUser from './ButtonGroup/UnauthorizedUser';
import { ArrowDown } from 'components/Button/Button';

function NavButtonGroup(props) {
  const currentUserLevel = 'generalUser'; // TODO: generalUser , admin , unauthorized 나중에 props에서 받아올것

  return (
    <ButtonWrapper>
      {
        {
          generalUser: <GeneralUser />,
          admin: <Admin />,
          unauthorized: <UnauthorizedUser />,
        }[currentUserLevel]
      }
      <Button styleType="primary">
        글쓰기
        <ArrowDown />
      </Button>
    </ButtonWrapper>
  );
}

function Admin() {
  return <p>큰형님이시다.</p>;
}

const ButtonWrapper = styled.div`
  ${({ theme }) => theme.flexBox('row', 'center', 'flex-start')};
  margin: 20px 0;
`;

export default NavButtonGroup;

export const ButtonItem = styled.a`
  position: relative;
  display: inline-block;
  margin-right: 15px;
  color: ${({ theme }) => theme.tertiary};
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  & + &::before {
    content: '';
    position: absolute;
    height: 12px;
    top: 3px;
    right: 100%;
    margin-right: 8px;
    border-right: 1px solid ${({ theme }) => theme.tertiary};
  }
`;
