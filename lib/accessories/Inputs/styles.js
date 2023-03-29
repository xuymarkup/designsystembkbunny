import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    min-height: 35px;
    width: 100%;
    height: auto;
    position: relative;
    border: solid 2px ${theme.colors.Dark};
    border-radius: 5px;
    font-size: ${theme.fontSizes.fbase};
    display: flex;
    background: transparent;
`;

const White = ({ theme }) => css`
    ${common}
    background: ${theme.colors.gray};
`;

const Interaction = ({ theme }) => css`
    ${common}
    border-color: ${theme.colors.Interaction};
`;

const Done = ({ theme }) => css`
    ${common}
    border-color: ${theme.colors.Success};
`;

const Warning = ({ theme }) => css`
    ${common}
    border-color: ${theme.colors.Warning};
`;

const Error = ({ theme }) => css`
    ${common}
    border-color: ${theme.colors.Danger};
`;

const variant = variants("variant", {
    White,
    Interaction,
    Done,
    Warning,
    Error,
});

const Inputs = styled("input")(variant);

export default Inputs;
