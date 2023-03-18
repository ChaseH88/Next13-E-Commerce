import styled, { css } from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing[5]} 0;

  & > .container {
    max-width: ${(props) => props.theme.container.large};
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
`;
