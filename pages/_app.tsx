import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import { AuthProvider } from '../contexts/AuthContext';
import { DrawProvider } from '../contexts/DrawContext';
import { NotificationProvider } from '../contexts/NotificationContext';

// Import theme directly to ensure it's available
const theme = {
  colors: {
    primary: '#FFCC00', // MTN Yellow
    secondary: '#0066CC', // Bridgetunes Blue
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    gray: '#6c757d',
    white: '#ffffff',
    black: '#000000',
    background: '#f5f5f5',
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    widescreen: '1200px',
  },
  borderRadius: '0.375rem',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

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


