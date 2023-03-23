import styled from "styled-components";
import { motion } from "framer-motion";

export const SelectStyled = styled.div`
  position: relative;
`;

export const ArrowStyled = styled(motion.div)`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SelectOptionStyled = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  min-width: 200px;
  text-align: right;

  &:hover {
    background-color: ${({ theme }) => theme.colors.palette.white[200]};
  }
`;
