import { BoxStyled, BoxStyledProps } from "./styles";

type BoxProps = BoxStyledProps & {
  className?: string;
  children?: React.ReactNode;
};

const Box: React.FC<BoxProps> = ({ children, className, ...props }) => (
  <BoxStyled className={className} {...props}>
    {children}
  </BoxStyled>
);

export { Box };
