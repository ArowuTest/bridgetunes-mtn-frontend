export const theme = {
  colors: {
    // MTN Colors
    primary: "#FFCC00", // MTN Yellow
    primaryDark: "#E6B800", // 10% darker variant
    primaryLight: "#FFE066", // 20% lighter

    // Partner Brand Colors
    secondary: "#0066CC", // Bridgetunes Blue
    secondaryDark: "#0052A3",
    secondaryLight: "#3385D6",

    // Shared UI Colors
    success: "#28a745",
    successDark: "#1e7e34",
    successLight: "#d4edda",
    danger: "#dc3545",
    dangerDark: "#bd2130",
    dangerLight: "#f8d7da",
    warning: "#ffc107",
    warningDark: "#e0a800",
    warningLight: "#fff3cd",
    info: "#17a2b8",
    infoDark: "#117a8b",
    infoLight: "#d1ecf1",
    light: "#f8f9fa",
    dark: "#343a40",
    gray: "#6c757d",
    grayLight: "#e9ecef",
    grayDark: "#495057",
    white: "#ffffff",
    black: "#000000",
    background: "#0d0d0d",
    text: "#212529",
    textLight: "#6c757d",
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Inter', sans-serif",
    monospace: "'Courier New', monospace",
  },
  fontSizes: {
    xsmall: "0.75rem",
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xlarge: "1.5rem",
    xxlarge: "2rem",
    xxxlarge: "3rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  space: {
    xsmall: "0.25rem",
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    xlarge: "2rem",
    xxlarge: "3rem",
  },
  breakpoints: {
    mobile: "576px",
    tablet: "768px",
    desktop: "992px",
    widescreen: "1200px",
    fullhd: "1400px",
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.375rem",
    large: "0.5rem",
    pill: "9999px",
  },
  transitions: {
    fast: "all 0.2s ease-in-out",
    normal: "all 0.3s ease-in-out",
    slow: "all 0.5s ease-in-out",
  },
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)",
    xlarge: "0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05)",
    focus: "0 0 0 3px rgba(0, 102, 204, 0.25)",
  },
  zIndices: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
  // Legacy support properties
  borderRadiusLegacy: "0.375rem",
}

export type Theme = typeof theme
