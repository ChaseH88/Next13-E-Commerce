import styled from "styled-components";

export const AuthLayoutStyled = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .wrapper {
    border: 1px solid ${({ theme }) => theme.colors.palette.black[300]};
  }
`;
