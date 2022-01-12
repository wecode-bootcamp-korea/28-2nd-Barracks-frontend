import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';

import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { color, mixins } from 'styles/theme';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...color, ...mixins }}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
