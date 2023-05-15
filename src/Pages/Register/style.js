import styled from "styled-components";

export const StyledSectionRegister = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > div:first-child {
    margin-top: 25px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;

    img {
      height: 21.211807250976562px;
      width: 122.05999755859375px;
    }
    a {
      height: 40.10990524291992px;
      width: 67.48529052734375px;
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
      align-items: center;
    }
  }
  & > div:last-child {
    background-color: var(--color-gray-3);
    box-shadow: 0px 3.208672046661377px 32.08671951293945px -8.021679878234863px
      #00000040;
    height: fit-content;
    width: 20%;
    border-radius: 3.208672046661377px;
    padding: 34px 18px 34px 18px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h2 {
        font-size: 18px;
        font-weight: 700;
        color: #f8f9fa;
        margin-bottom: 15px;
      }
      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        color: #868e96;
        margin-bottom: 15px;
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    label {
      font-size: 12px;
      font-weight: 400;
      text-align: left;
      color: #f8f9fa;
      margin-bottom: 10px;
    }
    select {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background: #343b41;
      border: 1.22px solid #343b41;
      margin-bottom: 15px;
      color: white;
    }
    button {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background-color: #59323f; /* ${({ errorform }) =>
        errorform === true ? "#59323f" : "red"}; */
      border: 1.22px solid #59323f;
      font-size: 16px;
      font-weight: 500;
      line-height: 26px;
      color: #ffffff;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      color: var(--color-negative);
      margin-bottom: 10px;
    }
  }
  @media (max-width: 700px) {
    & > div:first-child {
      width: 90%;
    }
    & > div:last-child {
      width: 90%;
    }
    form {
      input {
        height: 38px;
      }
      select {
        height: 38px;
      }
      button {
        height: 38px;
      }
    }
  }
`;
