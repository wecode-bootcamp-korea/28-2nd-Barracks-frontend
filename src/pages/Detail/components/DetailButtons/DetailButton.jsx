import React from 'react';
import styled, { css, keyframes } from 'styled-components';

export default function DetailButton({
  children,
  color,
  size,
  padding,
  outline,
  fullWidth,
  ...rest
}) {
  return (
    <StyledButton
      color={color}
      size={size}
      padding={padding}
      outline={outline}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const sizes = {
  large: {
    height: '48px',
    fontSize: '24px',
  },
  medium: {
    height: '24px',
    fontSize: '16px',
  },
  small: {
    height: '19px',
    fontSize: '14px',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const paddingStyles = css`
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
`;

const buttonHover = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme[color];

    return css`
      ${({ color }) =>
        color === 'primary' &&
        css`
          background: ${selected};
          color: white;
        `}

      ${({ color }) =>
        color === 'blue' &&
        css`
          background: ${selected};
          color: white;

          &:hover {
            background: ${theme.darkBlue};
          }
        `}

      ${({ color }) =>
        color === 'secondary' &&
        css`
          background: ${selected};
          color: white;
        `}

      ${({ color }) =>
        color === 'border' &&
        css`
          background: ${selected};
          color: ${theme.primary};
          margin: 0 auto;
        `}

      /* outline이 있을 때 스타일*/
      ${({ outline }) =>
        outline &&
        css`
          background: transparent;
          color: ${selected};
          border: 1px solid ${selected};

          &:hover {
            background: ${theme.blue};
            color: white;
            border: none;
            animation: ${buttonHover} 0.4s forwards;
          }
        `}
    `;
  }}
`;

const fullWidthStyle = css`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: ${fullWidth};
      justify-content: center;
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  padding-right: 4px;
  padding-left: 4px;

  /* 크기 */
  ${sizeStyles}

  /* 버튼 배경 색상 */
  ${colorStyles}

  /* 패딩 */
  ${paddingStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;
