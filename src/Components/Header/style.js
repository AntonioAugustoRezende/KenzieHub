import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-4);
  height: 15%;
  border-bottom: 1px solid var(--color-gray-3);

  div {
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    a {
      height: 32px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background: #212529;
      font-size: 12px;
      font-weight: 600;
      line-height: 28px;
      text-align: center;
      color: #f8f9fa;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 700px) {
    height: 11vh;
    & > div {
      width: 90%;
    }
  }
`;
