import styled, { css } from "styled-components";
import { Box, Text, Time, Button } from "../../accessories";

const EventRemminderStyles = styled(Box)(
    ({ theme }) => css`
        width: 90%;
        min-width: 324px;
        height: 158px;
        margin: ${theme.space.auto};
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 1024px;
            height: 240px;
        }
    `,
);

const EventRemminderDateBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: 20px;
        border-radius: 10px 10px 0px 0px;
        background: ${theme.colors.Interaction};
        justify-content: space-between;
        padding: ${theme.space.zero} ${theme.space.md};
        @media (min-width: ${theme.breakpoints.lg}) {
            height: 40px;
            padding: ${theme.space.zero} ${theme.space.xl};
        }
    `,
);

const EventRemminderText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-weight: ${theme.fontWeights.normal};
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fbase}; 
        }
    `,
);

const EventRemminderDate = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        @media (min-width: ${theme.breakpoints.lg}) {
            font-size: ${theme.fontSizes.fbase}; 
        }
    `,
);

const EventRemminderBox = styled(Box)(
    ({ theme }) => css`
        height: 138px;
        border-radius: 0px 0px 10px 10px;
        overflow: hidden;
        position: relative;
        @media (min-width: ${theme.breakpoints.lg}) {
            height: 200px;
        }    
    `,
);

const EventRemminderBack = styled.img(
    ({ theme }) => css`
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    `,
);

const EventRemminderContent= styled(Box)(
    ({ theme }) => css`
        position: absolute;
        width: 100%;
        height: 90%;
        top: 50%; 
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        @media (min-width: ${theme.breakpoints.lg}) {
            height: 85%;
        }
    `,
);

const EventRemminderCounterBox= styled(Box)(
    ({ theme }) => css`
        position: absolute;
        width: 100%;
        top: 70%; 
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        @media (min-width: ${theme.breakpoints.lg}) {
            top: 75%;
        }
    `,
);

const EventRemminderTeamBox = styled(Box)(
    ({ theme }) => css`
        position: relative;
        justify-content: center;
        width: 100%;
        min-width: 324px;
        @media (min-width: ${theme.breakpoints.lg}) {
            min-width: 614px;
            margin-top: ${theme.space.md};
        }
    `,
);

const EventRemminderImageBoxRight = styled(Box)(
    ({ theme }) => css`
        width: 50px;
        height: 50px;
        overflow: hidden;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 400px;
            height: 80px;
            justify-content: right;
        }    
    `,
);

const EventRemminderImageBoxLeft = styled(EventRemminderImageBoxRight)(
    ({ theme }) => css`
        @media (min-width: ${theme.breakpoints.lg}) {
            justify-content: left;
        }    
    `,
);

const EventRemminderTimeBox = styled(Box)(
    ({ theme }) => css`
        width: 70px;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: auto;
            display: flex;
            margin-right: ${theme.space.xxl};
        }
    `,
);

const EventRemminderCounter = styled(Box)(
    ({ theme }) => css`
        position: relative;
        justify-content: center;
        margin-top: ${theme.space.sm};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin-top: ${theme.space.lg};
        }
    `,
);

const EventRemminderMatchButton = styled(Button)(
    ({ theme }) => css`
        position: relative;  
        justify-content: center;
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Light};
        border-radius: 10px;
        width: 120px;
        height: 35px;
        font-family: ${theme.fonts[0]};
        margin-top: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin-top: ${theme.space.xl};
        }
    `,
);

const EventRemminderTime = styled(EventRemminderText)(
    ({ theme }) => css`
        width: auto;
        text-align: center;
        margin: ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ${theme.space.zero} ${theme.space.zero} ${theme.space.sm}; 
        }
    `,
);

const EventRemminderNumber = styled(EventRemminderText)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl};
        font-weight: ${theme.fontWeights.bold};
        width: auto;
        text-align: center;
        margin: ${theme.space.sm} ${theme.space.auto};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero}; 
        }
    `,
);

const EventRemminderVersus = styled(EventRemminderNumber)(
    ({ theme }) => css`
        margin: ${theme.space.auto} ${theme.space.xl2};
    `,
);

const EventRemminderTeamNameRight = styled(EventRemminderNumber)(
    ({ theme }) => css`
       display: none;
       @media (min-width: ${theme.breakpoints.lg}) {
            display: block;
            margin: ${theme.space.auto} ${theme.space.xxl};
            text-align: left;
        }
    `,
);

const EventRemminderTeamNameLeft = styled(EventRemminderTeamNameRight)(
    ({ theme }) => css`
       @media (min-width: ${theme.breakpoints.lg}) {
            text-align: right;
        }
    `,
);

const EventRemminderDivider = styled(Box)(
    ({ theme }) => css`
        position: relative;
        justify-content: center;
        margin-top: ${theme.space.xs};
        ::before {
            content: "";
            display: block;
            width: 130px;
            height: 1px;
            background: ${theme.colors.Interaction};
            right: 12px;
            top: 50%;
            position: absolute;
        }
        ::after {
            content: "";
            display: block;
            width: 130px;
            height: 1px;
            background: ${theme.colors.Interaction};
            top: 50%;
            left: 12px;
            position: absolute;
        }
        @media (min-width: ${theme.breakpoints.lg}) {
            margin-top: ${theme.space.sm};
            ::before {
                width: 450px;
            }
            ::after {
                width: 450px;
            }
        }
    `,
);

const EventRemminderIcon = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        fill: ${theme.colors.Ligth};
        background: transparent;
        width: 50px;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 60px;
            height: 60px;
        }
    `,
);

const EventRemminderDividerText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        text-align: center;
        position: relative;
        background: ${theme.colors.Interaction};
        width: 100px;
        height: 22px;
        border-radius: 10px;
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        padding: ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 166px;
            height: 30px;
            border-radius: 50px;
            font-size: ${theme.fontSizes.fbase};
            padding: ${theme.space.sm};
        }
    `,
);

const TeamImage = styled.img(
    ({ theme }) => css`
        width: 100%;
        max-width: 50px;
        height: 50px;
        @media (min-width: ${theme.breakpoints.lg}) {
            max-width: 80px;
            height: 80px;
        }
    `,
);


export {
    EventRemminderStyles,
    EventRemminderBox,
    EventRemminderBack,
    EventRemminderTeamBox,
    EventRemminderImageBoxRight,
    EventRemminderImageBoxLeft,
    EventRemminderText,
    EventRemminderDateBox,
    EventRemminderDate,
    EventRemminderTime,
    EventRemminderNumber,
    EventRemminderCounter,
    EventRemminderDividerText,
    EventRemminderDivider,
    EventRemminderVersus,
    EventRemminderTimeBox,
    EventRemminderTeamNameRight,
    EventRemminderTeamNameLeft,
    TeamImage,
    EventRemminderContent,
    EventRemminderMatchButton,
    EventRemminderIcon,
    EventRemminderCounterBox,
};
