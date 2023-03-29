import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    font-weight: bold;
    color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Dark)};
    text-align: ${props => (props.align ? props.align : "left")};
`;

const h1 = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fxl3};
    line-height: ${theme.lineHeights.lxl3};
`;

const h2 = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fxl2};
    line-height: ${theme.lineHeights.lxl2};
`;

const h3 = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fxxl};
    line-height: ${theme.lineHeights.lxxl};
`;

const h4 = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fxl};
    line-height: ${theme.lineHeights.lxl};
`;

const h5 = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.flg};
    line-height: ${theme.lineHeights.llg};
`;

const h6 = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fmd};
    line-height: ${theme.lineHeights.llg};
`;

const variant = variants("variant", {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
});

const Title = styled("h1")(variant);

export default Title;
