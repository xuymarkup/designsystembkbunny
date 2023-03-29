import styled, { css } from "styled-components";
import { Title, Box, Anchor, Inputs, Icons, Text } from "../../accessories";
import FormStyles from "../../accessories/Form/styles";
import { ButtonStyles } from "../../accessories/Button/styles";

const HeaderStyles = styled.div(
    ({ theme }) => css`
        background-color: ${theme.colors.gray};
        position: relative;
        width: 100%;
        height: 60px;
        z-index: 15;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

        ${FormStyles} {
            min-width: auto;
        }
    `,
);
const HeaderGrid = styled(Box)(
    ({ theme }) => css`
        display: ${props => (props.active ? "grid" : "none")};
        grid-template-columns: 100%;
        grid-template-rows: 60px 1fr auto;
        grid-template-areas:
            "logo"
            "navigation"
            "dinamic";
        position: fixed;
        background-color: ${theme.colors.darkfooter};
        width: 100vw;
        max-width: 1280px;
        height: 100vh;
        top: 0;
        overflow-y: scroll;
        margin: 0 auto;

        @media (min-width: 1025px) {
            display: grid;
            grid-template-rows: 60px;
            grid-template-columns: 15% 68% 17%;
            grid-template-areas: "logo navigation dinamic";
            position: initial;
            width: 100%;
            height: auto;
            background: none;
            overflow-y: hidden;
            padding-bottom: 9px;
        }
    `,
);

const HeaderMobile = styled(Box)`
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: flex-end;

    @media (min-width: 1025px) {
        display: none;
    }

    ${ButtonStyles} {
        margin: 0;
    }
`;

const HeaderTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        text-transform: uppercase;
    `,
);

const HeaderLogo = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        grid-area: logo;
        height: 60px;
        justify-content: flex-end;
        margin: 0;
        background: ${props => (props.color ? theme.colors.gray : "transparent")};

        @media (min-width: 1025px) {
            margin: 0.375rem auto 0.1875rem;
        }

        ${ButtonStyles} {
            @media (min-width: 1025px) {
                display: none;
            }
        }
    `,
);

const LogoAnchor = styled(Anchor)`
    position: absolute;
    left: 2%;

    @media (min-width: 1025px) {
        position: relative;
        left: inherit;
    }
`;

const HeaderNavigation = styled(Box)`
    grid-area: navigation;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 1025px) {
        align-items: center;
        justify-content: center;
    }
`;

const HeaderLinkContainer = styled(Box)`
    order: 2;
    width: 100%;
    padding: 0.75rem;

    @media (min-width: 1025px) {
        display: flex;
        justify-content: center;
        width: auto;
        padding: 0 0.5625rem;
    }
`;

const HeaderLink = styled(Anchor)(
    ({ theme }) => css`
        display: flex;
        position: relative;
        align-items: center;
        font-family: ${theme.fonts[0]};
        position: relative;
        font-weight: 700;
        letter-spacing: 1px;
        text-rendering: optimizeLegibility;
        font-size: ${theme.fontSizes.fbase};
        line-height: 2.1rem;
        width: 100%;
        text-transform: uppercase;
        margin: 0.75rem;
        color: ${props => (props.active ? theme.colors.Interaction : theme.colors.gray)};

        &:after {
            display: block;
            content: "";
            height: 1px;
            width: 100%;
            position: absolute;
            bottom: 0px;
            background: ${props => (props.active ? theme.colors.Interaction : "transparent")};
        }

        @media (min-width: 1025px) {
            width: auto;
            font-size: ${theme.fontSizes.fxs};
            color: ${props => (props.active ? theme.colors.Interaction : theme.colors.text)};

            &:hover {
                opacity: 0.5;
            }
        }
    `,
);

const HeaderSubLink = styled(HeaderLink)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.flg};

        @media (min-width: 1025px) {
            display: none;
        }
    `,
);

const SearchStyles = styled.input(
    ({ theme }) => css`
        width: 100%;
        background: ${theme.colors.gray};
        border: 1px solid #079f70;
        box-sizing: border-box;
        border-radius: 10px;
        max-width: 150px;
        height: 35px;
        padding: ${theme.space.zero} ${theme.space.xl};
    `,
);

const HeaderLiveLink = styled(HeaderLink)(
    ({ theme }) => css`
        @keyframes pulsar {
            0% {
                height: 7px;
                opacity: 0.2;
                width: 7px;
            }

            50% {
                height: 8px;
                opacity: 1;
                width: 8px;
            }

            100% {
                height: 7px;
                opacity: 0.2;
                width: 7px;
            }
        }
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &::before {
            background: red;
            animation-play-state: running;
            animation: pulsar 2s 0.5s ease-in-out infinite;
            border-radius: 50%;
            content: "";
            display: inline-flex;
            height: 7px;
            width: 7px;
            margin-right: ${theme.space.xs};

            @media (min-width: 1025px) {
                justify-content: flex-start;
            }
        }
    `,
);

const HeaderLinkBox = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        text-align: right;
        margin: 0;
        margin: ${theme.space.zero};

        @media (min-width: 1025px) {
            text-align: center;
            width: auto;
        }
    `,
);

const HeaderDinamic = styled(Box)(
    ({ theme }) => css`
        grid-area: dinamic;
        position: initial;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        padding-top: ${theme.space.zero};
        padding: 0.75rem;

        @media (min-width: 1025px) {
            justify-content: space-around;
            padding: 0;
        }
    `,
);

const InnerSearch = styled(Box)`
    display: flex;
    order: 1;
    width: 100%;
    padding: 0.75rem;
    flex-wrap: wrap;

    @media (min-width: 1025px) {
        display: none;
    }
`;

const InnerSearchContainer = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 5px 5px 5px 15px;
        background: ${theme.colors.gray};
        border-radius: 15px;
    `,
);

const InnerSearchBox = styled(Box)(
    ({ theme }) => css`
        flex-grow: 1;
        box-sizing: inherit;
    `,
);
const ArrowStyles = styled(Icons)(
    ({ theme }) => css`
        transform: rotate(90deg);
    `,
);

const InnerSearchInput = styled(Inputs)(
    ({ theme }) => css`
        align-self: stretch;
        background: none;
        border: 0;
        box-sizing: content-box;
        color: ${theme.colors.gray3};
        flex-grow: 1;
        width: 100%;
        padding: 0 0.75rem;
        margin: ${theme.space.zero};
        line-height: 1.225rem;

        &::placeholder {
            color: ${theme.colors.gray};
            opacity: 1;
        }
    `,
);

const HeaderSocial = styled(Box)(
    ({ theme }) => css`
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 0.75rem;
        padding: 0.75rem ${theme.space.zero};

        @media (min-width: 1025px) {
            display: none;
        }
    `,
);

const OpenSearch = styled(Box)`
    visibility: collapse;

    @media (min-width: 1025px) {
        visibility: visible;
        justify-content: flex-end;
    }
`;

const LogoDesktop = styled(Icons)`
    width: 160px;
`;

const SocialText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        text-transform: uppercase;
        font-family: ${theme.fonts[3]};
        font-size: ${theme.fontSizes.fsm};
        margin-bottom: ${theme.space.base};

        @media (min-width: 1025px) {
            display: none;
        }
    `,
);

const HeaderStylesAMP = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: 50px;
        justify-content: center;
        margin: 0 auto;
        align-items: center;
        background-color: ${theme.colors.Interaction};
    `,
);

export {
    HeaderStyles,
    HeaderGrid,
    HeaderMobile,
    HeaderTitle,
    HeaderLogo,
    HeaderLink,
    HeaderSubLink,
    HeaderLiveLink,
    HeaderLinkContainer,
    HeaderLinkBox,
    HeaderNavigation,
    HeaderDinamic,
    InnerSearch,
    InnerSearchContainer,
    InnerSearchBox,
    InnerSearchInput,
    HeaderSocial,
    OpenSearch,
    LogoDesktop,
    SocialText,
    HeaderStylesAMP,
    LogoAnchor,
    SearchStyles,
    ArrowStyles,
};
