import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface ButtonStyledProps {
  variant: "primary" | "secondary";
  disabled?: boolean;
  activity?: boolean;
}

export const primaryButton = css`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

export const secondaryButton = css`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ButtonStyled = styled(motion.button)<ButtonStyledProps>`
  ${({ variant }) => (variant === "primary" ? primaryButton : secondaryButton)}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
