import styled from "styled-components";

export const StyledCard = styled.li`
  height: 49px;
  width: 100%;
  border-radius: 4px;
  background-color: var(--color-gray-4);
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  & > button:first-child {
    background-color: var(--color-gray-4);
    border: none;
    margin-left: 22px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    width: 36%;
    display: flex;
    height: 100%;
    align-items: center;
  }
  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 75%;

    span {
      font-size: 12px;
      font-weight: 400;
      color: var(--color-gray-1);
    }
    button {
      border: none;
      background-color: var(--color-gray-4);
      margin-left: 25px;
    }
  }
`;
