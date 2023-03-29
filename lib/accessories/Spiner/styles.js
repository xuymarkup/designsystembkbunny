import styled, { css } from "styled-components";
import { Box, Text} from "../../accessories";

const LoaderScroll  = styled(Box)(
    ({theme}) => css`
    margin: ${theme.space.lg} ${theme.space.auto};
    padding: ${theme.space.sm} ${theme.space.zero};
    width: 100%;
    background-color:${theme.colors.gray};
    `,
);

const LoaderScrollContainer  = styled(Box)(
    ({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 280px;
    margin: ${theme.space.auto};
    `,
);

const LoaderScrollSpinner  = styled(Box)(
    ({theme}) => css`
    width: 80px;
    height: 80px;
    margin: ${theme.space.auto};
    background: transparent;
    align-items: center;
    display: flex;

    @keyframes estrellas {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0.4;
  }
    }
    `,
);

const LoaderScrollText = styled(Text)(
    ({theme}) => css`
    text-align: center;
    font-family: sans-serif;
    font-size: ${theme.fontSizes.fxs};
    text-transform: uppercase;
    color: ${theme.colors.gray3};
    `,
);

const LoaderPath = styled.path(
    ({}) => css`
    fill: rgba(0, 0, 0, 0.5);
    animation: estrellas 0.8s infinite;
    animation-delay: ${props => (props.animation ? props.animation:"0.005")}s;
    `,
);

export {LoaderScroll, LoaderScrollContainer,LoaderScrollSpinner, LoaderScrollText, LoaderPath};