import styled, { css } from "styled-components";
import { Box, Text } from "../../accessories";

const BoxNotification = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        border-radius: 10px;
        width: 300px;
        padding: ${theme.space.xl};

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 360px;
        }
    `,
);

const TextNotification = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fsm};
        font-family: ${theme.fonts[0]};
        line-height: ${theme.lineHeights.lmd};
        margin: ${theme.space.lg} ${theme.space.xs} ${theme.space.lg} ${theme.space.xs};
    `,
);

export { BoxNotification, TextNotification };
