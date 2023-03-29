import styled, { css } from "styled-components";
import { Box, Button } from "accessories";

const HighImpactContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        height: auto;
        width: 100%;
        padding: ${theme.space.zero};
        align-items: flex-start;

        @media (min-width: ${theme.breakpoints.md}) {
            display: grid;
            grid-template-columns: 1.7fr 0.9fr;
            grid-template-rows: 1fr;
            gap: 18px;
            grid-template-areas: "hero news";
            max-width: 1024px;
            height: 511px;
            margin: ${theme.space.zero} auto;
        }
    `,
);

const NewsStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        min-height: 80px;
        margin-bottom: ${theme.space.md};

        @media (min-width: ${theme.breakpoints.xl}) {
            min-height: 629px;
        }
    `,
);

const BoxPages = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        height: 51px;
        margin: ${theme.space.md} ${theme.space.auto} ${theme.space.zero};
        border-radius: 10px;
        width: 324px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.md} ${theme.space.zero};
        }
    `,
);

const ButtonPages = styled(Button)(
    ({ theme }) => css`
        color: ${theme.colors.text};
        margin: ${theme.space.zero} ${theme.space.md};
        font-size: ${theme.fontSizes.fbase};
        opacity: 0.5;

        &:hover {
            opacity: 1;
        }
    `,
);

const ButtonPagesActive = styled(Button)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.md};
        border-bottom: 2px solid ${theme.colors.Interaction};
        border-radius: unset;
        font-size: ${theme.fontSizes.fbase};
    `,
);

export { HighImpactContainer, NewsStyles, BoxPages, ButtonPages, ButtonPagesActive };
