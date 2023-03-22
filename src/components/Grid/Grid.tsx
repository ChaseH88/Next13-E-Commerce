import React from "react";
import { GridContainerStyled, GridContainerStyledProps } from "./styles";

interface Props extends GridContainerStyledProps {
  children: React.ReactNode;
}

const Grid = ({
  children,
  spacing = 16,
  columns = "repeat(auto-fit, minmax(200px, 1fr))",
  rows = "auto",
}: Props) => (
  <GridContainerStyled spacing={spacing} columns={columns} rows={rows}>
    {children}
  </GridContainerStyled>
);

export { Grid };
