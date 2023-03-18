import { ColorType } from "types/types";
import { darkenColor, lightenColor } from "../helpers";

const palette = {
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

type CreatePaletteReturnType = {
  [key: string]: string;
};

type PaletteType<C extends ColorType> = CreatePaletteReturnType &
  {
    [K in C | `${C}Light` | `${C}Dark` | `on${C}` | `${C}Text`]: string;
  };

const createPalette = <C extends ColorType>(
  name: C,
  color: string,
  textColor: string
): PaletteType<C> =>
  ({
    [name]: color,
    [`${name}Light`]: lightenColor(color),
    [`${name}Lighter`]: lightenColor(color, 0.4),
    [`${name}Dark`]: darkenColor(color),
    [`${name}Darker`]: darkenColor(color, 0.4),
    [`${name}Text`]: textColor,
  } as PaletteType<C>);

const lightColors = {
  ...createPalette<"primary">("primary", light.primary, palette.white[100]),
  ...createPalette<"secondary">(
    "secondary",
    light.secondary,
    palette.white[100]
  ),
  ...createPalette<"tertiary">("tertiary", light.tertiary, palette.black[100]),
  ...createPalette<"success">("success", light.success, palette.white[100]),
  ...createPalette<"danger">("danger", light.danger, palette.white[100]),
  ...createPalette<"warning">("warning", light.warning, palette.white[100]),
  ...createPalette<"info">("info", light.info, palette.white[100]),
  palette,
};

/**
 * Dark theme colors
 * // TODO: Add dark theme colors
 */
const darkColors = {
  ...createPalette<"primary">("primary", light.primary, palette.white[100]),
  ...createPalette<"secondary">(
    "secondary",
    light.secondary,
    palette.white[100]
  ),
  ...createPalette<"tertiary">("tertiary", light.tertiary, palette.black[100]),
  ...createPalette<"success">("success", light.success, palette.white[100]),
  ...createPalette<"danger">("danger", light.danger, palette.white[100]),
  ...createPalette<"warning">("warning", light.warning, palette.white[100]),
  ...createPalette<"info">("info", light.info, palette.white[100]),
  palette,
};

/**
 * This is the theme object that will be used by styled-components
 * @param mode - "light" | "dark"
 */
export const makeTheme = (mode: "light" | "dark" = "light") => ({
  colors: mode === "light" ? lightColors : darkColors,
  fonts: {
    primary: `'Oswald', sans-serif`,
    secondary: `'Source Sans Pro', sans-serif`,
  },
  fontSizes: {
    h1: "2.5em",
    h2: "2em",
    h3: "1.75em",
    h4: "1.5em",
    h5: "1.25em",
    h6: "1em",
    subtitle1: "1em",
    subtitle2: "0.83em",
    body1: "1em",
    body2: "0.83em",
    caption: "0.67em",
  },
  fontWeights: {
    light: 400,
    regular: 400,
    medium: 600,
    bold: 600,
  },
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
