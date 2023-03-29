import styled, { css } from "styled-components";
import { Box, Form, Button, Text } from "../../accessories";

const EditProfileStyles  = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.base};
        width: 100%;
        height: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            width: 326px;
            height: auto;
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

const  ProfileButton = styled(Button)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.Light};
        justify-content: center;
        width: 120px;
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
        margin-top: ${theme.space.lg};
    `,
);

const  ButtonSecondary = styled(ProfileButton)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.Interaction};
        background: ${theme.colors.Light};
        border: 1px solid ${theme.colors.Interaction};
    `,
);

const  TextProfile = styled(Text)(
    ({ theme }) => css`
        
        color: ${theme.colors.Light};
        justify-content: center;
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
        text-align: center;
        width: 100%;
    `,
);

const TextNotifications = styled(TextProfile)(
    ({ theme }) => css`
        padding-bottom: ${theme.space.xxl};
    `,
);

const EditProfileContainer = styled(Box)(
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

const BoxIcon = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.md} ${theme.space.auto};
        width: auto;
    `,
);

const  ThemeText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Light};
        text-align: center;
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
        text-align: center;
        margin: ${theme.space.md} ;
    `,
);

const BoxThemeContainer = styled(Box)(
    ({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    `,
);


export {
    EditProfileStyles,
    FormStyles,
    ProfileButton,
    TextProfile,
    EditProfileContainer,
    BoxIcon,
    ThemeText,
    BoxThemeContainer,
    ButtonSecondary,
    TextNotifications,
};