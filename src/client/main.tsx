import axe from '@axe-core/react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Environments } from './constants/common.constants';
import './locales/i18n.config';
import './styles/globals.css';
import theme from './styles/theme';

// Enable accessibility checks in development
if (process.env.NODE_ENV !== Environments.Production) {
  axe(React, ReactDOM, 1000);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
