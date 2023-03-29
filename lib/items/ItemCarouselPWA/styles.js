import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";

const ItemCarouselPWAStyles = styled.a(
    ({ theme }) => css`
        display: block;
        height: 100%;
        margin: ${theme.space.auto};
        width: 258px;
        position: relative;
        &:hover {
            opacity: 0.8;
        }
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 209px;
        }
    `,
);

const ItemCarouselBoxStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 0px 0px 3px 3px;
        min-height: 125px;
        padding-left: ${theme.space.md};
        padding-right: ${theme.space.md};
        padding-top: ${theme.space.base};
        padding-bottom: ${theme.space.base};
        position: relative;
    `,
);

const ItemCarouselTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.dark};
        font-size: ${theme.fontSizes.fbase};
        line-height: ${theme.lineHeights.llg};
        font-family: ${theme.fonts[1]};
        font-weight: 700;
        max-height: 98px;
        overflow: hidden;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lbase};
        }
    `,
);

const ItemCarouselSection = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lmd};
        font-family: ${theme.fonts[2]};
        text-transform: uppercase;
        font-weight: 400;
        height: 40px;
        margin-top: ${theme.space.xs};
        overflow: hidden;
        opacity: 0.6;
    `,
);

const ItemCarouselIconsStyles = styled.div`
    bottom: 10px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    position: absolute;
    display: flex;
    right: 10px;
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
`;

const SkeletonItemCarouselImage = styled.div`
    width: 100%;
    height: 100%;
`;

const SkeletonItemCarouselCaption = styled.div(
    ({ theme }) => css`
        border-radius: 0px 0px 3px 3px;
        background: ${theme.colors.Secondary};
        min-height: 178px;
    `,
);

export {
    ItemCarouselPWAStyles,
    ItemCarouselBoxStyles,
    ItemCarouselTextStyles,
    ItemCarouselIconsStyles,
    SkeletonItemCarouselCaption,
    SkeletonItemCarouselImage,
    ItemCarouselSection,
};
