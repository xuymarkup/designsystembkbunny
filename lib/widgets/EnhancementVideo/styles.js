import styled, { css } from "styled-components";
import { Text, Box, Icons, Button } from "../../accessories";

const EnhancementVideoStyles = styled(Box)(
    ({ theme }) => css`
        width: ${(props) => (props.vertical ? "360px" : "100%")};
        height: ${(props) => (props.vertical ? "718px" : "auto")};
        margin: ${theme.space.xl3} auto;
        display: block;
    `,
);

const BoxTextStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 290px;
        justify-content: center;
        margin: ${theme.space.lg} auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 650px;
        }

        &::after {
            content: "";
            display: flex;
            background: ${theme.colors.Dark};
            width: 60px;
            height: 1px;
            margin: ${theme.space.xxl} auto;
            margin-bottom: ${theme.space.zero};
        }
    `,
);

const BoxVideoIcon = styled(Box)(
    () => css`
        position: absolute;
        z-index: 2;
        justify-content: center;
        display: flex;
        width: 100%;
        height: 100%;
    `,
);

const VideoPlayer = styled.div`
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
`;

const VideoButton = styled(Button)`
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    padding: 0;
`;

const VideoIconsStyles = styled(Icons)(
    ({ theme }) => css`
        fill: #f5f5f5;
        padding: ${theme.space.xl};
        width: 50px;
        height: 50px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 50%;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 60px;
            height: 60px;
        }
    `,
);

const EnhancementVideoText = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fmd};
        font-weight: 700;
        line-height: 20px;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: 17px;
            line-height: 24px;
        }
    `,
);

const BoxVideoPlayer = styled(Box)`
    position: relative;
    padding-top: 56.25%;
    width: 100%;
    display: block;
`;


export {
    EnhancementVideoStyles,
    BoxTextStyles,
    EnhancementVideoText,
    BoxVideoIcon,
    VideoIconsStyles,
    VideoPlayer,
    VideoButton,
    BoxVideoPlayer,
};
