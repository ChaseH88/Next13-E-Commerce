import { darkenColor, lightenColor } from "../helpers";

/**
 * Light theme colors
 */
const lightColors = {
  primary: "#826251",
  primaryLight: lightenColor("#826251"),
  primaryDark: darkenColor("#826251"),
  onPrimary: "#f3f3f3",
  secondary: "#247BA0",
  secondaryLight: lightenColor("#247BA0"),
  secondaryDark: darkenColor("#247BA0"),
  onSecondary: "#fff",
  tertiary: "#449dd1",
  tertiaryLight: lightenColor("#449dd1"),
  tertiaryDark: darkenColor("#449dd1"),
  onTertiary: "#fff",
};

/**
 * Dark theme colors
 * // TODO: Add dark theme colors
 */
const darkColors = {
  primary: "#826251",
  primaryLight: lightenColor("#826251"),
  primaryDark: darkenColor("#826251"),
  onPrimary: "#f3f3f3",
  secondary: "#247BA0",
  secondaryLight: lightenColor("#247BA0"),
  secondaryDark: darkenColor("#247BA0"),
  onSecondary: "#fff",
  tertiary: "#449dd1",
  tertiaryLight: lightenColor("#449dd1"),
  tertiaryDark: darkenColor("#449dd1"),
  onTertiary: "#fff",
};

/**
 * This is the theme object that will be used by styled-components
 * @param mode - "light" | "dark"
 */
export const makeTheme = (mode: "light" | "dark" = "light") => ({
  colors: mode === "light" ? lightColors : darkColors,
  fonts: {
    primary: ``,
    secondary: ``,
  },
  fontSizes: {
    h1: "2.5em",
    h2: "2em",
    h3: "1.4em",
    h4: "1.4em",
    content: "1em",
    contentSmall: "0.83em",
    contentLarge: "1.17em",
  },
  fontWeights: {},
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
  },
  boxShadow: {
    small: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.1)",
    large: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  },
  transition: {
    slow: "all 0.3s ease-in-out",
    regular: "all 0.2s ease-in-out",
    fast: "all 0.1s ease-in-out",
  },
  container: {
    small: "60%",
    medium: "80%",
    large: "95%",
    full: "100%",
  },
  spacing: {
    1: "0.25rem",
    "1.5": "0.375rem",
    2: "0.5rem",
    "2.5": "0.625rem",
    3: "0.75rem",
    "3.5": "0.875rem",
    4: "1rem",
    "4.5": "1.125rem",
    5: "1.25rem",
    "5.5": "1.375rem",
    6: "1.5rem",
    "6.5": "1.625rem",
    7: "1.75rem",
    "7.5": "1.875rem",
    8: "2rem",
    "8.5": "2.125rem",
    9: "2.25rem",
    "9.5": "2.375rem",
    10: "2.5rem",
    "10.5": "2.625rem",
    11: "2.75rem",
    "11.5": "2.875rem",
    12: "3rem",
    "12.5": "3.125rem",
    13: "3.25rem",
    "13.5": "3.375rem",
    14: "3.5rem",
    "14.5": "3.625rem",
    15: "3.75rem",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
});
