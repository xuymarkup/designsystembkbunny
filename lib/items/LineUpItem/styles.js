import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Info from "../../accessories/Info";
import Text from "../../accessories/Text";

const LineUpItemStyles = styled(Box)(
    ({ theme }) => css`
        position: relative;
        display: flex;
        width: 100%;
        background: ${theme.colors.Light};
    `,
);

const NumberBox = styled(Box)(
    ({ theme }) => css`
        width: auto;
    `,
);

const NumberStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
        font-size: ${theme.fontSizes.fxs};
        width: 35px;
        height: 35px;
        font-family: ${theme.fonts[0]};
        font-weight: bold;
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fmd};
    }
    `,
);

const LineUpTitleBox = styled(Box)(
    ({ theme }) => css`
        width: auto;
        min-width: 30px;
        
    `,
);

const NameStyles = styled(Info)(
    ({ theme }) => css`
        display: flex;
        font-weight: normal;
        font-family: ${theme.fonts[2]};
        font-size: ${theme.fontSizes.fxs};
        padding: ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fbase};
    }
    `,
);

const PositionStylesHome = styled(NameStyles)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.gray4}; 
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fsm};
    }
    `,
);

const PositionStylesAway = styled(PositionStylesHome)(
    ({ theme }) => css`
        display: flex;
        justify-content: end;
    `,
);

const Container = styled(Box)(
    ({ theme }) => css`
        display: block;
    `,
);

const ItemContainerHome = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.md} ${theme.space.zero};
    `,
);

const ItemContainerAway = styled(ItemContainerHome)(
    ({ theme }) => css`
        justify-content: flex-end;
    `,
);

export {
    LineUpItemStyles,
    PositionStylesHome,
    PositionStylesAway,
    NameStyles,
    NumberStyles,
    LineUpTitleBox,
    NumberBox,
    Container,
    ItemContainerHome,
    ItemContainerAway,
};
