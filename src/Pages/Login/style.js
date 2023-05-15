import styled from "styled-components";

export const StyledSectionLogin = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 19.973581314086914px;
    width: 144.0634765625px;
    margin-bottom: 35px;
  }

  div {
    background-color: var(--color-gray-3);
    box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px
      #00000040;
    height: fit-content;
    width: 20%;
    border-radius: 3.208672046661377px;
    padding: 42px 22px 42px 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 18px;
      font-weight: 700;
      color: #f8f9fa;
      margin-bottom: 15px;
    }
    label {
      font-size: 12px;
      font-weight: 400;
      text-align: left;
      color: #f8f9fa;
      margin-bottom: 15px;
    }
    input {
      margin-bottom: 15px;
    }
    button {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background-color: var(--color-primary);
      border: 1.22px solid var(--color-primary);
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      color: #ffffff;
      margin-top: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      color: #868e96;
      margin-bottom: 12px;
      margin-top: 34px;
    }

    & > a:last-child {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background-color: var(--color-gray-1);
      border: 1.22px solid var(--color-gray-1);
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      color: var(--color-gray-0);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 700px) {
    & > div {
      width: 90%;
    }
  }
`;
