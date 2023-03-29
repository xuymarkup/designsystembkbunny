import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const BracketStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        width: 750px;
        height: 1100px;
        overflow-x: scroll;
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xl} ${theme.space.xs};
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: ${theme.breakpoints.md}) {
            overflow-x: hidden;
        }
    `,
);
const BracketGrid = styled(Box)(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(${props => props.cols}, minmax(120px, 1fr));
    `,
);
const BracketCol = styled(Box)(
    ({ theme }) => css`
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        min-height: 900px;
        height: 100%;
        justify-content: space-around;
        padding: ${theme.space.md};
    `,
);
const SponsorBox = styled(Box)(
    ({ theme }) => css`
        width: 100px;
        margin: ${theme.space.zero} ${theme.space.sm} ${theme.space.base};
        background: transparent;
    `,
);
const ImgBox = styled(Box)(
    ({}) => css`
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        z-index: -1;

        &:before {
            content: "";
            position: absolute;
            top: 0px;
            width: 100%;
            height: 150px;
            background: linear-gradient(180deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%);
            z-index: 1;
        }
        &:after {
            content: "";
            position: absolute;
            bottom: 0px;
            width: 100%;
            height: 150px;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 60%);
            z-index: 1;
        }
    `,
);

export { BracketStyles, BracketGrid, BracketCol, ImgBox, SponsorBox };
