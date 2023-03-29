import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";

import {
    TabsMatchButtonStyles,
    TabsMatchButtonActiveStyles,
} from "../TabsMatch/styles";

const VersusStyles = styled.section(
    ({ theme }) => css`
        max-width: 525px;
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.base};
        border-radius: 10px;
        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.zero};
        }
    `,
);


const VersusFactButton = styled(Box)(
    ({ theme }) => css`
        height: auto;
        width: 100%;
        padding: ${theme.space.base} ${theme.space.zero};
    `,
);

const VersusFact = styled(Box)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        display: block;
        height: auto;
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        font-weight: bold;
        text-align: center;
        background: transparent;
        &::first-letter {
            text-transform: uppercase;
        }
    `,
);

const VersusBoxImage = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 35px;
        max-width: 35px;
        overflow: hidden;

    `,
);

const VersusImageHome = styled(Box)(
    ({ theme }) => css`
        width: 50%;
        justify-content: flex-start;
        padding-left: 0px;
        display: flex;
    `,
);

const VersusImageAway = styled(VersusImageHome)(
    ({ theme }) => css`
        justify-content: flex-end;
        padding-right: 0px;
        padding-left: 0px;
    `,
);

const VersusTabsActive = styled(TabsMatchButtonActiveStyles)(
    ({ theme }) => css`
            font-weight: bold;
            border-bottom: 3px solid ${theme.colors.Light};
            height: 40px;
            border-radius: 0px;
        }
    `,
);

const VersusTabs = styled(TabsMatchButtonStyles)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-weight: 400;
    `,
);

const VersusContainerProgress = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        position: relative;
        margin: ${theme.space.md} ${theme.space.zero};
    `,
);

const ProgressLevel = styled.div(
    ({ theme }) => css`
        height: 35px;
        margin: ${theme.space.zero} ${theme.space.auto};
        width: ${props => (props.width ? props.width : 100)}%;
        position: relative;
        background: ${theme.colors.Interaction};
    `,
);

const LevelTimeBar = styled(Box)(
    ({ theme }) => css`
        background: ${props => (props.strokecolor ? props.strokecolor : theme.colors.darkfooter)};
        height: ${props => (props.stroke ? props.stroke : 4)}px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        width: ${props => (props.progress ? props.progress : 0)}%;
        opacity: 0.4;
    `,
);

const ContainerStats = styled(Box)(
    ({ theme }) => css`
        height:auto;
        position: absolute;
        top: 2px;
        padding: ${theme.space.sm};
    `,
);

const ProgressContainer = styled(Box)(
    ({ theme }) => css`
        height:auto;
        width:auto;
    `,
);

const Numbers = styled(Text)(
    ({ theme }) => css`
        display: flex;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        align-items: center;
        font-family: ${theme.fonts[0]};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const VersusContainerStats = styled(Box)(
    ({ theme }) => css`
        height:auto;
        width:auto;
        padding: ${theme.space.base};
        border: 1px solid ${theme.colors.Interaction};
        border-radius: 0px 0px 5px 5px;
    `,
);

export {
    VersusStyles,
    VersusFactButton,
    VersusFact,
    VersusBoxImage,
    VersusTabsActive,
    VersusTabs,
    VersusImageHome,
    VersusImageAway,
    VersusContainerProgress,
    ProgressLevel,
    LevelTimeBar,
    ContainerStats,
    ProgressContainer,
    Numbers,
    VersusContainerStats,
};
