import styled, { css } from "styled-components";
import IcomoonReact from "icomoon-react";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Solid = ({ theme }) => css`
    ${common}
    background: ${theme.colors.back};
    fill: ${theme.colors.Light};
`;

const Transparent = ({ theme }) => css`
    ${common}
    background: transparent;
    fill: ${theme.colors.Interaction};
`;

const Active = ({ theme }) => css`
    ${common}
    background: transparent;
    fill: ${theme.colors.Interaction};
`;

const Outline = ({ theme }) => css`
    ${common}
    background: transparent;
    fill: ${theme.colors.Interaction};
`;

const Inactive = ({ theme }) => css`
    ${common}
    background: transparent;
    fill: ${theme.colors.Light};
`;

const Footer = ({ theme }) => css`
    ${common}
    background: transparent;
    fill: ${theme.colors.Dark};
    opacity: 0.4;
`;

const variant = variants("variant", {
    Solid,
    Outline,
    Active,
    Inactive,
    Transparent,
    Footer,
});

const IconStyles = styled(IcomoonReact)(variant);

export default IconStyles;
