import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Anchor from "../../accessories/Anchor";

const PageStyles = styled.section(
    ({ theme }) => css`
        display: block;
        background: #F4F3F2;

        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 1280px;
            margin: ${theme.space.zero} ${theme.space.auto};
        }
    `,
);

const MatchGrid = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        @media (min-width: ${theme.breakpoints.lg}) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(12, auto);
            column-gap: 1%;
            justify-content: center;
            margin: ${theme.space.zero} ${theme.space.auto};
            max-width: 1280px;
            position: relative;
            width: 100%;
        }
    `,
);

export { PageStyles,MatchGrid };
