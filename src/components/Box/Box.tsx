import { BoxStyled, BoxStyledProps } from "./styles";

type BoxProps = BoxStyledProps & {
  className?: string;
  children?: React.ReactNode;
};

const Box = ({ children, className, ...props }: BoxProps) => (
  <BoxStyled className={className} {...props}>
    {children}
  </BoxStyled>
);

export { Box };
