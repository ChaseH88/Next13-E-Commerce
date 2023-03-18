import styled, { css } from "styled-components";

export const TopBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  background-color: ${({ theme }) => theme.colors.palette.black[100]};
  z-index: 1001;

  & > .container {
    max-width: ${({ theme }) => theme.container.large};
    margin: 0 auto;
  }
`;
