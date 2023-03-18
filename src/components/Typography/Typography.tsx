import { CSSProperties, ReactNode } from "react";
import { TypographyStyled, TypographyStyledProps } from "./styles";

interface TypographyProps extends TypographyStyledProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

const Typography = ({ children, style = {}, ...props }: TypographyProps) => (
  <TypographyStyled {...props} style={style}>
    {children}
  </TypographyStyled>
);

export { Typography };
