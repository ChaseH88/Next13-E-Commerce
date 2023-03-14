import { InputStyled } from "./styles";

interface InputProps {}

export const Input = (_: InputProps) => {
  return <InputStyled value={"Testing@test.com"} />;
};
