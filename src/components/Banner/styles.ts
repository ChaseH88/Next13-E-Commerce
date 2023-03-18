import styled, { css } from "styled-components";
import { gradient } from "styles/helpers";
import { ColorType } from "types/types";

type Direction = "to bottom" | "to top" | "to right" | "to left";

export interface BannerStyledProps {
  variant: "hero" | "primary" | "secondary" | "tertiary";
  direction: Direction;
}

const makeGradient = (
  direction: Direction,
  color1: string,
  color2: string
) => css`
  background: ${gradient(direction, [`${color1} 0%`, `${color2} 100%`])};
`;

const bannerStyles = (direction: Direction | null = null) => ({
  hero: css`
    background-color: ${({ theme: { colors } }) => colors.palette.white[300]};
  `,
  primary: css`
    ${({ theme: { colors } }) =>
      makeGradient(direction as Direction, colors.primaryLight, colors.primary)}
  `,
  secondary: css`
    ${({ theme: { colors } }) =>
      makeGradient(
        direction as Direction,
        colors.secondary,
        colors.secondaryLight
      )}
  `,
  tertiary: css`
    ${({ theme: { colors } }) =>
      makeGradient(
        direction as Direction,
        colors.tertiary,
        colors.tertiaryLight
      )}
  `,
});

export const BannerStyled = styled.div<BannerStyledProps>`
  height: 100vh;
  width: 100%;
  ${({ variant, direction }) => bannerStyles(direction)[variant]}
`;
