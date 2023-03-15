import React, { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { ButtonStyled, ButtonStyledProps } from "./styles";

interface ButtonProps extends ButtonStyledProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  const [ripple, setRipple] = useState({ active: false, x: 0, y: 0 });
  const rippleControls = useAnimation();

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ active: true, x, y });
  };

  const handleMouseUp = () => {
    setRipple((prev) => ({ ...prev, active: false }));
  };

  const handleMouseLeave = () => {
    setRipple((prev) => ({ ...prev, active: false }));
  };

  return (
    <ButtonStyled
      {...props}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      size={props.size || "medium"}
    >
      <span>{props.children}</span>
      <AnimatePresence>
        {ripple.active && (
          <motion.span
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 0.1, scale: 50 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              background: "#ffffff61",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              top: ripple.y - 10,
              left: ripple.x - 10,
              pointerEvents: "none",
              opacity: 1,
            }}
          ></motion.span>
        )}
      </AnimatePresence>
    </ButtonStyled>
  );
};
