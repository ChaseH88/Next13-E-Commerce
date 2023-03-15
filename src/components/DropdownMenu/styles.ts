import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export interface DropdownMenuStyledProps {
  maxWidth?:
    | `${string | number}px`
    | `${string | number}%`
    | `${string | number}rem`;
}

export const DropdownMenuStyled = styled(motion.div)<DropdownMenuStyledProps>`
  background-color: lightblue;
  max-width: ${({ maxWidth }) => maxWidth};
`;
