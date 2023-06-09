import { useClassNames } from "hooks/useClassNames";
import { FormStyled, FieldSetStyled, FormStyledProps } from "./styles";

interface FormProps extends FormStyledProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  isSubmitting?: boolean;
}

export const Form = ({
  children,
  isSubmitting = false,
  className,
  ...props
}: FormProps) => {
  const classNames = useClassNames("form", {
    submitting: isSubmitting,
    ...(className && { [className]: true }),
  });
  return (
    <FormStyled
      className={classNames}
      {...props}
      onSubmit={(e) => e.preventDefault()}
    >
      <FieldSetStyled disabled={isSubmitting}>{children}</FieldSetStyled>
    </FormStyled>
  );
};
