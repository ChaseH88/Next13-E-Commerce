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
  gap: 8px;
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
          {AddButton && <motion.div layout>{AddButton}</motion.div>}
        </AnimatePresence>
      </StyledChipContainer>
    </LayoutGroup>
  );
};

export { ChipContainer };
