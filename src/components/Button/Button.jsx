import React from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

function Button({ children, styleType = 'primary', btnSize = 'md', ...props }) {
  return (
    <>
      {
        {
          primary: (
            <PrimaryButton size={btnSize} {...props}>
              {children}
            </PrimaryButton>
          ),
          outline: (
            <OutlineButton size={btnSize} {...props}>
              {children}
            </OutlineButton>
          ),
        }[styleType]
      }
    </>
  );
}

const BaseButton = styled.button`
  ${({ theme }) => theme.flexBox()};
  padding: 0 8px;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  ${props =>
    props.size === 'sm' && 'min-width:80px; font-size:14px; height:32px'};
  ${props =>
    props.size === 'md' && 'min-width:100px; font-size:16px; height:40px'};
  ${props =>
    props.size === 'lg' && 'min-width:200px; font-size:18px; height:55px'};
  ${props =>
    props.size === 'fullSize' && 'width:100%; font-size:18px; height:55px'};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

const PrimaryButton = styled(BaseButton)`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.blue};
  transition: background-color 300ms ease-in-out;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.darkBlue};
  }
`;

const OutlineButton = styled(BaseButton)`
  color: ${({ theme }) => theme.blue};
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.blue};
  transition: background-color 300ms ease-in-out;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.blue};
  }
`;
export default Button;

export const ArrowDown = styled(IoIosArrowDown)`
  ${({ theme }) => theme.flexBox()};
  margin-left: 5px;
`;
