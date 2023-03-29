import styled, { css } from "styled-components";
import { Text } from "../../accessories";

const TextRecovery = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[0]};
        line-height: ${theme.lineHeights.lxs};
        margin: ${theme.space.lg} ${theme.space.xs} ${theme.space.lg} ${theme.space.xs};
    `,
);

const TextTitle = styled(Text)(
    ({ theme }) => css`
        display: block;
        cursor: pointer;
        color: ${theme.colors.gray};
        font-weight: bold;
        text-align: left;
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.xs} ${theme.space.base} ${theme.space.xs} ${theme.space.xs};
    `,
);

export { TextRecovery, TextTitle };
