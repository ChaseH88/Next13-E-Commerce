import { ButtonStyled } from "./styles";

interface ButtonProps {
  text: string;
}

export const Button = (props: ButtonProps) => {
  return <ButtonStyled>{props.text}</ButtonStyled>;
};
