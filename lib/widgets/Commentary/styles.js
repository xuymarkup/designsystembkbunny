import styled, { css } from "styled-components";
import { Box, Title, Text } from "../../accessories";

const CommentaryContainerStyles = styled.section(
    ({ theme }) => css`
        height: 390px;
        margin: ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.base};
        border-radius: 10px;
        overflow: hidden;

        @media (min-width: ${theme.breakpoints.lg}) {
            height: 650px;
            padding: ${theme.space.zero};
    }
    `,
);

const CommentaryContainerBoxStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        max-width: 575px;
        overflow-x: scroll;
    `,
);

const CommentaryTitle = styled(Title)(
    ({ theme }) => css`
                font-size: ${theme.fontSizes.fmd};
                color: ${theme.colors.Dark};
                font-family: ${theme.fonts[2]};
                font-weight: normal;
                margin-top: ${theme.space.xxl};
                margin-left: ${theme.space.md};
    `,
);

const BoxCommentaryTitle = styled(Box)(
    ({ theme }) => css`
        display: flex;
        background: ${theme.colors.Interaction};
        cursor: pointer; 
        height: 40px;
        border-radius: 10px 10px 0px 0px;
        width: 100%;
        max-width: 576px;
    `,
);

const TitleCommentaryStyles = styled(Text)(
    ({ theme }) => css`
    font-size: ${theme.fontSizes.fsm};
    text-transform: capitalize;
    font-weight: bold;
    margin-left: ${theme.space.xl};
    color: ${theme.colors.Light};
    font-family: ${theme.fonts[2]};
    width: 50%;
    @media (min-width: ${theme.breakpoints.lg}) {
    font-size: ${theme.fontSizes.fmd};

    }

    `,
);


export { CommentaryContainerStyles, CommentaryTitle, BoxCommentaryTitle, TitleCommentaryStyles, CommentaryContainerBoxStyles };
