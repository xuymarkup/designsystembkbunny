import styled, { css } from "styled-components";
import {
    Title, Box, Button, Text, Info,
} from "../../accessories";

const SquadStyles = styled.section(
    ({ theme }) => css`
        height: 390px;
        margin: ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.base};
        border-radius: 15px;
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.lg}) {
            height: 650px;
            padding: ${theme.space.zero};
    }
    `,
);

const SquadBoxScroll = styled(Box)(
    ({ theme }) => css`
    overflow-y: scroll;
    height: 350px;
    border-radius: 0px 0px 15px 15px;

    @media (min-width: ${theme.breakpoints.lg}) {
        height: 650px;
        }
    `,
);

const SquadBoxButtons = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        cursor: pointer;
        height: 40px;
        border-radius: 15px 15px 0px 0px;
    `,
);

const SquadBoxButtonActive = styled(Box)(
    ({ theme }) => css`
        border-bottom: 3px solid #04a06f;
        display:flex;
        justify-content:center;
        background: none;
        height: 40px;
    `,
);

const SquadBoxButtonInactive = styled(SquadBoxButtonActive)(
    ({ theme }) => css`
        border-bottom: none;
        background: none;
        display:flex;
        justify-content:center;
        
    `,
);

const SquadBoxSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        padding: ${theme.space.sm} ${theme.space.sm};
        background:${theme.colors.gray2};

        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.sm} ${theme.space.md};
        }
    `,
);

const SquadTitle = styled(Info)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        text-transform: uppercase;
        font-family: ${theme.fonts[2]};
        font-weight: bold;
        color: ${theme.colors.gray3};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);



const ButtonActive = styled(Button)(
    ({ theme }) => css`
        font-weight: bold;
        color: ${theme.colors.Light};
        background: none;

    `,
);

const ButtonInactive = styled(ButtonActive)(
    ({ theme }) => css`
        
    `,
);

const TitleSquad = styled(Title)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fxl};
    color: ${theme.colors.Light};
    font-family: ${theme.fonts[2]};
    font-weight: normal;
    margin-top: ${theme.space.xxl};
    margin-bottom: ${theme.space.sm};
    margin-left: ${theme.space.md};
    `,
);

export {
    SquadStyles,
    SquadBoxSection,
    SquadBoxScroll,
    SquadTitle,
    SquadBoxButtonActive,
    SquadBoxButtonInactive,
    SquadBoxButtons,
    ButtonActive,
    ButtonInactive,
    TitleSquad,
};
