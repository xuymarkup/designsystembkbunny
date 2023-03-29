import styled, { css } from "styled-components";

const MulticontentStyles = styled.div(
    ({ theme }) => css`
        max-width: 1440px;
        margin: ${theme.space.auto};
        position: relative;
        width: 100%;
    `,
);

const MulticontentTrack = styled.div(
    ({ theme }) => css`
        display: flex;
        height: 100%;
        max-width: 1440px;
        overflow: hidden;
        margin: ${theme.space.auto};
    `,
);

const MulticontentThumbnails = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.space.auto};
        overflow-y: hidden;
        overflow-x: hidden;
        max-width: 1440px;

        @media (max-width: ${theme.breakpoints.xl}) {
            width: 100%;
            overflow-y: hidden;
            overflow-x: scroll;
        }

        @media (max-width: ${theme.breakpoints.md}) {
            width: 100%;
            overflow-y: hidden;
            overflow-x: scroll;
        }
    `,
);

export { MulticontentStyles, MulticontentTrack, MulticontentThumbnails };
