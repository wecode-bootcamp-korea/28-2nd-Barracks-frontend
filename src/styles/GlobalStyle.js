import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: '양진체';
    src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  *{
    box-sizing: border-box;
  }

  ${reset}
  
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

export default GlobalStyle;
