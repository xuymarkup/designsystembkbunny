import styled, { css } from "styled-components";
import { Box, Title, Text, Time, Anchor, Button, Image } from "accessories";

const HighImpactItemStyles = styled(Box)(
    ({ theme }) => css`
        display: block;
        height: auto;
        width: 324px;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.md};
        grid-area: hero;
        align-items: flex-start;
        padding: ${theme.space.zero};
        border-radius: 10px;

        @media (min-width: ${theme.breakpoints.md}) {
            margin-bottom: ${theme.space.lg};
            width: 100%;
            height: 511px;
        }

        @media (min-width: ${theme.breakpoints.xxl}) {
            margin-bottom: ${theme.space.lg};
            width: 682px;
            height: 511px;
        }
    `,
);

const HighImpactItemBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        align-items: inherit;

        @media (min-width: ${theme.breakpoints.xxl}) {
            width: 682px;
        }
    `,
);

const HighImpactItemImageContainer = styled(Anchor)(
    ({ theme }) => css`
        height: 324px;

        @media (min-width: ${theme.breakpoints.xxl}) {
            height: 424px;
        }
    `,
);

const HighImpactEventImageContainer = styled(HighImpactItemImageContainer)(
    ({ theme }) => css`
        height: 324px;

        @media (min-width: ${theme.breakpoints.xxl}) {
            height: 464px;
        }
    `,
);

const HighImpactItemLeagueBox = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        border-radius: 10px 10px 0px 0px;
    `,
);

const HighImpactItemIconBox = styled(Box)(
    () => css`
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

const HighImpactItemImageContent = styled(Box)(
    ({ theme }) => css`
        margin: auto;
        width: 100%;
        overflow: hidden;
        height: auto;
        border-radius: 10px;

        @media (min-width: ${theme.breakpoints.md}) {
            max-height: 100%;
            height: auto;
            border-radius: 10px 10px 0px 0px;
        }

        @media (min-width: ${theme.breakpoints.lg}) {
            height: 75%;
            border-radius: 10px 10px 0px 0px;
        }

        @media (min-width: ${theme.breakpoints.xxl}) {
            height: 75%;
            width: 682px;
            border-radius: 10px 10px 0px 0px;
        }
    `,
);

const HighImpactItemImageContentEvent = styled(HighImpactItemImageContent)(
    ({ theme }) => css`
        border-radius: 0px 0px 10px 10px;

        @media (min-width: ${theme.breakpoints.md}) {
            height: 384px;
            max-height: 475px;
        }

        @media (min-width: ${theme.breakpoints.xxl}) {
            height: 463px;
            width: 682px;
        }
    `,
);

const HighImpactItemEventImage = styled(Box)(
    ({ theme }) => css`
        img {
            @media (min-width: ${theme.breakpoints.xxl}) {
                object-fit: cover;
                height: 515px;
            }
        }
    `,
);

const HighImpactItemCaption = styled(Box)(
    ({ theme }) => css`
        max-height: 280px;
        height: 100%;
        overflow: hidden;
        padding: ${theme.space.xl} ${theme.space.lg};
        background: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        border-radius: 0px 0px 10px 10px;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 128px;
            padding: ${theme.space.zero} ${theme.space.lg};
        }
    `,
);

const HighImpactEventCaption = styled(Box)(
    ({ theme }) => css`
        height: 148px;
        padding: ${theme.space.xl} ${theme.space.lg};
        position: absolute;
        bottom: 0;
        z-index: 3;

        @media (min-width: ${theme.breakpoints.xl}) {
            height: 128px;
            padding: ${theme.space.zero} ${theme.space.lg};
            width: 311px;
        }
    `,
);

const HighImpactItemTimeBox = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        position: absolute;
        bottom: 5%;
        width: auto;
        justify-content: center;
        height: 30px;
        align-items: center;
        z-index: 2;
        left: 0px;
        background: ${theme.colors.Interaction};
        min-height: 25px;
        display: flex;
        border-radius: 0px 5px 5px 0px;
        padding: ${theme.space.zero} ${theme.space.sm} ${theme.space.zero};
    `,
);

const HighImpactEventTimeBox = styled(HighImpactItemTimeBox)(
    ({ theme }) => css`
        bottom: 35%;
        background: ${theme.colors.Danger};
    `,
);

const HighImpactItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        font-weight: bold;
        color: ${theme.colors.Light};
        padding: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.fbase};
            padding: ${theme.space.base};
        }
    `,
);

const HighImpactItemEventTime = styled(HighImpactItemTimeStyles)(
    ({ theme }) => css`
        @keyframes pulsar {
            0% {
                height: 7px;
                opacity: 0.2;
                width: 7px;
            }

            50% {
                height: 8px;
                opacity: 1;
                width: 8px;
            }

            100% {
                height: 7px;
                opacity: 0.2;
                width: 7px;
            }
        }
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: ${theme.space.zero} ${theme.space.base};
        text-transform: uppercase;

        &::before {
            background: ${theme.colors.Light};
            animation-play-state: running;
            animation: pulsar 2s 0.5s ease-in-out infinite;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            height: 7px;
            width: 7px;
            margin-right: ${theme.space.md};

            @media (min-width: 1025px) {
                justify-content: flex-start;
            }
        }
    `,
);

const HighImpactItemTitleStyles = styled(Title)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.flg};
        line-height: ${theme.lineHeights.lxl};
        font-family: ${theme.fonts[0]};
        font-weight: 400;

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.flg};
            line-height: ${theme.lineHeights.lxxl};
        }
    `,
);

const HighImpactEventTitle = styled(HighImpactItemTitleStyles)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fxl3};
        line-height: ${theme.lineHeights.lxl3};
        text-shadow: 3px 3px 3px rgb(3 3 3 / 80%);

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl3};
            line-height: ${theme.lineHeights.lxl3};
        }
    `,
);

const HighImpactItemLeague = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lmd};
        color: ${theme.colors.green};
        width: 90%;
        height: auto;
        padding-left: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.md}) {
            font-size: ${theme.fontSizes.flg};
            line-height: ${theme.lineHeights.llg};
            letter-spacing: 1px;
            padding-left: ${theme.space.xl2};
        }
    `,
);

const HighImpactItemIcon = styled(Button)(
    ({ theme }) => css`
        position: absolute;
        right: 0;
        top: 0;
        z-index: 3;
        fill: ${theme.colors.green};
        background: transparent;
        justify-content: center;
    `,
);

export {
    HighImpactItemBox,
    HighImpactItemStyles,
    HighImpactItemTimeStyles,
    HighImpactItemTitleStyles,
    HighImpactItemImageContent,
    HighImpactItemCaption,
    HighImpactItemTimeBox,
    HighImpactItemLeagueBox,
    HighImpactItemLeague,
    HighImpactItemIconBox,
    HighImpactItemImageContainer,
    HighImpactEventCaption,
    HighImpactEventTimeBox,
    HighImpactEventImageContainer,
    HighImpactEventTitle,
    HighImpactItemIcon,
    HighImpactItemImageContentEvent,
    HighImpactItemEventTime,
    HighImpactItemEventImage,
};
