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
    success: css`
      color: ${({ theme }) => theme.colors.success};
      background-color: transparent;
    `,
    warning: css`
      color: ${({ theme }) => theme.colors.warning};
      background-color: transparent;
    `,
    danger: css`
      color: ${({ theme }) => theme.colors.danger};
      background-color: transparent;
    `,
    info: css`
      color: ${({ theme }) => theme.colors.info};
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
    success: css`
      color: ${({ theme }) => theme.colors.success};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.success};
    `,
    warning: css`
      color: ${({ theme }) => theme.colors.warning};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.warning};
    `,
    danger: css`
      color: ${({ theme }) => theme.colors.danger};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.danger};
    `,
    info: css`
      color: ${({ theme }) => theme.colors.info};
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.info};
    `,
  },
  contained: {
    default: css`
      color: ${({ theme }) => theme.colors.pallette.white[100]};
      background-color: ${({ theme }) => theme.colors.pallette.black[100]};
    `,
    primary: css`
      color: ${({ theme }) => theme.colors.primaryText};
      background-color: ${({ theme }) => theme.colors.primary};
    `,
    secondary: css`
      color: ${({ theme }) => theme.colors.secondaryText};
      background-color: ${({ theme }) => theme.colors.secondary};
    `,
    tertiary: css`
      color: ${({ theme }) => theme.colors.tertiaryText};
      background-color: ${({ theme }) => theme.colors.tertiary};
    `,
    success: css`
      color: ${({ theme }) => theme.colors.successText};
      background-color: ${({ theme }) => theme.colors.success};
    `,
    warning: css`
      color: ${({ theme }) => theme.colors.warningText};
      background-color: ${({ theme }) => theme.colors.warning};
    `,
    danger: css`
      color: ${({ theme }) => theme.colors.dangerText};
      background-color: ${({ theme }) => theme.colors.danger};
    `,
    info: css`
      color: ${({ theme }) => theme.colors.infoText};
      background-color: ${({ theme }) => theme.colors.info};
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
