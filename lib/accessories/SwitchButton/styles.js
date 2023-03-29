import styled, { css, keyframes } from "styled-components";

const SwitchButtonStyles = ({ theme }) => css`
    opacity: 0;
    width: 0;
    height: 0;
    z-index: -1;
`;
const SwitchStyles = styled.input.attrs({ type: "checkbox" })(SwitchButtonStyles);
const LabelStyles = styled("label")(
    ({ theme }) => css`
        background-color: ${props =>
            props.disabled ? theme.colors.Interaction : theme.colors[props.colorDisabled]};
        position: relative;
        display: inline-block;
        width: ${props => props.w ? props.w : "60px"};
        height: ${props => props.h ? props.h : "34px"};
        border-radius: ${props => props.h ? props.h : "34px"};
    `,
);
const CircleStyles = styled("div")(
    ({ theme }) => css`
        position: absolute;
        cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.4s;

        &::before {
            position: absolute;
            content: "";
            height: ${props => props.circle ? props.circle  : "26px"};
            width: ${props => props.circle ? props.circle  : "26px"};
            left: 4px;
            bottom: 4px;
            background-color: ${theme.colors.gray};
            transition: 0.4s;
            border-radius: 50%;
        }

        ${SwitchStyles}:checked + & {
            background-color: ${theme.colors.Interaction};
            border-radius: ${props => props.h ? props.h : "34px"};
        }

        ${SwitchStyles}:checked + &::before {
            transform: translateX(${props => props.circle ? props.circle  : "26px"});
        }

        ${SwitchStyles}:focus + & {
            box-shadow: 0 0 0.1em ${props => props.colorActive ? theme.colors[props.colorActive]  : theme.colors.Interaction};
        }

        ${SwitchStyles}:disabled + & {
            pointer-events: none;
            background: ${props => props.colorDisabled ? theme.colors[props.colorDisabled]  : theme.colors.grayfooter};
            border-radius: ${props => props.h ? props.h : "34px"};
        }
    `,
);

export { SwitchStyles, CircleStyles, LabelStyles };
