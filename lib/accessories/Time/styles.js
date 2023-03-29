import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    color: ${props => (props.color ? theme.colors[props.color] : theme.colors.text)};
`;

const Airtime = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fsm};
`;

const Duration = ({ theme }) => css`
    ${common}
    font-size: ${theme.fontSizes.fxs};
    font-family:${theme.fonts[3]};
`;

const DurationLight = ({ theme }) => css`
    ${common}
    background-color: transparent;
    color: ${theme.colors.Dark};
    height: 22px;
    font-weight: normal;
    padding: ${theme.space.sm};
    font-size: ${theme.fontSizes.fxs};
`;

const variant = variants("variant", {
    Airtime,
    Duration,
    DurationLight,
});

const Time = styled("time")(variant);

export default Time;
