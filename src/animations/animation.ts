import { keyframes, css } from "styled-components";

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
  `;

export const boardAnimation = css`
  .board {
    position: relative;
  }
  .board-enter {
    opacity: 0;
    transform: translateY(30px);
  }

  .board-appear-active {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    transform: translateY(0px);
  }
`;
