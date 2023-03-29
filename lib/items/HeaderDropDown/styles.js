import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const HeaderDropDownStyles = styled(Box)(
    ({ theme }) => css`
        background: transparent;
        width: 100%;
        height: 100%;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: ${props => (props.active ? "block" : "none")};
            position: absolute;
            max-width: 348px;
            max-height: 400px;
            top: 60px;
            z-index: 99;
        }
    `,
);

const ResponsiveBox = styled(Box)(
    ({ theme }) => css`
        display: none;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
        }
    `,
);

export { HeaderDropDownStyles, ResponsiveBox };
