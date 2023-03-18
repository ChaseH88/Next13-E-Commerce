import { darkenColor, lightenColor } from "../helpers";

const pallette = {
  black: {
    100: "#040307",
    200: "#010102",
    300: "#020203",
  },
  white: {
    100: "#FBFBFD",
    200: "#F4F4F8",
    300: "#E6E6EC",
  },
};

/**
 * Light theme colors
 */

const light = {
  primary: "#449dd1",
  secondary: "#2a324b",
  tertiary: "#f7f9f9",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
};

const createPallette = (name: string, color: string, textColor: string) => ({
  [name]: color,
  [`${name}Light`]: lightenColor(color),
  [`${name}Lighter`]: lightenColor(color, 0.4),
  [`${name}Dark`]: darkenColor(color),
  [`${name}Darker`]: darkenColor(color, 0.4),
  [`on${name}`]: textColor,
});

const lightColors = {
  ...createPallette("primary", light.primary, pallette.white[100]),
  ...createPallette("secondary", light.secondary, pallette.white[100]),
  ...createPallette("tertiary", light.tertiary, pallette.black[100]),
  ...createPallette("success", light.success, pallette.white[100]),
  ...createPallette("danger", light.danger, pallette.white[100]),
  ...createPallette("warning", light.warning, pallette.white[100]),
  ...createPallette("info", light.info, pallette.white[100]),
  pallette,
};

/**
 * Dark theme colors
 * // TODO: Add dark theme colors
 */
const darkColors = {
  ...createPallette("primary", light.primary, pallette.white[100]),
  ...createPallette("secondary", light.secondary, pallette.white[100]),
  ...createPallette("tertiary", light.tertiary, pallette.black[100]),
  ...createPallette("success", light.success, pallette.white[100]),
  ...createPallette("danger", light.danger, pallette.white[100]),
  ...createPallette("warning", light.warning, pallette.white[100]),
  ...createPallette("info", light.info, pallette.white[100]),
  pallette,
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
