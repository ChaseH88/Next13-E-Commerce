import { css } from "styled-components";
import { makeTheme } from "../theme";

type ReturnTypeMakeTheme = ReturnType<typeof makeTheme>;
type Fonts = keyof ReturnTypeMakeTheme["fontSizes"];
type FilterTypesWithOn<T> = {
  [K in keyof T as K extends string
    ? K extends `on${infer Suffix}`
      ? Uncapitalize<Suffix>
      : never
    : never]: T[K];
};
type Colors = keyof FilterTypesWithOn<ReturnTypeMakeTheme["colors"]>;
type Spacing = keyof ReturnTypeMakeTheme["spacing"];

export const textCss = (
  style: Fonts,
  variant: Colors,
  padding: Spacing = 2
) => css`
  font-size: ${({ theme }) => theme.fontSizes[style]};
  color: ${({ theme }) =>
    theme.colors[
      `on${variant.charAt(0).toUpperCase() + variant.slice(1)}` as Colors
    ]};
  padding: ${({ theme }) => theme.spacing[padding]};
`;
