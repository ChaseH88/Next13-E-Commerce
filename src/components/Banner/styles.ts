import styled from "styled-components";
import { gradient } from "styles/helpers";

export interface BannerStyledProps {}

export const BannerStyled = styled.div<BannerStyledProps>`
  height: 100vh;
  background: ${({ theme: { colors } }) =>
    gradient("to bottom", [
      `${colors.primary} 0%`,
      `${colors.secondary} 100%`,
    ])};
`;
