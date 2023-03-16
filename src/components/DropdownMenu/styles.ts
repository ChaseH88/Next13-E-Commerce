import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface DropdownMenuStyledProps {
  width?:
    | `${string | number}px`
    | `${string | number}%`
    | `${string | number}rem`;
}

const menuItemStyles = css`
  .dropdown-item {
    padding: ${({ theme }) => theme.spacing[2]}
      ${({ theme }) => theme.spacing[10]};
    cursor: pointer;
  }
`;

export const DropdownMenuStyled = styled(motion.div)<DropdownMenuStyledProps>`
  background-color: lightblue;
  width: ${({ width }) => width};
  position: absolute;

  ${menuItemStyles};
`;
