import styled, { css } from "styled-components";
import { Text, Image, Box, Title, Anchor } from "../../accessories";

const NewsItemStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        height: 87px;
        width: 324px;
        position: relative;
        grid-area: news;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.md};
        align-items: center;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 80px;
            margin: ${theme.space.base} ${theme.space.zero};
            align-items: flex-start;
        }

        &:first-child {
            @media (min-width: ${theme.breakpoints.xl}) {
                margin: ${theme.space.zero};
            }
        }

        &:last-child {
            &::after {
                background: none;
            }
        }
    `,
);

const NewsItemBoxStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        height: 87px;
        width: 87px;
        overflow: hidden;
        border-radius: 10px 0px 0px 10px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 83px;
            width: 83px;
        }
    `,
);

const NewsItemImageStyles = styled(Image)(
    ({}) => css`
        border-radius: 0px 10px 0px 10px;
    `,
);

const NewsItemCaption = styled(Box)(
    ({ theme }) => css`
        width: 237px;
        height: 87px;
        padding: ${theme.space.md};
        background: ${theme.colors.Light};
        border-radius: 0px 10px 10px 0px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 83px;
            width: 252px;
            align-items: center;
            display: flex;
        }
    `,
);

const NewsItemTitleStyles = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        height: auto;
        max-height: 100px;
        line-height: ${theme.lineHeights.lmd};
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        padding: ${theme.space.zero} ${theme.space.md};
        font-weight: 400;
        font-family: ${theme.fonts[0]};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lbase};
        }
    `,
);

const NewsItemLabelStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        padding: ${theme.space.xs} ${theme.space.md} ${theme.space.xs} ${theme.space.zero};
        font-weight: bold;
        font-size: ${theme.fontSizes.fxs};
    `,
);

const NewsItemBoxLabel = styled(Box)(
    ({ theme }) => css`
        position: absolute;
        bottom: 8%;
        width: auto;
        min-width: 50px;
        justify-content: center;
        height: 22px;
        align-items: center;
        z-index: 2;
        left: 0;
        background: ${theme.colors.Interaction};
        min-height: 25px;
        display: flex;
        border-radius: 0px 5px 5px 0px;

        @media (min-width: ${theme.breakpoints.xl}) {
            bottom: 12%;
        }
    `,
);

export {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemBoxLabel,
    NewsItemCaption,
};
