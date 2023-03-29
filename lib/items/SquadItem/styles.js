import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Info from "../../accessories/Info";
import Text from "../../accessories/Text";

const SquadItemStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        display: flex;
        width: 100%;
        background: ${theme.colors.Light};
        margin: ${theme.space.sm} ${theme.space.zero};
        height: 35px;
    `,
);

const SquadNumberBox = styled(Box)(
    () => css`
        display: flex;
        width: 10%;
    `,
);

const SquadTitleBox = styled(Box)(
    ({ theme }) => css`
        width: auto;
        min-width: 30px;
        align-items: center;
        display: flex;
        margin: ${theme.space.zero} ${theme.space.lg} ${theme.space.zero} ${theme.space.zero};
    `,
);

const SquadNationBox = styled(Box)(
    () => css`
        width: 60%;
        align-items: center;
        display: flex;
        height: 45px;
        justify-content: center;
    `,
);

const SquadNumberStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fxs};
        width: 35px;
        height: 35px;
        font-family: ${theme.fonts[2]};
        font-weight: bold;

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
    }
    `,
);

const SquadNationStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
    `,
);

const SquadTitleStyles = styled(Info)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        font-weight: normal;
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fxs};

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
    }
    `,
);

export {
    SquadItemStyles,
    SquadNumberBox,
    SquadNumberStyles,
    SquadTitleStyles,
    SquadTitleBox,
    SquadNationStyles,
    SquadNationBox,
};
