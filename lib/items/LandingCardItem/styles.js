import styled, { css } from "styled-components";
import { Box, Button, Text, Anchor} from "../../accessories";

const LandingCardItemStyles = styled(Box)(
    ({ theme }) => css`
        width: 100px;
        height: 174px;
        border-radius: 10px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        margin-right: ${theme.space.md};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin-right: ${theme.space.lg};
        }
    `,
);


const LandingCardItemAnchor = styled.a(
    ({ theme }) => css`
        width: 100px;
        height: 174px;
    `,
);


const LandingCardItemBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        min-width: 100px;
        height: 134px;
        border-radius: 10px 10px 0px 0px;
        overflow: hidden;   
    `,
);

const LandingCardIcon = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        background: transparent;
        width: 40px;
        height: 50px;
        justify-content: center;
    `,
);

const LandingCardItemName = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: 40px;
        border-radius: 0px 0px 10px 10px;
        background: ${theme.colors.Light};
        position: absolute;
        display: flex;
    `,
);

const LandingCardItemText = styled(Text)(
    ({ theme }) => css`
        width: 80%;
        font-size: ${theme.fontSizes.fxs};
        font-weight: ${theme.fontWeights.normal};
        color: ${theme.colors.text};
        font-family: ${theme.fonts[0]};
        text-align: center;
        line-height: ${theme.lineHeights.lxs};
        margin: ${theme.space.sm} ${theme.space.auto};
        overflow: hidden;
    `,
);

export {
    LandingCardItemStyles,
    LandingCardItemBox,
    LandingCardIcon,
    LandingCardItemName,
    LandingCardItemText,
    LandingCardItemAnchor
};
