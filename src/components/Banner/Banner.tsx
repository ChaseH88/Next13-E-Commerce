import { BannerStyled, BannerStyledProps } from "./styles";

type BannerProps = BannerStyledProps & {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Banner = ({ children, className, style, ...props }: BannerProps) => (
  <BannerStyled className={className} {...props} variant="hero" style={style}>
    {children}
  </BannerStyled>
);

export { Banner };
