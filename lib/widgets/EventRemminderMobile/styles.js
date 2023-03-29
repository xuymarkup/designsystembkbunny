import styled, { css } from "styled-components";
import { Box, Text, Time, Button } from "../../accessories";

const EventRemminderStyles = styled(Box)(
    ({ theme }) => css`
        width: 90%;
        min-width: 324px;
        height: 158px;
        margin: ${theme.space.auto};
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
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
    `,
);

const EventRemminderText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-weight: ${theme.fontWeights.normal};
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
    `,
);

const EventRemminderDate = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
    `,
);

const EventRemminderBox = styled(Box)(
    ({ theme }) => css`
        height: 138px;
        border-radius: 0px 0px 10px 10px;
        overflow: hidden;
        position: relative;
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
    `,
);

const EventRemminderCounterBox= styled(Box)(
    ({ theme }) => css`
        position: absolute;
        width: 100%;
        top: 70%; 
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

    `,
);

const EventRemminderTeamBox = styled(Box)(
    ({ theme }) => css`
        position: relative;
        justify-content: center;
        width: 100%;
        min-width: 324px;
    `,
);

const EventRemminderImageBoxRight = styled(Box)(
    ({ theme }) => css`
        width: 50px;
        height: 50px;
        overflow: hidden;
    `,
);

const EventRemminderImageBoxLeft = styled(EventRemminderImageBoxRight)(
    ({ theme }) => css`
        
    `,
);

const EventRemminderTimeBox = styled(Box)(
    ({ theme }) => css`
        width: 70px;
        
    `,
);

const EventRemminderCounter = styled(Box)(
    ({ theme }) => css`
        position: relative;
        justify-content: center;
        margin-top: ${theme.space.sm};
        
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
        
    `,
);

const EventRemminderTime = styled(EventRemminderText)(
    ({ theme }) => css`
        width: auto;
        text-align: center;
        margin: ${theme.space.auto};
        
    `,
);

const EventRemminderNumber = styled(EventRemminderText)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl};
        font-weight: ${theme.fontWeights.bold};
        width: auto;
        text-align: center;
        margin: ${theme.space.sm} ${theme.space.auto};
        
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
       
    `,
);

const EventRemminderTeamNameLeft = styled(EventRemminderTeamNameRight)(
    ({ theme }) => css`
       
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
        
    `,
);

const TeamImage = styled.img(
    ({ theme }) => css`
        width: 100%;
        max-width: 50px;
        height: 50px;
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
