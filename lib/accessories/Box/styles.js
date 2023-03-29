import styled, { css } from "styled-components";
import styledMap from "../../helpers/stylemap";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    width: ${props => (props.w ? props.w : "100%")};
    height: ${props => (props.h ? props.h : "auto")};
    display: block;
    align-items: center;
    margin: ${props => (props.my ? props.theme.space[props.my] : null)} 0;
    background: ${props => (props.color ? theme.colors[props.color] : "transparent")};
    padding: ${props => (props.p ? props.theme.space[props.p] : 0)};
    border-radius: ${props => (props.br ? props.br : "0px")};
    position: relative;
`;

const Solid = ({ theme }) => css`
    ${common}
    background: ${props => (props.color ? theme.colors[props.color] : theme.colors.Light)};
`;

const Transparent = () => css`
    ${common}
    background: transparent;
`;

const Flex = ({ theme }) => css`
    ${common}
    display: flex;
    justify-content: ${styledMap("align", {
        left: "flex-start",
        right: "flex-end",
        center: "center",
        between: "space-between",
        around: "space-around",
        default: "flex-start",
    })};
`;

const Space = ({ theme }) => css`
    ${common}
    margin: ${theme.space.lg};
`;

const Auto = ({ theme }) => css`
    ${common}
    width: auto;
`;

const variant = variants("variant", {
    Solid,
    Space,
    Flex,
    Transparent,
    Auto,
});

const Box = styled("div")(variant);
export default Box;
