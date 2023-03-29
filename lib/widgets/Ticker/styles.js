import styled, { css } from "styled-components";
import { Box, Button, Text } from "../../accessories";

const TickerStyles = styled.section(
    ({ theme }) => css`
        cursor: pointer;
        width: 100%;
        height: auto;
        max-width: 1024px;
        display: flex;
        align-items: center;
        overflow-x: scroll;
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.base};
        }
    `,
);

const TickerBoxStyles = styled(Box)(
    () => css`
    display:contents;
    }
`,
);

const TickerThumb = styled(Box)(
    () => css`
        width: 100%;
        height: 100%;
        display: flex;
    `,
);

const TickerButtonContainer = styled(Box)(
    ({ theme }) => css`
    width: auto;
    text-align: center;
    margin: ${theme.space.zero} ${theme.space.sm};
    `,
);

const TickerButtonStyles = styled(Button)(
    ({ theme }) => css`
        align-items: center;
        border-radius: 100%;
        min-width: 55px;
        overflow: hidden;
        margin: ${theme.space.md} ${theme.space.zero};
        height: 55px;
        width: 55px;
        border: solid 2px ${theme.colors.Interaction};
        display: flex;
        justify-content: center;
    `,
);

const TextButton = styled(Text)(
    ({ theme }) => css`
    color: ${theme.colors.Dark};
    font-size: ${theme.fontSizes.fxs};
    font-weight: normal;
    font-family: ${theme.fonts[3]};
    `,
);

export { 
    TickerStyles, 
    TickerThumb, 
    TickerBoxStyles,
    TickerButtonContainer, 
    TickerButtonStyles,
    TextButton,
};
