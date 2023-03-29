import styled, { keyframes } from "styled-components";
import BaseAnimation from "./baseanimation";

export const FadeOutLeftBigAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;

const FadeOutLeftBig = styled(BaseAnimation)`
    animation-name: ${FadeOutLeftBigAnimation};
`;

export default FadeOutLeftBig;
