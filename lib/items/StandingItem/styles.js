import styled, { css } from "styled-components";
import {
    Box, Text, Image, Info,
} from "../../accessories";

const StandingItemStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 10px 0px 0px 10px;
        width: 45%;
        height: 100%;
        padding: ${theme.space.zero};
        background: rgba(0, 0, 0, .5);
        border-left: 1px solid ${theme.colors.Interaction};
        border-bottom: 1px solid ${theme.colors.Interaction};
        margin-bottom: ${theme.space.base};
        @media (min-width: ${theme.breakpoints.md}), (max-width: ${theme.breakpoints.xl}){

            width: 45%;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 35%;

        }
    `,
);

const StandingItemTeam = styled(Info)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        min-height: 50px;
        width: 300px;
        z-index: 1;

        @media (min-width: ${theme.breakpoints.xl}) {
            position: relative;
            width: 100%;
            min-height: 45px;
            padding-left: ${theme.space.base};

        }
    `,
);

const StandingItemName = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        font-weight: bold;
        padding-left: ${theme.space.xs};
        margin-left: ${theme.space.base};
        color: ${theme.colors.Light};
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {

            font-size: ${theme.fontSizes.fsm};
        }

    `,
);

const StandingItemLogo = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 24px;
        background: ${theme.colors.Light};
        max-width: 24px;
        overflow: hidden;
        margin-left:${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 24px;
            max-width: 24px;
        }
    `,
);

const StandingItemPosition = styled(Info)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 50px;
        font-family: ${theme.fonts[2]};
        font-weight: bold;
        font-size: ${theme.fontSizes.fsm};
        width: 30px;
        justify-content: center;
        color: ${theme.colors.Light};

    `,
);

const StandingItemBoxTop = styled(Box)(
    ({ theme }) => css`
    border-radius: 10px 0px 0px 0px;
        background: ${theme.colors.Interaction};
        display: flex;
        width: auto;
        height: 40px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 40px;
            width: auto;


        }
    `,
);

const StandingItemTopTeam = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        color:${theme.colors.Light};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        font-family: ${theme.fonts[2]};
        height: 40px;
        margin-left: ${theme.space.base};
        width: auto;
        left: 0px;
        z-index: 1;
        background: ${theme.colors.Interaction};
        min-width: 145px;

        @media (min-width: ${theme.breakpoints.lg}) {
            position: relative;
            height: 40px;
            font-size: ${theme.fontSizes.fsm};
            width: 450px;
        }
    `,
);
const ImageStanding = styled(Image)(
    ({ theme }) => css`
        border-radius: 100%;
        background: ${theme.colors.Light};

    `,
);


export {
    StandingItemStyles,
    StandingItemTeam,
    StandingItemLogo,
    StandingItemName,
    StandingItemPosition,
    StandingItemTopTeam,
    StandingItemBoxTop,
    ImageStanding,
};
