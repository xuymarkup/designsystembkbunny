import styled, { css } from "styled-components";
import Title from "../../accessories/Title";

const ContentCarouselStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        padding-top: ${theme.space.xl3};
        padding-bottom: ${theme.space.xl3};
    `,
);

const ContentCarouselTitleStyles = styled(Title)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.lg};
        max-width: 1024px;
        margin-left: ${theme.space.xs};
        margin-right: auto;
        color: ${props => (props.color ? theme.colors[props.color] : theme.colors.Interaction)};
        font-family: ${theme.fonts[3]};
        text-align: ${props => (props.center ? "center" : "left")};
        position: relative;
    `,
);

const ContentCarouselThumbStyles = styled.div(
    ({ theme }) => css`
        display: flex;
        margin-left: ${theme.space.xs};
        margin-right: ${theme.space.xs};
        padding-bottom: ${theme.space.md};
        width: auto;
    `,
);

export { ContentCarouselStyles, ContentCarouselTitleStyles, ContentCarouselThumbStyles };
