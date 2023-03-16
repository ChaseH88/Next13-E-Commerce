import styled, { css } from "styled-components";

const logoStyles = css`
  .logo {
    flex: 0 0 100px;
  }
`;

const menuStyles = css`
  .menu {
    flex: 1 1 auto;
  }
`;

const utilityStyles = css`
  .utility-menu {
    flex: 0 0 20em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2em;
  }
`;

export const HeaderStyled = styled.header`
  display: block;
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing[5]} 0;

  & > .container {
    max-width: ${(props) => props.theme.container.large};
    margin: 0 auto;
    display: flex;
    align-items: center;

    ${logoStyles};
    ${menuStyles};
    ${utilityStyles};
  }
`;
