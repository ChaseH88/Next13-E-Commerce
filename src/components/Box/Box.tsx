import { BoxStyled, BoxStyledProps } from "./styles";

type BoxProps = BoxStyledProps & {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Box = ({ children, className, style, ...props }: BoxProps) => (
  <BoxStyled className={className} {...props} style={style}>
    {children}
  </BoxStyled>
);

export { Box };
