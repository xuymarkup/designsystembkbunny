import styled, { css } from "styled-components";
import Box from "../../accessories/Box";

const BoxItemStyles = styled(Box)(
    ({ theme }) => css`
        width: ${(props) => (props.width ? props.width : 100)}%;
        top: ${(props) => (props.top ? props.top : 7)}px;
        position: relative;
        margin: 0 6px;
    `,
);

export default BoxItemStyles;
