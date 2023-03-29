import styled, { keyframes } from "styled-components";
import BaseAnimation from "./baseanimation";

export const FlipInYAnimation = keyframes`
  from {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
`;

const FlipInY = styled(BaseAnimation)`
    animation-name: ${FlipInYAnimation};
    backface-visibility: visible !important;
`;

export default FlipInY;