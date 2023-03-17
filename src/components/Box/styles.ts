import styled from "styled-components";

export interface BoxStyledProps {
  display?: string;
  padding?: string;
  margin?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  flex?: string;
}

export const BoxStyled = styled.div<BoxStyledProps>`
  display: ${({ display }) => display || "block"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  flex-shrink: ${({ flexShrink }) => flexShrink || 1};
  flex-basis: ${({ flexBasis }) => flexBasis || "auto"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  background: ${({ background }) => background || "transparent"};
  border-radius: ${({ borderRadius }) => borderRadius || "0"};
  ${({ flex }) => flex && `flex: ${flex};`}
`;
