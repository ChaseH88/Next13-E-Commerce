import styled from "styled-components";

export interface FormStyledProps {
  width?: `${number | string}%` | `${number | string}px`;
}

export const FormStyled = styled.form<FormStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  margin: 0 auto;
`;

export const FieldSetStyled = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;
