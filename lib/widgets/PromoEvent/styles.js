import styled, { css } from "styled-components";
import { Box,Button} from "../../accessories";

const PromoEventStyles = styled(Box)(
    ({ theme }) => css`
        width: 90%;
        min-width: 324px;
        height: 137px;
        border-radius: 10px;
        margin: ${theme.space.auto};
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 1024px;
            height: 435px;
        }
    `,
);

const PromoEventBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        min-width: 324px;
        height: 137px;
        border-radius: 10px;
        overflow: hidden;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 1024px;
            height: 435px;
        }    
    `,
);

const PromoEventIcon = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        fill: ${theme.colors.Ligth};
        background: transparent;
        width: 50px;
        height: 50px;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 60px;
            height: 60px;
        }
    `,
);

const PromoEventButton = styled(Button)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.Light};
        justify-content: center;
        border-radius: 10px;
        margin-bottom: ${theme.space.md};
        margin-right: ${theme.space.base};
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 3;
        width: 75px;
        height: 27px;
        font-family: ${theme.fonts[0]};
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 120px;
            height: 35px;
            margin-bottom: ${theme.space.xl};
            margin-right: ${theme.space.xl};
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

export {
    PromoEventStyles,
    PromoEventBox,
    PromoEventIcon,
    PromoEventButton,
};
