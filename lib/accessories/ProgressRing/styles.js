import styled, { css } from "styled-components";

const SvgCircle = styled.svg(
    () => css`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-90deg);
    `,
);

export default SvgCircle;
