import styled, { css } from "styled-components";
import { Box, Text, } from "../../accessories";

const BoxTheme  = styled(Box)(
    ({ theme }) => css`
        width: 60px;
        height: 67px;
        border-radius: 10px; 
    `,
);

const  TextProfile = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.Light};
        justify-content: center;
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
        text-align: center;
        width: 100%;
    `,
);

const ThemeContainer = styled(Box)(
    ({ theme }) => css`
        width: 40px;
        height: 40px;
        display: flex;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const ThemeColor = styled(Box)(
    ({ theme }) => css`
        width: 27px;
        height: 40px;
        background: #00568B;
        border-radius: 40px 0px 0px 40px; 
    `,
);

const ThemeColorTUDN = styled(ThemeColor)(
    ({ theme }) => css`
        background: #EF3542;
        border-radius: 0px 40px 40px 0px;
    `,
);


export {
    BoxTheme, 
    TextProfile,
    ThemeContainer,
    ThemeColor,
    ThemeColorTUDN,
};