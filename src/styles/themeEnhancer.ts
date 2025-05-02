// themeEnhancer.ts
import { theme as baseTheme } from "./theme"

export const theme = {
  ...baseTheme,

  // Enhanced shadows configuration
  shadows: {
    ...baseTheme.shadows,
    medium: baseTheme.shadows.medium || "0 4px 6px rgba(0, 0, 0, 0.1)",
  },

  // Enhanced border radius configuration
  borderRadius: {
    ...baseTheme.borderRadius,
    pill: baseTheme.borderRadius.pill || "9999px",
  },

  // Enhanced transitions configuration
  transitions: {
    ...baseTheme.transitions,
    fast: baseTheme.transitions.fast || "all 0.2s ease-in-out",
  },

  // Enhanced space configuration
  space: {
    ...baseTheme.space,
    xxlarge: baseTheme.space.xxlarge || "3rem",
  },

  // Enhanced font sizes configuration
  fontSizes: {
    ...baseTheme.fontSizes,
    xxxlarge: baseTheme.fontSizes.xxxlarge || "3rem",
  },
}

export default theme
