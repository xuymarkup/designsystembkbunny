import styled, { css } from "styled-components";
import { Text, Box, Anchor, Button, Image } from "../../accessories";

const MatchLiveItemStyles = styled(Box)(
    ({ theme }) => css`
        display: inline-flex;
        height: 48px;
        width: auto;
        max-width: 164px;
        position: relative;
        grid-area: news;
        align-items: center;
        border-radius: 10px;
        background: ${theme.colors.Dark};

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 212px;
            height: 54px;
        }
    `,
);

const MatchLiveIconBox = styled(Box)(
    ({ theme }) => css`
        width: 48px;
        height: 48px;
        background: ${theme.colors.text};
        border-radius: 10px;
        padding: ${theme.space.xs};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 53px;
            height: 54px;
        }
    `,
);

const MatchLiveItemBoxImage = styled(Box)(
    ({ theme }) => css`
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 58px;
            height: 58px;
        }
    `,
);

const MatchLiveItemBox = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        width: 114px;
        align-items: center;
        padding: ${theme.space.md};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 141px;
        }
    `,
);

const MatchLiveItemBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: 20px;
        width: 35px;
        overflow: hidden;
        display: flex;
        margin: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 21px;
            width: 69px;
            margin: ${theme.space.sm};
        }
    `,
);

const MatchLiveItemTitleStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        height: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        font-weight: bold;
        font-family: ${theme.fonts[0]};
        color: ${theme.colors.Light};
        display: flex;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl};
        }
    `,
);

const TeamItemImage = styled(Image)(
    ({ theme }) => css`
        width: 100%;
        max-width: 25px;
        height: 25px;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 34px;
            height: 34px;
        }
    `,
);

const MatchliveItemIcon = styled(Button)(
    () => css`
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        background: transparent;
        width: 100%;
        justify-content: center;
        align-items: center;
        height: 100%;
    `,
);

export {
    MatchLiveItemStyles,
    MatchLiveItemBoxStyles,
    MatchLiveItemTitleStyles,
    TeamItemImage,
    MatchliveItemIcon,
    MatchLiveItemBox,
    MatchLiveIconBox,
    MatchLiveItemBoxImage,
};
