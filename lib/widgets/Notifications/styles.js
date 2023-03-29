import styled, { css } from "styled-components";
import { Box, Title, Text, Button } from "../../accessories";



const NotificationsStyles = styled(Box)(
    ({ theme }) => css`
        width: 90%;
        min-width: 324px;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.lg}) {
            width: 1024px;
        }
    `,
);

const TitleContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: space-between;
        @media (min-width: ${theme.breakpoints.xl}) {
            justify-content: flex-start;
    }
    `,
);

const NotificationsTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        font-weight: ${theme.fontWeights.normal};
        line-height: ${theme.lineHeights.lmd};
        color: ${theme.colors.Secondary};
        font-family: ${theme.fonts[1]};
        @media (min-width: ${theme.breakpoints.lg}) {
            padding: ${theme.space.xxl} ${theme.space.xxl} ${theme.space.xxl} ${theme.space.zero};
            font-size: ${theme.fontSizes.fxxl};
        }
    `,
);

const EventsContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
    }
    `,
);

const EventRemminderContainer = styled(Box)(
    ({ theme }) => css`
        width:324px;
        height: 158px;
        border-radius: 10px;
        background: ${theme.colors.Light};
        margin: ${theme.space.xxl} ${theme.space.zero};
        justify-content: center;
        align-items: center;
        display: flex;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    `,
);

const EventRemminderText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.text};
        text-align: center;
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
        width: 100%;
        opacity: 50%
    `,
);

const EventRemminderEmpty = styled(Box)(
    ({ theme }) => css`
        width:324px;
        height: 158px;
        border-radius: 10px;
        margin: ${theme.space.xxl} ${theme.space.zero};
        justify-content: center;
        align-items: center;
        display: flex;
        border: 2px dashed #DDDDDD;
    `,
);

const NotificationIcon = styled(Button)(
    ({ theme }) => css`
        margin: ${theme.space.zero};
        height: 25px;
        width: 45px;
        border-radius:16px
    `,
);

export { 
        NotificationsStyles, 
        NotificationsTitle, 
        TitleContainer, 
        EventsContainer,
        EventRemminderContainer,
        EventRemminderText,
        EventRemminderEmpty,
        NotificationIcon,
    };
