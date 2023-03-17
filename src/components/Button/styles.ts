import React, { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ColorType } from "types/types";

type Variant = "text" | "outlined" | "contained";

export interface ButtonStyledProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: ColorType;
}

const buttonStyles = {
  text: {
    default: css`
      color: rgba(0, 0, 0, 0.87);
      background-color: transparent;
    `,
    primary: css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
    `,
    secondary: css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: transparent;
    `,
    tertiary: css`
      color: ${({ theme }) => theme.colors.tertiary};
      background-color: transparent;
    `,
  },
  outlined: {
    default: css`
      color: ${({ theme }) => theme.colors.pallette.black[100]};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.pallette.black[100]};
    `,
    primary: css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.primary};
    `,
    secondary: css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
    `,
    tertiary: css`
      color: ${({ theme }) => theme.colors.tertiary};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.tertiary};
    `,
  },
  contained: {
    default: css`
      color: ${({ theme }) => theme.colors.pallette.white[100]};
      background-color: ${({ theme }) => theme.colors.pallette.black[100]};
    `,
    primary: css`
      color: ${({ theme }) => theme.colors.onPrimary};
      background-color: ${({ theme }) => theme.colors.primary};
    `,
    secondary: css`
      color: ${({ theme }) => theme.colors.onSecondary};
      background-color: ${({ theme }) => theme.colors.secondary};
    `,
    tertiary: css`
      color: ${({ theme }) => theme.colors.onTertiary};
      background-color: ${({ theme }) => theme.colors.tertiary};
    `,
  },
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ variant, color }) => buttonStyles[variant || "text"][color || "default"]}
  font-size: 0.875rem;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    border-color 0.25s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
