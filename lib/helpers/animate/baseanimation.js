import styled, { css } from "styled-components";

const animation = () => css`
    animation-duration: ${props => props.duration};
    animation-timing-function: ${props => props.timingFunction};
    animation-delay: ${props => props.delay};
    animation-iteration-count: ${props => props.iterationCount};
    animation-direction: ${props => props.direction};
    animation-fill-mode: ${props => props.fillMode};
    animation-play-state: ${props => props.playState};
    display: ${props => props.display};
`;

const BaseAnimation = styled.div(animation);

export default BaseAnimation;
