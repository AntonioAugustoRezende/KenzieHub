import styled from "styled-components";

export const StyledUl = styled.ul`
  width: 50%;
  margin: 0 auto;
  background-color: #212529;
  padding: 25px;
  margin-top: 20px;
  border-radius: 4px;
  li {
    height: 49px;
    width: 100%;
    border-radius: 4px;
    background-color: var(--color-gray-4);
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    h3 {
      width: 40%;
      margin-left: 22px;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
    }
    & > div:last-child {
      display: flex;
      align-items: center;
      justify-content: end;
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
  }
`;
