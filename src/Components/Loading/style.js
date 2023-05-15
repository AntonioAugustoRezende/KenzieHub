import styled from "styled-components";

export const StyledLoading = styled.div`
  background-color: #ffffff21;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  div {
    width: 200px;
    height: 200px;
    border: 10px solid black;
    border-top: 10px solid var(--color-primary-focus);
    border-radius: 50%;
    animation-name: loadingAnimation;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    @keyframes loadingAnimation {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }
`;
