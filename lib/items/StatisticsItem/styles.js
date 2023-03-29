import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const StatisticsItemStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 0px 10px 10px 0px;
        width: 50%;
        height: 100%;
        display: block;
        overflow-x: scroll;
        border-right: 1px solid ${theme.colors.Interaction};
        border-bottom: 1px solid ${theme.colors.Interaction};
        @media (min-width: ${theme.breakpoints.md}), (max-width: ${theme.breakpoints.xl}){

            width: 55%;
            overflow: hidden;
        }

        @media (min-width: ${theme.breakpoints.xl}) {

            width: auto;
        }

    `,
);

const StatisticsItemNumber = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        height: 50px;
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        width: 45px;
        justify-content: center;
        color: ${theme.colors.Light};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
            height: 50px;
            width: 42px;

        }
    `,
);

const StatisticsBoxSpace = styled(Box)(
    ({ theme }) => css`
        width: 45px;
        background: transparent;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 42px;
            
            }
    `,
);

const StatisticsItemTopTeam = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        height: auto;
        font-family: ${theme.fonts[2]};
        padding: ${theme.space.md};
        width: 45px;
        left: 0px;
        z-index: 1;
        text-transform: uppercase;
        color: ${theme.colors.Light};
        justify-content: center;

        @media (min-width: ${theme.breakpoints.lg}) {
            position: relative;
            font-size: ${theme.fontSizes.fsm};
            width:40px;
            padding: ${theme.space.zero};
        }
    `,
);

const StatisticsItemBoxTop = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 48px;
        height: 40px;
        background:${theme.colors.Interaction};
        @media (min-width: ${theme.breakpoints.lg}) {
            height: 40px;
        }
    `,
);

const BoxInfo = styled(Box)(
    () => css`
        overflow-x: scroll;
    `,
);


export {
    StatisticsItemStyles,
    StatisticsItemNumber,
    StatisticsBoxSpace,
    StatisticsItemTopTeam,
    StatisticsItemBoxTop,
    BoxInfo,
};
