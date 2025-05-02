import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // MTN Colors
      primary: string;
      primaryDark: string;
      primaryLight: string;
      
      // Partner Brand Colors
      secondary: string;
      secondaryDark: string;
      secondaryLight: string;
      
      // Shared UI Colors
      success: string;
      successDark: string;
      successLight: string;
      danger: string;
      dangerDark: string;
      dangerLight: string;
      warning: string;
      warningDark: string;
      warningLight: string;
      info: string;
      infoDark: string;
      infoLight: string;
      light: string;
      dark: string;
      gray: string;
      grayLight: string;
      grayDark: string;
      white: string;
      black: string;
      background: string;
      text: string;
      textLight: string;
    };
    fonts: {
      body: string;
      heading: string;
      monospace: string;
    };
    fontSizes: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };
    fontWeights: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
      black: number;
    };
    space: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      widescreen: string;
      fullhd: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      pill: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      focus: string;
    };
    zIndices: {
      dropdown: number;
      sticky: number;
      fixed: number;
      modalBackdrop: number;
      modal: number;
      popover: number;
      tooltip: number;
    };
    
    // Legacy properties - CORRECTED VERSION
    boxShadow?: string;        // Optional (matches theme.ts)
    borderRadiusLegacy: string; // Required (no '?' - matches theme.ts)
    transition?: string;       // Optional
  }
}
