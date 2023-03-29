import styled, { css } from "styled-components";

const CounterStyles = ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes.sm};
`;

const Counter = styled("time")(CounterStyles);

export default Counter;
