import { InputStyled, InputLabel, InputContainer } from "./styles";
import { UseFormReturn } from "react-hook-form";
import { MotionStyle } from "framer-motion";

interface InputProps {
  formHook?: UseFormReturn;
  formInputName: string;
  label?: string;
  placeholder?: string;
  className?: string;
  id?: string;
  style?: MotionStyle;
  type: "text" | "email" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelColor?: string;
  defaultValue?: string;
}

export const Input = ({
  formHook,
  formInputName,
  label,
  placeholder,
  labelColor = "black",
  ...props
}: InputProps) => {
  const error = formHook?.formState.errors[formInputName];
  return (
    <InputContainer onChange={props.onChange}>
      {label && (
        <InputLabel color={labelColor} htmlFor={props.id}>
          {label}
        </InputLabel>
      )}
      <InputStyled
        placeholder={placeholder}
        defaultValue={props.defaultValue}
        {...formHook?.register(formInputName)}
        {...props}
      />
      {error && <p>{error.message?.toString()}</p>}
    </InputContainer>
  );
};
