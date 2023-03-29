import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const AlertStyles = styled(Box)(
    ({ theme }) => css`
        position: fixed;
        border-radius: 15px;
        flex-wrap: wrap;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: ${theme.space.base};
        background: ${theme.colors.modal};
        max-width: ${props => (props.maxw ? props.maxw : "320px")};
        min-height: ${props => (props.minh ? props.minh : "100px")};
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
        z-index: 99;
        color: ${theme.colors.gray};
    `,
);

export { AlertStyles };
