import { BoxStyled, BoxStyledProps } from "./styles";

type BoxProps = BoxStyledProps & {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
};

const Box = ({ children, ref, className, style, ...props }: BoxProps) => (
  <BoxStyled ref={ref} className={className} {...props} style={style}>
    {children}
  </BoxStyled>
);

export { Box };
