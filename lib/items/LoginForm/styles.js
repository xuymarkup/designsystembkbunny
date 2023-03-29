import styled, { css } from "styled-components";
import { Box, Form, Inputs, Button, Anchor, Text, Icons } from "../../accessories";

const LoginFormStyles = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xxl};
        width: 100%;
        height: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 348px;
            border-radius: 15px;
            background: ${theme.colors.modal};
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
        }
    `,
);

const FormStyles = styled(Form)(
    ({ theme }) => css`
        display: none;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            height: 100%;
        }
    `,
);

const InputStyle = styled(Inputs)(
    ({ theme }) => css`
        border-radius: 10px;
        display: flex;
        width: 320px;
        height: 48px;
        border-radius: 10px;
        background: ${theme.colors.gray};
        font-size: ${theme.fontSizes.fmd};
        padding: ${theme.space.sm};
      
        ::placeholder {
            font-size: ${theme.fontSizes.fxs};
            color: rgba(70, 70, 70, 50%);
            padding-left: ${theme.space.sm};
        }
       
    `,
);
const IconVisible = styled(Icons)(
    ({ theme }) => css`
        margin: ${theme.space.lg};
        position: absolute;
        right: 5px;
    `,
);

const AnchorBox = styled(Box)(
    ({ theme }) => css`
        margin-top: ${theme.space.md};
        margin-bottom: ${theme.space.xl};
    `,
);

const AnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-family: ${theme.fonts[0]};
        font-size: ${theme.fontSizes.fsm};
        padding: ${theme.space.zero} ${theme.space.xs};
    `,
);

const ButtonStyles = styled(Button)(
    ({ theme }) => css`
        width: 100%;
        justify-content: center;
        font-family: ${theme.fonts[0]};
        padding: ${theme.space.lg};
    `,
);

const LineStyles = styled(Box)(
    ({ theme }) => css`
        width: 48%;
        height: 1px;
        background: ${theme.colors.gray};
        margin: ${theme.space.xl2} ${theme.space.zero};
        position: relative;

       
    `,
);

const ButtonContainers = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        border-top: solid 1px ${theme.colors.gray};
        padding-top: ${theme.space.xl2};
        padding-bottom: ${theme.space.xl2};
        justify-content: space-between;

        @media (min-width: ${theme.breakpoints.xl}) {
            display: none;
        }
    `,
);

const ButtonMobileStyles = styled(ButtonStyles)(
    ({ theme }) => css`
        max-width: 120px;
        font-size: ${theme.fontSizes.fsm};
    `,
);

const BoxAlert = styled(Box)(
    ({ theme }) => css`
        display: flex;
        color: ${theme.colors.Danger};
        margin: ${theme.space.zero} ${theme.space.xs} ${theme.space.sm};
        @media (min-width: ${theme.breakpoints.lg}) {
        }
    `,
);

const MessageError = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Danger};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[0]};
        line-height: ${theme.lineHeights.lxs};
        margin-left: ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.lg}) {
        }
    `,
);


const TextLine = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[0]};
        margin: ${theme.space.zero} ${theme.space.sm};
    `,
);

const TextGoogle = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[0]};
        margin: ${theme.space.zero} ${theme.space.sm};
    `,
);

export {
    LoginFormStyles,
    FormStyles,
    InputStyle,
    AnchorBox,
    ButtonStyles,
    LineStyles,
    AnchorStyles,
    ButtonContainers,
    ButtonMobileStyles,
    BoxAlert,
    MessageError,
    IconVisible,
    TextLine,
    TextGoogle,
};
