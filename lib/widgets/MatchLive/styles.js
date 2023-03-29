import styled, { css } from "styled-components";
import { Text, Box, Button, Anchor, Image } from "../../accessories";

const MatchLiveStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 75px;
        width: 324px;
        position: relative;
        grid-area: news;
        align-items: center;
        border-radius: 10px;
        background: ${theme.colors.Light};
        justify-content: center;
        padding: ${theme.space.zero} ${theme.space.lg};
        align-items: center;
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.md};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 80px;
            padding: ${theme.space.base};
        }
    `,
);

const MatchLiveBoxStyles = styled(Anchor)(
    ({ theme }) => css`
        position: relative;
        height: 20px;
        width: 60%;
        overflow: hidden;
        display: flex;
        margin: ${theme.space.sm} ${theme.space.xs};
        justify-content: center;
        align-items: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 21px;
            width: 54%;
            margin: ${theme.space.xs};
        }
    `,
);

const MatchLiveBoxScore = styled(Box)(
    ({ theme }) => css`
        width: 40px;
        margin: ${theme.space.zero} ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero} ${theme.space.xs};
        }
    `,
);

const MatchLiveTitleStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        height: auto;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        font-weight: bold;
        font-family: ${theme.fonts[0]};
        color: ${theme.colors.text};
        display: flex;
        justify-content: center;
    `,
);

const MatchLiveTeamStyles = styled(MatchLiveTitleStyles)(
    () => css`
        width: auto;
        text-transform: uppercase;
    `,
);

const MatchLiveButton = styled(Button)(
    ({ theme }) => css`
        padding: ${theme.space.zero} ${theme.space.base};
        margin: ${theme.space.zero};
        font-size: ${theme.fontSizes.fsm};
        width: 80px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 79px;
        }
    `,
);

const TeamImage = styled(Image)(
    ({ theme }) => css`
        width: 35px;
        height: 35px;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 43px;
            height: 43px;
        }
    `,
);

const MatchLiveBoxImage = styled(Box)(
    ({ theme }) => css`
        width: 38px;
        height: 38px;
        display: flex;
        align-items: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 45px;
            height: 45px;
        }
    `,
);

const MatchLiveItemStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        height: 40px;
        width: 124px;
        position: relative;
        grid-area: news;
        padding: ${theme.space.lg};
        align-items: center;
        border-radius: 10px;
        background: ${theme.colors.Dark};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 270px;
            height: 73px;
            padding: ${theme.space.base} ${theme.space.xl};
            align-items: flex-start;
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
            margin: ${theme.space.xl};
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
        text-transform: uppercase;
    `,
);

const TeamItemImage = styled.img(
    ({ theme }) => css`
        width: 100%;
        max-width: 25px;
        height: 25px;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 43px;
            height: 43px;
        }
    `,
);

export {
    MatchLiveStyles,
    MatchLiveBoxStyles,
    MatchLiveTitleStyles,
    TeamImage,
    MatchLiveBoxScore,
    MatchLiveTeamStyles,
    MatchLiveButton,
    MatchLiveItemStyles,
    MatchLiveItemBoxStyles,
    MatchLiveItemTitleStyles,
    TeamItemImage,
    MatchLiveBoxImage,
};
