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
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.primary};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.primary};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.primary};
  `,
  h4: css`
    font-size: ${({ theme }) => theme.fontSizes.h4};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.primary};
  `,
  h5: css`
    font-size: ${({ theme }) => theme.fontSizes.h5};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.primary};
  `,
  h6: css`
    font-size: ${({ theme }) => theme.fontSizes.h6};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fonts.primary};
  `,
  subtitle1: css`
    font-size: ${({ theme }) => theme.fontSizes.subtitle1};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fonts.secondary};
  `,
  subtitle2: css`
    font-size: ${({ theme }) => theme.fontSizes.subtitle2};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fonts.secondary};
  `,
  body1: css`
    font-size: ${({ theme }) => theme.fontSizes.body1};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fonts.secondary};
  `,
  body2: css`
    font-size: ${({ theme }) => theme.fontSizes.body2};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fonts.secondary};
  `,
  caption: css`
    font-size: ${({ theme }) => theme.fontSizes.caption};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fonts.secondary};
  `,
};

export const TypographyStyled = styled.p<TypographyStyledProps>`
  font-family: ${({ theme }) => theme.fonts.secondary};
  ${({ variant }) => typographyStyles[variant || "body1"]}
  color: ${({ color }) => color || "inherit"};
  text-align: ${({ align }) => align || "inherit"};
`;
