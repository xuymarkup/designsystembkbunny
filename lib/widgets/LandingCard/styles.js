import styled, { css } from "styled-components";
import { Box, Title } from "../../accessories";

const LandingCardStyles = styled(Box)(
    ({ theme }) => css`
        width: 90%;
        min-width: 324px;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 1024px;
        }
    `,
);

const LandingCardTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        font-weight: ${theme.fontWeights.normal};
        line-height: ${theme.lineHeights.lmd};
        color: ${theme.colors.Secondary};
        font-family: ${theme.fonts[1]};
        margin-bottom: ${theme.space.base};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin-bottom: ${theme.space.xxl};
        }
    `,
);

export { LandingCardStyles, LandingCardTitle };
