import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { AuthProvider } from '../contexts/AuthContext';
import { DrawProvider } from '../contexts/DrawContext';
import { NotificationProvider } from '../contexts/NotificationContext';
import { theme } from '../styles/themeEnhancer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <DrawProvider>
          <NotificationProvider>
            <Component {...pageProps} />
          </NotificationProvider>
        </DrawProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
