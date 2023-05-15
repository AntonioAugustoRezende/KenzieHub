import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background: var(--color-opacity);
  animation: animateModal 2s;
`;

export const StyledBoxModal = styled.div`
  background: var(--color-gray-3);
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 4px 40px -10px #00000040;
  height: 40%;
  top: 189px;
  border-radius: 4px;
  @media (max-width: 700px) {
    width: 90%;
    height: 45%;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    background-color: var(--color-gray-2);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    margin-bottom: 15px;
    height: 50px;

    h2 {
      font-size: 14px;
      font-weight: 700;
      color: var(--color-gray-0);
      margin-left: 20px;
    }
    button {
      background: none;
      border: none;
      margin-right: 12px;
      color: var(--color-gray-1);
      width: 20px;
      height: 20px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    label {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      color: var(--color-gray-0);
      margin-bottom: 20px;
    }
    input {
      height: 48px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      width: 97%;
      color: var(--color-gray-0);
      background-color: var(--color-gray-2);
      border: none;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      margin-bottom: 20px;
    }
    input:focus {
      border: 1.22px solid var(--color-gray-0);
      color: var(--color-gray-0);
    }
    select {
      height: 48px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      width: 97%;
      color: var(--color-gray-0);
      background-color: var(--color-gray-2);
      border: none;
      font-size: 16px;
      font-weight: 400;
      text-align: left;
      margin-bottom: 20px;
    }
    button {
      height: 48px;
      width: 97%;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background-color: var(--color-primary);
      border: 1.22px solid var(--color-primary);
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
    }
  }
  @keyframes animateModal {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
