import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface ButtonStyledProps {
  variant: "primary" | "secondary";
  disabled?: boolean;
  activity?: boolean;
  size: "icon" | "small" | "medium" | "large";
}

export const primaryButton = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  border-color: ${({ theme }) => theme.colors.primary};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.onPrimary};
  }
`;

export const secondaryButton = css`
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.secondary};
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.onSecondary};
  }
`;

export const smallButton = css`
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[4]};
  font-size: 0.8rem;
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
