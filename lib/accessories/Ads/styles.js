import styled, { css } from "styled-components";

const AdsCommon = ({ theme }) => css`
    margin: ${theme.space.xl3} ${theme.space.zero};
    box-sizing: borderbox;
    align-content: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media (min-width: ${theme.breakpoints.xl}) {
        box-shadow: none;
        background: none;
    }

    &::before {
        content: "PUBLICIDAD";
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-family: sans-serif;
        justify-content: center;
        width: 100%;
        height: 20px;
        color: gray;
        align-items: center;
        padding-top: ${theme.space.md};
        margin-bottom: ${theme.space.md};
    }
`;

const AdsStyles = styled("div")(AdsCommon);

export default AdsStyles;
