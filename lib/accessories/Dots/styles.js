import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const LeadGalleryItemDot = styled(Box)(
    ({ theme }) => css`
        height: 20px;
        overflow: hidden;
        width: 121px;
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.sm};
        display: flex;

        @media (min-width: ${theme.breakpoints.lg}) {
            display: none;
        }
    `,
);

const LeadGalleryItemDotStyle = styled(Box)(
    ({ theme }) => css`
        align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        height: ${props => (props.small ? "6px" : "10px")};
        width: ${props => (props.small ? "6px" : "10px")};
        margin: ${theme.space.zero} ${theme.space.xs};
        background: ${props => (props.active ? theme.colors.Interaction : theme.colors.grayfooter)};
    `,
);

const LeadGalleryItemDotTrack = styled(Box)(
    ({ theme }) => css`
        display: inline-flex;
        height: 100%;
        justify-content: center;
        min-width: 121px;
    `,
);

const Display = styled.span(
    () => css`
        display: none;
    `,
);

export { LeadGalleryItemDot, LeadGalleryItemDotStyle, LeadGalleryItemDotTrack, Display };
