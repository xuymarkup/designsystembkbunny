import styled, { css } from "styled-components";
import { Box, Button } from "../../accessories";

const TabsMatchStyles = styled.section(
    ({ theme }) => css`
        justify-content: flex-start;
        overflow-x: scroll;
        margin: ${theme.space.zero};
        overflow-y: hidden;
        max-width: 1440px;
        margin: auto;
        min-height: 40px;
        display: flex;
        width:100%;
        background: ${theme.colors.Interaction};
        border-radius: 10px 10px 0px 0px;

        @media (min-width: ${theme.breakpoints.xl}) {
            overflow-x: scroll;
            justify-content: center;
        }
    `,
);

const TabsMatchBoxStyles = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 40px;
        width: 100%;
        justify-content: flex-start;

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: center;
        }
    `,
);

const TabsMatchContainerStyles = styled(TabsMatchBoxStyles)(
    ({ theme }) => css`
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.zero};
            justify-content: flex-start;
        }
    `,
);

const TabsMatchButtonStyles = styled(Button)(
    ({ theme }) => css`
        cursor: pointer;
        font-family: ${theme.fonts[2]};
        justify-content: center;
        color:  ${theme.colors.Light};
        width: auto;
        min-width: 131px;
        font-size: ${theme.fontSizes.fxs};
        font-weight: bold;
        min-height: 27px;
        align-items: center;
        padding: ${theme.space.sm};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lsm};
        border-color: ${props => (props.color ? theme.colors[props.color] : theme.colors.gray2)};
        &:hover {
            opacity: 0.8;
        }

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fmd};
        }
    `,
);

const TabsMatchButtonActiveStyles = styled(TabsMatchButtonStyles)(
    () => css`
    border-color: none;
    &:hover {
            opacity: 1;
        }
    `,
);

const TabsMatchButtonContainerStyles = styled.div(
    ({ theme }) => css`
        width: auto;
        min-width: 100px;
        display: inline-flex;
        max-width: 130px;
        text-align: center;
        max-height: 60px;
        overflow: hidden;
        justify-content: center;
        
        @media (min-width: ${theme.breakpoints.xl}) {
            min-width: 125px;
        }
    `,
);

export {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
    TabsMatchContainerStyles,
};
