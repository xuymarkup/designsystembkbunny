import styled, { css } from "styled-components";
import {
    Text, Image, Box, Time,
} from "../../accessories";

const CommentaryStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 576px;
        margin-bottom: ${theme.space.base};
        border: 1px solid ${theme.colors.Interaction};
        border-radius: 5px;
    `,
);

const CommentaryTitleStyles = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        font-weight: ${theme.fontWeights.bold};
        line-height: ${theme.lineHeights.lmd};
        text-align: right;
        color: ${theme.colors.green};
        margin-right: ${theme.space.sm};
        font-family: ${theme.fonts[0]};
    `,
);

const CommentaryPlaceStyles = styled(Image)(
    () => css`
        height: 35px;
        width: 35px;
    `,
);

const CommentaryBoxStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 5px 5px 0px 0px;
        background: rgba(0, 0, 0, 0.2);
        padding: ${theme.space.sm};
        height: 40px;
    `,
);

const CommentaryBoxIcon = styled(Box)(
    () => css`
        display: flex;
        width: 25px;
        height: 25px;
    `,
);

const CommentaryBoxStatus = styled(Box)(
    ({ theme }) => css`
        width: 90px;
        align-items: center;
        justify-content: flex-end;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 80px;
    }
`,
);

const CommentaryBoxImage = styled(Box)(
    () => css`
        display: none;
        width: 43px;
        height: 43px;
        align-items: center;
    `,
);

const CommentaryBoxCaption = styled(Box)(
    ({ theme }) => css`
        border-radius: 0px 0px 5px 5px;
        padding: ${theme.space.base} ${theme.space.xl};
        min-height: 36px;
        background: rgba(0, 0, 0, 0.5);
    `,
);

const CommentaryTextStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        margin-left: ${theme.space.sm};
        width: 100%;

        &::first-letter {
        text-transform: uppercase;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
        }
    `,
);

const CommentaryDescriptionStyles = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[0]};
        line-height: ${theme.lineHeights.lxs};
        color: ${theme.colors.Light};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.llg};
        }
    `,
);

export {
    CommentaryStyles,
    CommentaryTitleStyles,
    CommentaryPlaceStyles,
    CommentaryBoxStyles,
    CommentaryBoxIcon,
    CommentaryBoxImage,
    CommentaryBoxCaption,
    CommentaryTextStyles,
    CommentaryDescriptionStyles,
    CommentaryBoxStatus,
};
