import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Interaction)};
    text-decoration: none;
    font-family: ${theme.fonts[1]};
    font-size: ${props => (props.size ? theme.fontSizes[props.size] : theme.fontSizes.fbase)};
    cursor: pointer;
    min-height: 48px;
`;

const Active = ({ theme }) => css`
    ${common}
    border-bottom: solid 2px;
    border-color: ${theme.colors.Interaction};
`;

const Focus = () => css`
    ${common}

    &:hover {
        opacity: 0.7;
    }
`;

const variant = variants("variant", {
    Active,
    Focus,
});

const Anchor = styled("a")(variant);

export default Anchor;
