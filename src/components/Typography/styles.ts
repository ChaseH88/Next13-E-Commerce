import styled, { css } from "styled-components";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption";

export interface TypographyStyledProps {
  variant?: Variant;
  color?: string;
  align?: "left" | "right" | "center" | "justify";
}

const typographyStyles = {
  h1: css`
    font-size: 2rem;
    font-weight: 500;
  `,
  h2: css`
    font-size: 1.5rem;
    font-weight: 500;
  `,
  h3: css`
    font-size: 1.25rem;
    font-weight: 500;
  `,
  h4: css`
    font-size: 1.125rem;
    font-weight: 500;
  `,
  h5: css`
    font-size: 1rem;
    font-weight: 500;
  `,
  h6: css`
    font-size: 0.875rem;
    font-weight: 500;
  `,
  subtitle1: css`
    font-size: 1rem;
    font-weight: 400;
  `,
  subtitle2: css`
    font-size: 0.875rem;
    font-weight: 400;
  `,
  body1: css`
    font-size: 1rem;
    font-weight: 400;
  `,
  body2: css`
    font-size: 0.875rem;
    font-weight: 400;
  `,
  caption: css`
    font-size: 0.75rem;
    font-weight: 400;
  `,
};

export const TypographyStyled = styled.p<TypographyStyledProps>`
  ${({ variant }) => typographyStyles[variant || "body1"]}
  color: ${({ color }) => color || "inherit"};
  text-align: ${({ align }) => align || "inherit"};
`;
