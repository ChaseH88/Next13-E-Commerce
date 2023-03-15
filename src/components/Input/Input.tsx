import { InputStyled } from "./styles";
import { UseFormReturn } from "react-hook-form";
import { MotionStyle } from "framer-motion";

interface InputProps {
  formHook: UseFormReturn;
  formInputName: string;
  placeholder?: string;
  className?: string;
  id?: string;
  style?: MotionStyle;
  type: "text" | "email" | "password";
}

export const Input = ({
  formHook,
  formInputName,
  placeholder,
  ...props
}: InputProps) => {
  const error = formHook.formState.errors[formInputName];
  console.log(error);
  return (
    <>
      <InputStyled
        placeholder={placeholder}
        {...formHook.register(formInputName)}
        {...props}
      />
      {error && <p>{error.message?.toString()}</p>}
    </>
  );
};
