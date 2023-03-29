import styled, { keyframes } from "styled-components";
import BaseAnimation from "./baseanimation";

export const FadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const FadeOut = styled(BaseAnimation)`
    animation-name: ${FadeOutAnimation};
`;

export default FadeOut;
