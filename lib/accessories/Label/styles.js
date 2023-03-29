import styled, { css } from "styled-components";

const LabelStyles = ({ theme }) => css`
    color: ${theme.colors.Dark};
    font-family: ${theme.fonts[2]};
    font-size: ${theme.fontSizes.fsm};
    margin-right: ${theme.space.md};
`;

const Label = styled("label")(LabelStyles);
export default Label;
