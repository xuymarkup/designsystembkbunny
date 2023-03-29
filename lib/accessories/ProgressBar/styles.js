import styled, { css } from "styled-components";
import Box from "../Box";

const Bar = styled.div(
    ({ theme }) => css`
        height: 2px;
        margin: ${theme.space.sm};
        width: ${props => (props.width ? props.width : 100)}%;
        position: relative;
        background: ${theme.colors.gray3};
    `,
);

const TimeBar = styled(Box)(
    ({ theme }) => css`
        background: ${props => (props.strokecolor ? props.strokecolor : theme.colors.Interaction)};
        height: ${props => (props.stroke ? props.stroke : 4)}px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        width: ${props => (props.progress ? props.progress : 0)}%;
    `,
);

export { Bar, TimeBar };
