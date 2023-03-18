import { CSSProperties, ReactNode } from "react";
import { TypographyStyled, TypographyStyledProps } from "./styles";

interface TypographyProps extends TypographyStyledProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
  ref?: React.RefObject<HTMLParagraphElement>;
}

const Typography = ({
  children,
  ref,
  style = {},
  ...props
}: TypographyProps) => (
  <TypographyStyled ref={ref} {...props} style={style}>
    {children}
  </TypographyStyled>
);

export { Typography };
