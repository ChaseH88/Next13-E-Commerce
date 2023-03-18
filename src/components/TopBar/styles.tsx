import styled, { css } from "styled-components";

export const TopBarStyled = styled.header`
  font-size: 14px; // simple way to control the size
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  background-color: ${({ theme }) => theme.colors.palette.black[100]};
  padding: 0.2em 0;
  z-index: 1001;

  & > .container {
    max-width: ${({ theme }) => theme.container.large};
    margin: 0 auto;
  }
`;
