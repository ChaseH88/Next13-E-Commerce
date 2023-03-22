import React from "react";
import styled from "styled-components";

export interface GridContainerStyledProps {
  spacing?: number;
  columns?: string;
  rows?: string;
}

export const GridContainerStyled = styled.div<GridContainerStyledProps>`
  display: grid;
  grid-gap: ${({ spacing }) => spacing}px;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
`;
