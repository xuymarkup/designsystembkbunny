import styled, { css } from "styled-components";
import { Box, Form, Inputs, Button, Anchor, Text, Icons } from "../../accessories";

const SignupStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.modal};
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xxl};
        width: 348px;
        border-radius: 15px;
        height: auto;

        @media (min-width: ${theme.breakpoints.xl}) {
            
            
        }
    `,
);

const SignupFormStyles = styled(Form)(
    ({ theme }) => css`
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
    `,
);

const TextPrivacy = styled(Text)(
    ({ theme }) => css`
    color: ${theme.colors.Light};
    font-size: ${theme.fontSizes.fxs};
    font-family: ${theme.fonts[0]};
    line-height: ${theme.lineHeights.lxs};

  
    `,
);

const TextPrivacyAnchor = styled(Anchor)(
    ({ theme }) => css`
    color: ${theme.colors.Light};
    font-size: ${theme.fontSizes.fxs};
    font-family: ${theme.fonts[0]};
    line-height: ${theme.lineHeights.lxs};
    margin: ${theme.space.base} ${theme.space.zero};
    text-decoration: underline;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
  
    `,
);

const BoxPrivacy = styled(Box)(
    ({ theme }) => css`
  
   margin-left:${theme.space.xs};
   margin-top: ${theme.space.sm};
   margin-bottom: ${theme.space.base};
  
    `,
);

export {
    SignupStyles,
    SignupFormStyles,
    TextPrivacy,
    TextPrivacyAnchor,
    BoxPrivacy,
};
