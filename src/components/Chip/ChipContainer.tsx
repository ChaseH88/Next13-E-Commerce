import React, { useMemo } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Chip, ChipProps } from "./Chip";

interface ChipContainerProps {
  chips: ChipProps[];
  addButton?: React.ReactNode;
}

const StyledChipContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  .add-button {
    button {
      height: auto;
      width: auto;
    }
  }
`;

const ChipContainer = ({ chips, addButton }: ChipContainerProps) => {
  const AddButton = useMemo(() => addButton, [addButton]);
  return (
    <LayoutGroup>
      <StyledChipContainer layout>
        <AnimatePresence>
          {chips.map((chip) => (
            <Chip fromContainer key={chip.label} {...chip} />
          ))}
          {AddButton && (
            <motion.div className="add-button" layout>
              {AddButton}
            </motion.div>
          )}
        </AnimatePresence>
      </StyledChipContainer>
    </LayoutGroup>
  );
};

export { ChipContainer };
