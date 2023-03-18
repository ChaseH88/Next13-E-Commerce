import { css } from "styled-components";
import { FontType, ColorType, SpacingType } from "types/types";

export const textCss = (
  style: FontType,
  variant: ColorType,
  padding: SpacingType = 2
) => css`
  font-size: ${({ theme }) => theme.fontSizes[style]};
  color: ${({ theme }) =>
    theme.colors[
      `on${variant.charAt(0).toUpperCase() + variant.slice(1)}` as ColorType
    ]};
  padding: ${({ theme }) => theme.spacing[padding]};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin: 0;
  padding: 0;
`;
