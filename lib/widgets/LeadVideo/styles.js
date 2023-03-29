import styled, { css } from "styled-components";

const LeadVideoStyles = styled.section(
    ({ theme }) => css`
        margin: ${props => props.mt ? theme.space[props.mt]:theme.space.xl3} ${theme.space.zero};
        width: 100%;
        height: auto;
        display: block;
    `,
);

export default LeadVideoStyles;
