import styled, { css } from "styled-components";

export const HeaderStyled = styled.header<{ scrollPast: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  padding: ${(props) => props.theme.spacing[5]} 0;
  background-color: ${({ scrollPast, theme }) =>
    !scrollPast ? "transparent" : theme.colors.pallette.white[100]};
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;

  & > .container {
    max-width: ${(props) => props.theme.container.large};
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;
