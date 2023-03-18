import { MutableRefObject, useState, MouseEvent, forwardRef } from "react";
import { ButtonStyled, ButtonStyledProps } from "./styles";

type ButtonProps = ButtonStyledProps & {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: () => void;
  ref?: MutableRefObject<HTMLButtonElement | null>;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "contained", color = "primary", ...props }, ref) => {
    return (
      <ButtonStyled ref={ref} {...props} variant={variant} color={color}>
        {props.children}
      </ButtonStyled>
    );
  }
);

Button.displayName = "Button";

export { Button };
