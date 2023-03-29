import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Time from "../../accessories/Time";
import Info from "../../accessories/Info";
import Button from "../../accessories/Button";

const TimelineStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        border-radius: 6px;
        display: flex;
        margin: ${theme.space.xxl} ${theme.space.auto} ${theme.space.zero};
        padding: ${theme.space.zero} ${theme.space.md};
        overflow-x: scroll;
        overflow-y: hidden;

        @media (min-width: ${theme.breakpoints.xl}) {
            overflow: unset;
            padding: ${theme.space.base};
        }
    `,
);

const ContainerStyles = styled(Box)(() => css``);

const TimelineLogoStyles = styled(Box)(
    () => css`
        display: block;
        width: 30px;
        height: 30px;
    `,
);

const BoxTeam = styled(Box)(
    ({ theme }) => css`
        width: auto;
        margin: ${theme.space.xl2} ${theme.space.sm};
    
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 300px;
        }
    `,
);

const BoxLine = styled(Box)(
    ({ theme }) => css`
        display: block;
        left: 0;
        width: 900px;
        @media (min-width: ${theme.breakpoints.xl}) {
            margin: ${theme.space.xl} ${theme.space.auto};
            width: 100%;
        }
    `,
);

const BoxChange = styled(Box)(
    () => css`
        left: 300px;
        width: auto;
    `,
);

const BoxTime = styled(Box)(
    () => css`
        display: flex;
        height: 15px;
        width: 100%;
    `,
);

const StartTime = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        position: absolute;
        display: flex;
        top: 5px;
        color: ${theme.colors.gray3};
    `,
);

const HalfTime = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        position: absolute;
        display: flex;
        top: 5px;
        color: ${theme.colors.gray3};
        left: 98%;
    `,
);

const ExtraTime = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fxs};
        position: absolute;
        display: flex;
        bottom: 1px;
        left: 98%;
    `,
);
const TimelineNameStyles = styled(Info)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fsm};
        font-family: ${theme.fonts[2]};
        font-weight: normal;
        margin-left: ${theme.space.base};
        position: relative;
        width: 100%;
    `,
);

const TimelineSkeleton = styled(TimelineStyles)(
    () => css`
        background: #eee;
    `,
);

const TooltipTimelineStyles = styled.span(
    ({ theme }) => css`
           border: solid 1px ${theme.colors.Interaction};
        display: none;
        left: ${(props) => (props.posX ? props.posX : 0)}%;
        visibility: hidden;
        position: absolute;
        bottom: 20px;
        height: auto;
        width: auto;
        min-width: 100px;
        background: ${theme.colors.Light};
        text-align: center;
        border-radius: 6px;
        z-index: 50;
        padding: ${theme.space.sm};
    `,
);

const TimeText = styled(Time)(
    ({ theme }) => css`
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[2]};
        left: 0px;
        color: ${theme.colors.gray3};
    `,
);

const TooltipContainer = styled.div(
    () => css`
        &:hover span {
            visibility: visible;
            display: block;
        }
    `,
);
const BoxTest = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const BoxSponsor = styled(Box)(
    ({ theme }) => css`
    display: flex;
    justify-content: end;
    padding: ${theme.space.zero} ${theme.space.sm}; 
 
    `,
);

const BoxSponsorImage = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 30px;
        height: 30px;
        margin-left: ${theme.space.sm};
    `,
);


export {
    TimelineStyles,
    TooltipContainer,
    BoxLine,
    BoxTeam,
    BoxTime,
    BoxChange,
    StartTime,
    HalfTime,
    ExtraTime,
    ContainerStyles,
    TimelineLogoStyles,
    TimelineNameStyles,
    TimelineSkeleton,
    TooltipTimelineStyles,
    TimeText,
    BoxTest,
    BoxSponsor,
    BoxSponsorImage,
};
