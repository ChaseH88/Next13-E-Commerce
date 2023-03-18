import styled from "styled-components";
import { motion } from "framer-motion";
import { textCss } from "styles/helpers";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  ${textCss("subtitle2", "primary")};
  font-weight: 500;
  margin-bottom: 4px;
`;

export const InputStyled = styled(motion.input)`
  ${textCss("body1", "primary")};
  background: ${({ theme }) => theme.colors.palette.white[100]};
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  display: block;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}22;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.palette.black[200]};
    opacity: 0.35;
  }
`;
