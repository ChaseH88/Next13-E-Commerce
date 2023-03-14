/**
 * Light theme colors
 */
const lightColors = {
  primary: "#9BD1C2",
  secondary: "#70A5A5",
  tertiary: "#517884",
  background: "#04000e",
  backgroundSecondary: "#232935",
  backgroundTertiary: "#394F5D",
  text: "#000",
  textSecondary: "#fff",
  textTertiary: "#f5ebff",
};

/**
 * Dark theme colors
 */
const darkColors = {
  primary: "#0070f3",
  secondary: "#ff0070",
  tertiary: "#ff0070",
  background: "#252525",
  backgroundSecondary: "#1b1b1b",
  backgroundTertiary: "#f3f3f3",
  text: "#f3f3f3",
  textSecondary: "#bcbcbc",
  textTertiary: "#252525",
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
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  breakpoints: {
    xs: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
});
