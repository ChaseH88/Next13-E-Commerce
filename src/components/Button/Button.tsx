import { MutableRefObject, useState, MouseEvent, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonStyled, ButtonStyledProps } from "./styles";

type ButtonProps = ButtonStyledProps & {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  ref?: MutableRefObject<HTMLButtonElement | null>;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "contained", color = "primary", ...props }, ref) => {
    return (
      <ButtonStyled ref={ref} {...props} variant={variant} color={color}>
        {props.children}
      </ButtonStyled>
    );
  }
);
