import styled, { css } from "styled-components";
import {
    Box, Button, Text, Title, Image,
} from "../../accessories";

const StandingStyles = styled.section(
    ({ theme }) => css`
        background: transparent;
        padding: ${theme.space.zero} ${theme.space.md};
        overflow-x: scroll;
        width: 100%;
        border-radius: 10px;
        @media (min-width: ${theme.breakpoints.xl}) {
        width: 525px;
        padding: ${theme.space.zero};

    }
    `,
);

const StandingBoxHeader = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        max-width:1024px;
        height: auto;
        flex-direction: column;
        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: inherit;
        }
    `,
);

const StatisticsBox = styled(Box)(
    ({ theme }) => css`
        background-color: rgba(0, 0, 0, .5);
    `,
);


const StandingHeaderTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: bold;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: start;
            padding-left: ${theme.space.md};
            font-size: ${theme.fontSizes.flg};
        }
    `,
);

const StandingHeaderSwitch = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: 100%;
        margin: ${theme.space.zero} ${theme.space.auto};
        height: 40px;

    `,
);

const StandingBoxData = styled(Box)(
    ({ theme }) => css`
       display: flex;
       width: 100%;
       align-items: flex-start;
    `,
);


const BoxInfo = styled(Box)(
    ({ theme }) => css`
    border-radius: 0px 10px;
    overflow-y: scroll;
    overflow-x: scroll;
 `,
);

const StandingSkeletons = styled(StandingStyles)(
    () => css`
        background: #eee;
        `,
);

const ImageStanding = styled(Image)(
    ({ theme }) => css`
    border-radius: 100%;
    height: 24px;
    width: 24px;
    background: ${theme.colors.Light};
    `,
);

const TitleStanding = styled(Text)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fxl};
    color: ${theme.colors.Light};
    font-family: ${theme.fonts[2]};
    font-weight: normal;
    margin-top: ${theme.space.xxl};
    margin-bottom: ${theme.space.sm};
    margin-left: ${theme.space.md};
    line-height: ${theme.lineHeights.lxl2};
    `,
);


export {
    StandingStyles,
    StandingBoxHeader,
    StandingHeaderTitle,
    StandingHeaderSwitch,
    StandingBoxData,
    BoxInfo,
    StandingSkeletons,
    ImageStanding,
    TitleStanding,
    StatisticsBox,
};
