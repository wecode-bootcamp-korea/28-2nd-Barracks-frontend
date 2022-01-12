import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';

import GlobalStyle from 'styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { color, device, mixins, zIndex } from 'styles/theme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...color, ...mixins, ...zIndex, device }}>
      <Router />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
