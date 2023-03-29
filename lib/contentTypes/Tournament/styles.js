import styled, { css } from "styled-components";
import { Box, Title } from "../../accessories";

const AdsImageStyles = styled(Box)(
    ({ theme }) => css`
        width: 300px;
        height:250px;
        background: #ccc;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 729px;
            height:90px;
    }
    `,
);

const BoxEvent = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.base} ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.xxl} ${theme.space.auto};
            width: auto;
        }
    `,
);

const BoxHighImpact = styled(BoxEvent)(
    ({ theme }) => css`
        max-width: 324px;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
    }
    `,
);

const  TitleHighImpact = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Secondary};
        margin: ${theme.space.base} ${theme.space.zero};
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxxl};
            
    }
    `,
);

export {
    AdsImageStyles,
    BoxEvent,
    BoxHighImpact,
    TitleHighImpact,
};