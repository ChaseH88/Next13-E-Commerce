import styled from "styled-components";
import { motion } from "framer-motion";

export const InputStyled = styled(motion.input)`
  background: ${({ theme }) => theme.colors.palette.white[100]};
  color: ${({ theme }) => theme.colors.palette.black[300]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.fontSizes.content};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  display: block;
`;
