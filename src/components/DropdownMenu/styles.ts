import styled from "styled-components";
import { motion } from "framer-motion";

export interface DropdownMenuStyledProps {
  style?: React.CSSProperties;
}

export const DropdownMenuStyled = styled(motion.div)<DropdownMenuStyledProps>`
  transform-origin: top;
  position: absolute;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  z-index: 1000;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  overflow: hidden;
  ${({ style }) => style && ({ ...style } as any)}
`;
