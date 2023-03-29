import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Time from "../../accessories/Time";

const ItemCarouselStyles = styled.a(
    ({ theme }) => css`
        display: block;
        height: 100%;
        margin: ${theme.space.auto};
        box-shadow: ${props => (props.shadow ? "#D6D6D6 2px 2px 6px" : "")};
        width: 209px;
        position: relative;

        &:hover {
            opacity: 0.7;
        }
    `,
);

const ItemCarouselBoxStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        border-radius: 0px 0px 3px 3px;
        min-height: 178px;
        padding-left: ${theme.space.md};
        padding-right: ${theme.space.md};
        padding-top: ${theme.space.base};
        padding-bottom: ${theme.space.base};
        position: relative;
    `,
);

const ItemCarouselTextStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.darkfooter};
        font-size: ${theme.fontSizes.fmd};
        line-height: ${theme.lineHeights.lmd};
        font-family: ${theme.fonts[2]};
        max-height: 90px;
        overflow: hidden;
    `,
);

const ItemCarouselSection = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lmd};
        font-family: ${theme.fonts[3]};
        text-transform: uppercase;
        font-weight: 700;
        height: 40px;
        letter-spacing: 1px;
        overflow: hidden;
    `,
);

const ItemCarouselTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.darkfooter};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[3]};
        font-weight: ${theme.fontWeights.normal};
        position: absolute;
        display: block;
        right: 10px;
        bottom: 14px;
    `,
);

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
    ItemCarouselStyles,
    ItemCarouselBoxStyles,
    ItemCarouselTextStyles,
    ItemCarouselTimeStyles,
    SkeletonItemCarouselCaption,
    SkeletonItemCarouselImage,
    ItemCarouselSection,
};
