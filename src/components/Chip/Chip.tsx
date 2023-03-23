import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { textCss } from "styles/helpers";

export interface ChipProps {
  label: string;
  onDelete?: () => void;
}

const ChipContainer = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.colors.palette.white[300]};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.fontSizes.body1};
`;

const ChipLabel = styled.span`
  ${textCss("body1", "primary")}
`;

const DeleteIcon = styled(motion.div)`
  cursor: pointer;
  margin-left: 8px;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  user-select: none;
`;

const Chip = ({ label, onDelete }: ChipProps) => {
  return (
    <ChipContainer layout>
      <ChipLabel>{label}</ChipLabel>
      {onDelete && (
        <DeleteIcon
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={onDelete}
        >
          &times;
        </DeleteIcon>
      )}
    </ChipContainer>
  );
};

export { Chip };
