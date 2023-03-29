import styled, { css } from "styled-components";
import { Anchor, Text, Icons, Box } from "../../accessories";
import TUDNImage from "../../../assets/tud_brandfooter.png";

const FooterStyles = styled.footer(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        padding-bottom: 65px;
        background: ${theme.colors.darkfooter};
        color: ${theme.colors.gray};
        grid-area: footer;
    `,
);

const SelectStyles = styled.select(
    ({ theme }) => css`
        height: 40px;
        width: 95%;
        background: ${theme.colors.grayfooter};
        color: ${theme.colors.gray};
        margin-top: ${theme.space.sm};
    `,
);

const BadgesContainerStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 400px;
        margin: ${theme.space.md} auto;
    `,
);

const TextAppStyles = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        padding: ${theme.space.md};
        font-weight: bold;
        color: ${theme.colors.gray2};
        text-align: center;
    `,
);

const LabelStyles = styled.label(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fxs};
        width: 100%;
        display: block;
        text-align: center;
    `,
);

const SectionStyles = styled.section(
    () => css`
        width: 100%;
        height: 84px;
        background: rgba(41, 138, 109, 50%);
    `,
);

const NetworksStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 48px;
        width: 100%;
        min-width: 48px;
        padding: ${theme.space.zero};
    `,
);

const AboutStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        width: 100%;
        min-width: 48px;
        height: 48px;
        color: ${theme.colors.gray};
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fsm};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-top: ${theme.space.md};
        padding-bottom: ${theme.space.md};
        align-items: center;

        &::after {
            content: "";
            width: 100%;
            height: 1px;
            display: block;
            position: absolute;
            background: ${theme.colors.Interaction};
            opacity: 0.3;
            bottom: 0;
        }
        @media (min-width: ${theme.breakpoints.md}) {
            width: auto;
            &::after {
                display: none;
            }
        }
    `,
);

const SectionTextStyles = styled.section(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        flex-flow: wrap;
        justify-content: center;
        padding-top: ${theme.space.xl};
        padding-bottom: ${theme.space.xl};
        padding-right: 20px;
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        background: url(${TUDNImage}) no-repeat right top;
    `,
);

const BadgeStyles = styled.img(
    ({ theme }) => css`
        width: 100%;
        max-width: 108px;
        height: 32px;
    `,
);

const SectionInfoStyles = styled.section(
    ({ theme }) => css`
        display: inline-flex;
        flex-wrap: wrap;
        position: relative;
        justify-content: center;
        width: 100%;
        align-items: center;
        padding-top: ${theme.space.md};
        padding-bottom: ${theme.space.md};
    `,
);

const ContactStyles = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        color: ${theme.colors.textfooter};
        opacity: 0.5;
        min-width: 48px;
        height: 48px;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fxs};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const CopyRightStyles = styled.div(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: 70px 333px;
        grid-template-rows: repeat(1, 50px);
        justify-content: center;
        align-items: center;

        @media (max-width: ${theme.breakpoints.md}) {
            grid-template-columns: repeat(1, 1fr);
            grid-template-rows: repeat(2, 70px);
        }
    `,
);

const TextCopyStyles = styled(Text)(
    ({ theme }) => css`
        display: flex;
        text-align: center;
        width: 90%;
        color: ${theme.colors.textfooter};
        opacity: 0.5;
        text-transform: uppercase;
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[1]};
        line-height: ${theme.lineHeights.lbase};
        margin-left: ${theme.space.sm};
        margin-right: ${theme.space.sm};
        margin-top: ${theme.space.sm};

        @media (max-width: ${theme.breakpoints.md}) {
            margin: auto;
        }
    `,
);

const CopyIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 70px;
        height: 70px;
        fill: ${theme.colors.gray};

        @media (max-width: ${theme.breakpoints.lg}) {
            margin: auto;
        }
    `,
);

const NetworkIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 60px;
        height: 60px;
        fill: ${theme.colors.gray};
    `,
);

const MobileIconStyles = styled(Icons)(
    ({ theme }) => css`
        width: 100%;
        height: 70px;
        fill: ${theme.colors.gray};

        @media (min-width: ${theme.breakpoints.lg}) {
            height: 115px;
        }
    `,
);

const FooterStylesAMP = styled.footer(
    ({ theme }) => css`
        display: flex;
        min-height: 65px;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        padding-bottom: ${theme.space.xl3};
        background-color: ${theme.colors.darkfooter};
        width: 100%;
        grid-area: footer;
    `,
);

const CopyRightStylesAMP = styled(Box)(
    ({ theme }) => css`
        display: flex;
        margin-left: auto;
        margin-right: auto;
        flex-direction: column;
        background-color: ${theme.colors.darkfooter};
    `,
);

const TextCopyStylesAMP = styled(Text)(
    ({ theme }) => css`
        text-align: center;
        color: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[1]};
        padding-bottom: ${theme.space.md};
        @media (max-width: ${theme.breakpoints.lg}) {
            margin: auto;
        }
    `,
);

export {
    FooterStyles,
    NetworksStyles,
    AboutStyles,
    SectionStyles,
    SectionTextStyles,
    ContactStyles,
    SectionInfoStyles,
    CopyRightStyles,
    TextCopyStyles,
    CopyIconStyles,
    NetworkIconStyles,
    MobileIconStyles,
    SelectStyles,
    FooterStylesAMP,
    TextCopyStylesAMP,
    CopyRightStylesAMP,
    LabelStyles,
    TextAppStyles,
    BadgeStyles,
    BadgesContainerStyles,
};
