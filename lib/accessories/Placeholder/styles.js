import styled, { css } from "styled-components";
import variants from "../../helpers/variants";
import Icons from "../Icons";

const common = ({ theme }) => css`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    padding-top: ${props => props.theme.aspectRatio[props.ratio]};
`;

const Solid = ({ theme }) => css`
    ${common}
    background: #cccccc;
`;
const Transparent = ({ theme }) => css`
    ${common}
    background: transparent;
`;
const Absolut = ({ theme }) => css`
    ${common}
    position: absolute;
`;
const variant = variants("variant", {
    Solid,
    Absolut,
    Transparent,
});

const PlaceholderStyles = styled("div")(variant);

const IconsStyles = styled(Icons)(
    ({ theme }) => css`
        fill: ${theme.colors.gray4};
        width: ${props => (props.size === "" ? "50px" : `${props.size}px`)};
        height: ${props => (props.size === "" ? "50px" : `${props.size}px`)};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (min-width: ${theme.breakpoints.lg}) {
            width: ${props => (props.size === "" ? "200px" : `${props.size}px`)};
            height: ${props => (props.size === "" ? "200px" : `${props.size}px`)};
        }
    `,
);

export { PlaceholderStyles, IconsStyles };
