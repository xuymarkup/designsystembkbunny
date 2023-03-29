import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    width: 100%;
    height: 40px;
    display: block;
    align-items: center;
    margin:${theme.space.md};
    font-size: ${theme.fontSizes.fbase};
    font-family: 0;
    @media (min-width: ${theme.breakpoints.xl}) {
            width: 300px;
        }
`;

const Solid = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Interaction};
    position: relative;
`;

const Secondary = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Secondary};
    position: relative;
`;

const White = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Light};
    position: relative;
`;

const Black = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Dark};
    position: relative;
`;

const Done = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Success};
    position: relative;
`;

const Warning = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Warning};
    position: relative;
`;

const Error = ({ theme }) => css`
    ${common}
    background: ${theme.colors.Danger};
    position: relative;
`;



const variant = variants("variant", {
    Solid,
    Secondary,
    White,
    Black,
    Done,
    Warning,
    Error,

});

const Color = styled("div")(variant);
export default Color;
