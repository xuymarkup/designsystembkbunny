import styled, { css } from "styled-components";
import Ads from "../../accessories/Ads";
import Box from "../../accessories/Box";

const MatchBody = styled.body(
    ({ theme }) => css`
        background: ${theme.colors.matchback};
        width: 100%;
        }
    `,
);

const PageStyles = styled.section(
    ({ theme }) => css`
        display: block;
        padding-top: ${theme.space.md};
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 1280px;
            margin: ${theme.space.auto};
            padding-top: ${theme.space.zero};
        }
    `,
);

const MatchGrid = styled.section(
    ({ theme }) => css`
        display: block;
        width: 100%;
        @media (min-width: ${theme.breakpoints.lg}) {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(12, auto);
            column-gap: 1%;
            justify-content: center;
            margin: ${theme.space.auto};
            max-width: 1280px;
            position: relative;
            width: 100%;
        }
    `,
);

const MatchHeaderBox= styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 1 / 2 / 2 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const PlayerBox= styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 2 / 2 / 3 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const TimelineBox= styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 3 / 2 / 4 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const AdsMatchStyles = styled(Ads)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 4 / 2 / 5 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const CommentaryBox = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 5 / 2 / 7 / 7;
            height: auto;
            width: 100%;
        }
    `,
);

const LineUpBox = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 5 / 7 / 6 / 12;
        }
    `,
);

const VersusBox = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 6 / 7 / 7 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const AdsMatchStylesBox = styled(Ads)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 7 / 2 / 8 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const StandingBox = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 8 / 2 / 9 / 7;
            height: auto;
            width: 100%;
        }
    `,
);

const CalendarBox = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 8 / 7 / 9 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const AdsImageStyles = styled.img(
    ({ theme }) => css`
        display: flex;
        width: 80%;
        margin: ${theme.space.xl} auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50%;
            height: 50px;
        }
    `,
);

export {
    PageStyles,
    MatchGrid,
    PlayerBox,
    MatchHeaderBox,
    LineUpBox,
    CommentaryBox,
    CalendarBox,
    StandingBox,
    VersusBox,
    AdsMatchStyles,
    TimelineBox,
    AdsImageStyles,
    AdsMatchStylesBox,
    MatchBody,
};
