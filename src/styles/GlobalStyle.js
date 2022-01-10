import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  ${reset}
  
  body{
    font-family: 'Noto Sans KR', sans-serif;
  }

`;

export default GlobalStyle;
