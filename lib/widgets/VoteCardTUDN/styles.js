import styled, { css } from "styled-components";
import { Title, Box, Text, Button } from "../../accessories";

const VoteCardStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1024px;
        margin: ${theme.space.xxl} auto;
        padding: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            padding: ${theme.space.base} ${theme.space.zero};
        }
    `,
);

const VoteCardLabelBox = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.base};
        max-width: 220px;
        background: ${theme.colors.Dark};
        height: 24px;
        border-radius: 10px;
        margin: 0px auto -12px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 280px;
        }
    `,
);

const VoteCardBack = styled.img(
    ({ theme }) => css`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        right: 0px;
        object-fit: cover;
        border-radius: 10px;
    `,
);

const VoteCardLabelText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fsm};
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: ${theme.fonts[0]};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fmd};
        }
    `,
);

const VoteCardBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        background: ${theme.colors.graycataloge};
        border-radius: 10px;
        text-align: center;
        margin-bottom: ${theme.space.xxl};
    `,
);

const VoteCardTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.Light};
        text-align: center;
        margin: ${theme.space.xxl} ${theme.space.auto} ${theme.space.zero};
        display: inline-block;
        line-height: ${theme.lineHeights.lbase};
        position: relative;
        font-family: ${theme.fonts[0]};

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fxl};
            line-height: ${theme.lineHeights.lxxl};
        }
    `,
);

const VoteCardFooter = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        background: ${theme.colors.Dark};
        height: 30px;
        border-radius: 0px 0px 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

const VoteCardFooterText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        text-transform: uppercase;
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fxs};
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: ${theme.space.sm};
    `,
);

const VoteCardTeams = styled(Box)(
    ({ theme }) => css`
        max-width: 560px;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.lg};
        display: flex;
    `,
);

const VoteCardTeamItem = styled(Box)(
    ({ theme }) => css`
        max-width: 33%;
    `,
);

const VoteCardVSText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fxl2};
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

const VoteCardTeamLogo = styled.img (
    ({ theme }) => css`
        width: 75px;
        height: 75px;
        margin: ${theme.space.base} ${theme.space.auto};
    `,
);

const VoteCardRegisterText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fmd};
        display: flex;
        align-items: center;
        justify-content: center;
        margin: ${theme.space.xxl} ${theme.space.auto} ${theme.space.zero};
        display: inline-block;
        position: relative;
    `,
);

const VoteCardPercentageBox = styled(Box)(
    ({ theme }) => css`
        max-width: 560px;
        margin: ${theme.space.lg} ${theme.space.auto};
        display: flex;
        padding: ${theme.space.zero} ${theme.space.xl};
    `,
);

const VoteCardPercentageText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        text-transform: uppercase;
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;

        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.flg};
            line-height: ${theme.lineHeights.llg};
            width: 65px;
        }
    `,
);

const VoteCardOptionsBox = styled(Box)(
    ({ theme }) => css`
        display: flex;
        max-width: 560px;
        margin: ${theme.space.lg} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.xl};
        flex-direction: column;

        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: initial;
            
            align-items: stretch;
        }
    `,
);

const VoteCardOptionsLeft = styled(Box)(
    ({ theme }) => css`
        width: 65%;
        min-height: 56px;


        @media (min-width: ${theme.breakpoints.xl}) {
            width: 100%;
        }
    `,
);

const VoteCardOptionsRight = styled(Box)(
    ({ theme }) => css`
        width: 35%;
        display: flex;
        justify-content: flex-end;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 100%;
            justify-content: center;
        }
    `,
);

const VoteCardCalienteLeft = styled(Box)(
    ({ theme }) => css`
        width: 65%;
        display: flex;
        min-height: 56px;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 100%;
            display: block;
        }
    `,
);

const VoteCardCalienteRight = styled(Box)(
    ({ theme }) => css`
        width: 35%;
        display: flex;
        justify-content: flex-end;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 100%;
            justify-content: center;
        }
    `,
);

const VoteCardQuinielaBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        margin-bottom: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 60%;
            display: block;
            margin-bottom: ${theme.space.zero};
        }
    `,
);

const VoteCardCalienteBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 40%;
            flex-direction: column;
        }
    `,
);

const CalienteLogo = styled.img(
    ({ theme }) => css`
        width: auto;
        height: auto;
        margin-left: ${theme.space.base};

        @media (min-width: ${theme.breakpoints.xl}) {
            margin-left: ${theme.space.zero};
        }
    `,
);

const VoteCardOptionText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        display: flex;
        align-items: center;
        justify-content: start;
        text-align: left;

        @media (min-width: ${theme.breakpoints.xl}) {
            text-align: center;
            justify-content: center;
            font-size: ${theme.fontSizes.fmd};
            line-height: ${theme.lineHeights.lmd};
        }
    `,
);

const VoteCardOptionTextSub = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        display: flex;
        align-items: center;
        justify-content: center;
        font-style: italic;
        opacity: .7;
        text-align: left;
        margin-top: ${theme.space.sm};

        @media (min-width: ${theme.breakpoints.xl}) {
            text-align: center;
        }
    `,
);

const VoteCardBar = styled.div(
    ({ theme }) => css`
        height: 10px;
        margin: ${theme.space.sm};
        width: ${props => (props.width ? props.width : 100)}%;
        position: relative;
        background: ${theme.colors.mundial};
    `,
);

const VoteCardTimeBar = styled(Box)(
    ({ theme }) => css`
        background: ${props => (props.strokecolor ? props.strokecolor : theme.colors.Interaction)};
        height: ${props => (props.stroke ? props.stroke : 4)}px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        width: ${props => (props.progress ? props.progress : 0)}%;
    `,
);

const VoteCardButton = styled(Button)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        box-sizing: content-box;
        justify-content: center;
        min-width: 60px;
    `,
);

const VoteCardOptionsButton = styled(Button)(
    ({ theme }) => css`
        margin: ${theme.space.sm} ${theme.space.zero};
        box-sizing: content-box;
        justify-content: center;
        min-width: 70px;

        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.sm} ${theme.space.auto};
        }
    `,
);


export {
    VoteCardStyles,
    VoteCardLabelBox,
    VoteCardBack,
    VoteCardLabelText,
    VoteCardBox,
    VoteCardTitle,
    VoteCardFooter,
    VoteCardFooterText,
    VoteCardTeams,
    VoteCardTeamItem,
    VoteCardVSText,
    VoteCardTeamLogo,
    VoteCardRegisterText,
    VoteCardPercentageBox,
    VoteCardPercentageText,
    VoteCardOptionsBox,
    VoteCardQuinielaBox,
    VoteCardCalienteBox,
    CalienteLogo,
    VoteCardOptionText,
    VoteCardOptionTextSub,
    VoteCardOptionsLeft,
    VoteCardOptionsRight,
    VoteCardCalienteLeft,
    VoteCardCalienteRight,
    VoteCardBar,
    VoteCardTimeBar,
    VoteCardButton,
    VoteCardOptionsButton,
};
