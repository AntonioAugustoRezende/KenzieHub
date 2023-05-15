import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: var(--color-gray-4);
  height: 85%;

  & > section:first-child {
    border-bottom: 1px solid var(--color-gray-3);
    height: 20%;
    margin-bottom: 32px;

    div {
      width: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;

      h2 {
        font-size: 18px;
        font-weight: 700;
        color: var(--color-gray-0);
      }
      span {
        font-size: 12px;
        font-weight: 600;
        line-height: 18px;
        color: var(--color-gray-1);
      }
    }
  }

  & > section:last-child {
    div {
      width: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      height: 100%;

      h2 {
        font-size: 16px;
        font-weight: 600;
        color: var(--color-gray-0);
        margin-bottom: 23px;
      }
      button {
        color: white;
        background: #212529;
        border: none;
        height: 2rem;
        width: 5%;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  @media (max-width: 700px) {
    height: 89vh;
    & > section:first-child {
      height: 15%;
      div {
        width: 90%;
        flex-direction: column;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        h2 {
          margin-bottom: 10px;
        }
      }
    }
    & > section:last-child {
      div {
        width: 90%;
        button {
          width: 10%;
        }
      }
      ul {
        width: 90%;
        padding: 10px;
        li {
          div {
            span {
              margin-right: 20px;
            }
            button {
              display: none;
            }
          }
        }
      }
    }
  }
`;
