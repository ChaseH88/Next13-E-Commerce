import React from "react";
import { TypographyStyled, TypographyStyledProps } from "./styles";

interface TypographyProps extends TypographyStyledProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Typography = ({ children, ...props }: TypographyProps) => (
  <TypographyStyled {...props}>{children}</TypographyStyled>
);

export { Typography };
