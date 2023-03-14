import { ButtonStyled, ButtonStyledProps } from "./styles";

interface ButtonProps extends ButtonStyledProps {
  text: string;
}

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props}>{props.text}</ButtonStyled>;
};
