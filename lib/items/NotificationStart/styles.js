import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const NotificationStartItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        position: absolute;
        z-index: 2;
        top: 0;

        @media (min-width: ${theme.breakpoints.lg}) {
            right: 0;
            top: 5%
        }
    `,
);

const BoxNotification = styled(Box)(
    ({ theme }) => css`
        background: rgba(0, 0, 0, .8);
        border-radius: 5px;
        max-width: 326px;
        padding: ${theme.space.base} ${theme.space.lg};
        max-height: 72px;
        margin: auto;
        @media (min-width: ${theme.breakpoints.lg}) {
            margin-right: 0px;
        }
    `,
);

const TextNotification = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fsm};
        font-family: ${theme.fonts[0]};
        line-height: ${theme.lineHeights.lmd};
        margin-left: ${theme.space.base};
        max-height: 36px;
        overflow: hidden;
    `,
);

const ItemTeamImage = styled.img(
    ({ theme }) => css`
        width: 48px;
        height: auto;
        border-radius: 5px;
    `,
);

export { NotificationStartItemStyles, BoxNotification, TextNotification, ItemTeamImage};
