import { MotionStyle } from "framer-motion";
import { ButtonStyled, ButtonStyledProps } from "./styles";

interface ButtonProps extends ButtonStyledProps {
  text: string;
  className?: string;
  id?: string;
  style?: MotionStyle;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled style={props.style} {...props}>
      {props.text}
    </ButtonStyled>
  );
};
