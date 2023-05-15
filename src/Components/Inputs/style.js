import styled from "styled-components";

export const StyledInputs = styled.input`
  height: 48px;
  width: 100%;
  border-radius: 4px;
  padding: 0px 16px 0px 16px;
  background: #343b41;
  border: 1.22px solid #343b41;
  margin-bottom: 10px;
  color: white;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
  }
`;

export const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: #f8f9fa;
  margin-bottom: 10px;
`;
export const StyledSpanError = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: var(--color-negative);
  margin-bottom: 10px;
`;
