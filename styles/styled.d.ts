import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
      warning: string;
      info: string;
      light: string;
      dark: string;
      gray: string;
      white: string;
      black: string;
      background: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
      extrabold: number;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      widescreen: string;
    };
    borderRadius: string;
    transition: string;
    boxShadow: string;
  }
}
