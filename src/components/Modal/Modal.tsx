import React, { ReactNode } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled(motion.div)`
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  max-width: 90%;
  min-width: 300px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={onClose}>&times;</CloseButton>
            {children}
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export { Modal };
