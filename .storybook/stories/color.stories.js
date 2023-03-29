import React, { Fragment } from "react";
import styled, { css } from "styled-components";

import { Title, Text, Box } from "accessories";
import { Color } from "../../lib/accessories";

export default {
    title: "Desing System/Atoms/Color",
};

const BoxColor = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const ColorDescription = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const TitleColors = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
    `,
);

const CaptionColors = styled(Text)(
    ({ theme }) => css`
        padding-top: ${theme.space.lg};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const ColorContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
            align-items: flex-start;
            max-width: 1024px;
            margin-top: ${theme.space.xxl};
        }
    `,
);

const ColorStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        min-height: 350px;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
    `,
);

const ColorStyleForm = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        min-height: 350px;
        padding-right: ${theme.space.lg};
        padding-left: ${theme.space.lg};
    `,
);

const ColorsType = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        color: ${theme.colors.graycataloge};
        line-height: ${theme.lineHeights.lsm};
        text-align: left;
        padding-bottom: ${theme.space.lg};
    `,
);

const ColorDescriptionContainer = styled(Box)(
    ({ theme }) => css`
        margin-bottom: ${theme.space.xxl};
    `,
);

const SubTitleColors = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.graycataloge};
        padding-bottom: ${theme.space.base};
    `,
);

const ColorDrop = styled(Color)(
    ({ theme }) => css`
        margin-left: ${theme.space.zero};
        border: 1px #cccccc solid;
    `,
);

export const COLOR = () => {
    return (
        <BoxColor variant="Transparent">
            <ColorDescription variant="Transparent">
                <TitleColors variant="h2">Color</TitleColors>
                <CaptionColors>
                    The color system primarily defines the basic color palette, the neutral color
                    palette, and the data display color palette in the layout.
                </CaptionColors>
            </ColorDescription>

            <ColorContainer variant="Transparent">
                <ColorStyle variant="Transparent">
                    <ColorsType variant="h2">Theme Colors </ColorsType>

                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h2">Interaction Color</SubTitleColors>
                        <ColorDrop />
                    </ColorDescriptionContainer>

                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h3">Secondary Color</SubTitleColors>
                        <ColorDrop variant="Secondary" />
                    </ColorDescriptionContainer>

                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h3">White</SubTitleColors>
                        <ColorDrop variant="White" />
                    </ColorDescriptionContainer>

                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h3">Black</SubTitleColors>
                        <ColorDrop variant="Black" />
                    </ColorDescriptionContainer>
                </ColorStyle>
            </ColorContainer>

            <ColorDescription variant="Transparent">
                <TitleColors variant="h2">Form Color</TitleColors>
                <CaptionColors>
                    The main colors of all our ui are used in the forms, they never change therefore
                    they are the same in all the ui and their function is to communicate to the user
                    the status of the component, be it something positive, negative or an alert
                    message.
                </CaptionColors>
            </ColorDescription>
            <ColorContainer>
                <ColorStyleForm variant="Transparent">
                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h3">Done</SubTitleColors>
                        <ColorDrop variant="Done" />
                    </ColorDescriptionContainer>

                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h3">Warning</SubTitleColors>
                        <ColorDrop variant="Warning" />
                    </ColorDescriptionContainer>

                    <ColorDescriptionContainer variant="Transparent">
                        <SubTitleColors variant="h3">Error</SubTitleColors>
                        <ColorDrop variant="Error" />
                    </ColorDescriptionContainer>
                </ColorStyleForm>
            </ColorContainer>
        </BoxColor>
    );
};
