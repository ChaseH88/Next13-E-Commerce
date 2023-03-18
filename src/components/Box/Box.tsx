import { BoxStyled, BoxStyledProps } from "./styles";

type BoxProps = BoxStyledProps & {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
};

const Box = ({ children, ref, className, style, ...props }: BoxProps) => (
  <BoxStyled ref={ref} className={className} {...props} style={style}>
    {children}
  </BoxStyled>
);

export { Box };
