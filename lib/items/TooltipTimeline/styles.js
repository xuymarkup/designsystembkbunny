import styled, { css } from "styled-components";
import { Box, Info, Time, Text } from "../../accessories";

const IconBoxStyles = styled(Box)(
    ({ theme }) => css`
        width: auto;
        position: absolute;
        display: flex;
        left: ${(props) => (props.posX ? props.posX : 0)}%;
        bottom: 0;
        min-height: 25px;
        min-width:: 25px;
        cursor: pointer;
        margin: ${theme.space.md} ${theme.space.zero};
        transform: translateX(-50%);
        z-index: 40;

        &:hover span {
            display: block;
        }
    `,
);
const TimeText = styled(Time)(
    ({ theme }) => css`
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        left: 0px;
        color: ${theme.colors.gray3};
        margin-bottom: ${theme.space.xs};
    `,
);

const InfoName = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        text-align: left;
        margin: ${theme.space.xs};
        color: ${theme.colors.Dark};
        min-width: 75px;
    `,
);

const BoxActions = styled(Box)(
    () => css`
        max-width: 200px;
        min-width: 90px;
    `,
);

const Numberbox = styled(Info)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        margin: ${theme.space.xs};
        color: ${theme.colors.Dark};
    `,
);

export { IconBoxStyles, Numberbox, TimeText, InfoName, BoxActions };
