import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface ButtonStyledProps {
  variant: "primary" | "secondary";
  disabled?: boolean;
  activity?: boolean;
  size: "small" | "medium" | "large";
}

export const primaryButton = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  border-color: ${({ theme }) => theme.colors.text};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const secondaryButton = css`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-color: ${({ theme }) => theme.colors.textSecondary};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const smallButton = css`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[4]};
  font-size: 0.8rem;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const mediumButton = css`
  padding: ${({ theme }) => theme.spacing["2"]}
    ${({ theme }) => theme.spacing[8]};
  font-size: 1rem;
`;

export const largeButton = css`
  padding: ${({ theme }) => theme.spacing[3]}
    ${({ theme }) => theme.spacing[15]};
  font-size: 1.2rem;
`;

export const ButtonStyled = styled(motion.button)<ButtonStyledProps>`
  position: relative;
  overflow: hidden;
  user-select: none;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ variant }) => (variant === "primary" ? primaryButton : secondaryButton)}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
    ${({ size }) =>
    size === "small"
      ? smallButton
      : size === "medium"
      ? mediumButton
      : largeButton};
`;
