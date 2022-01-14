import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { color, mixins } from 'styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Router from './Router';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...color, ...mixins }}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
