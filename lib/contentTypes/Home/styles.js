import styled, { css } from "styled-components";
import Ads from "../../accessories/Ads";
import Box from "../../accessories/Box";

const PageStyles = styled.section(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 1280px;
            margin: ${theme.space.xl} ${theme.space.auto};
        }
    `,
);

const AdsHomeStyles = styled(Ads)(
    ({ theme }) => css`
        display: block;
        background: ${theme.colors.Light};
        max-width: 1024px;
        margin: ${theme.space.xxl} ${theme.space.auto};
        padding: ${theme.space.sm} ${theme.space.zero};
        border-radius: 10px;

        @media (min-width: ${theme.breakpoints.lg}) {
            grid-area: 6 / 2 / 7 / 12;
            height: auto;
            width: 100%;
        }
    `,
);

const AdsImageStyles = styled.img(
    ({ theme }) => css`
        display: flex;
        width: 320px;
        height: 320px;
        margin: ${theme.space.xl} auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 720px;
            height: 90px;
        }
    `,
);

const WidgetBox = styled(Box) (
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.xxl} auto;
    `,
);

export {
    PageStyles,
    AdsHomeStyles,
    AdsImageStyles,
    WidgetBox,
};
