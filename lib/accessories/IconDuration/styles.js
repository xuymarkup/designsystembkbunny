import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    color: ${theme.colors.Interaction};
    position: absolute;
    bottom: 0;
`;

const Solid = ({ theme }) => css`
    ${common}
    background: rgba(0,0,0,0.7);
    color: ${theme.colors.Dark};
`;

const Transparent = ({ theme }) => css`
    ${common}
    background: transparent;
    color: ${theme.colors.Dark};
`;

const variant = variants("variant", {
    Transparent,
    Solid,
});

const IconDurationStyles = styled("div")(variant);

export default IconDurationStyles;
