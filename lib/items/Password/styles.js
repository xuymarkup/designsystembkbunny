import styled, { css } from "styled-components";
import { Box, Icons, Inputs, Button, Anchor, Text } from "../../accessories";

const LoginStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Dark};
        border-radius: 10px;
        max-width: 360px;
        padding: ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ${theme.space.auto};
            width: 360px;
        }
    `,
);

const TextTitle = styled(Text)(
    ({ theme }) => css`
        display: block;
        cursor: pointer;
        color: ${theme.colors.gray};
        font-weight: bold;
        text-align: left;
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.xs} ${theme.space.base};
    `,
);

const LoginContainerStyles = styled(Box)(
    ({ theme }) => css`
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

const BoxAlert = styled(Box)(
    ({ theme }) => css`
        display: flex;
        color: ${theme.colors.Danger};
        margin: ${theme.space.zero} ${theme.space.xs} ${theme.space.sm};
        @media (min-width: ${theme.breakpoints.lg}) {
        }
    `,
);

const LoginInputStyles = styled(Inputs)(
    ({ theme }) => css`
        display: flex;
        width: 320px;
        height: 48px;
        border-radius: 10px;
        background: ${theme.colors.gray};
        margin: ${theme.space.sm} ${theme.space.auto};
        ::placeholder {
            font-size: ${theme.fontSizes.fxs};
            color: rgba(70, 70, 70, 50%);
            padding-left: ${theme.space.sm};
        }
        @media (min-width: ${theme.breakpoints.lg}) {
        }
    `,
);

const LoginButtonStyles = styled(Button)(
    ({ theme }) => css`
        background: rgba(7, 159, 112, 50%);
        color: ${theme.colors.Light};
        border-radius: 10px;
        font-family: ${theme.fonts[0]};
        height: 48px;
        margin: ${theme.space.xxl} ${theme.space.auto};
        width: 320px;
        justify-content: center;
        @media (min-width: ${theme.breakpoints.lg}) {
        }
    `,
);

const LoginPasswordButton = styled(LoginButtonStyles)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts[0]};
        line-height: ${theme.lineHeights.lxs};
        position: relative;
        top: 50px;
    `,
);

const LoginAnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        cursor: pointer;
        color: ${theme.colors.Interaction};
        text-align: left;
        font-size: ${theme.fontSizes.fsm};
        margin: ${theme.space.md};
        width: 50%;
    `,
);

const LoginAnchorTwoStyles = styled(LoginAnchorStyles)(
    () => css`
        left: 50px;
        position: relative;
    `,
);

const IconsClose = styled(Icons)(
    ({ theme }) => css`
        left: 88%;
        display: block;
        position: relative;
    `,
);

const BoxLine = styled(Box)(
    ({ theme }) => css`
        border-bottom: 1px solid #ffff;
        margin: ${theme.space.xs};
    `,
);

const TextColor = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
    `,
);

const LoginButtonGoogleStyles = styled(LoginButtonStyles)(
    ({ theme }) => css`
        background: ${theme.colors.google};
        color: ${theme.colors.Light};
        border-radius: 10px;
        font-family: ${theme.fonts[0]};
        height: 48px;
        margin: ${theme.space.xxl} ${theme.space.auto};
        width: 320px;
        justify-content: center;

        @media (min-width: ${theme.breakpoints.lg}) {
        }
    `,
);

export {
    LoginPasswordButton,
    LoginStyles,
    LoginInputStyles,
    LoginButtonStyles,
    LoginAnchorStyles,
    LoginContainerStyles,
    TextTitle,
    IconsClose,
    LoginAnchorTwoStyles,
    BoxLine,
    TextColor,
    LoginButtonGoogleStyles,
    MessageError,
    BoxAlert,
};
