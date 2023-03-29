import React from "react";
import styled, { css } from "styled-components";
import Utils from "@televisadigital/nxtv-utilities";

import { Image, Placeholder, Title, Box, Text } from "accessories";

export default {
    title: "Desing System/Atoms/Images",
};

import Mock from "./imageMock.json";

const ImageContainer = styled(Box)(
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

const ImageDescription = styled(Box)(
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

const ImageTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const ImageCaption = styled(Text)(
    ({ theme }) => css`
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const SubTitleText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.graycataloge};
        padding-bottom: ${theme.space.base};
    `,
);

const ImageSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const ImageContent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const ImageText = styled(Text)(
    ({ theme }) => css`
        line-height: ${theme.lineHeights.llg};
        font-size: ${theme.fontSizes.fsm};
    `,
);

const PlaceholderBorder = styled(Placeholder)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        border: 1px #cccccc solid;
    `,
);

export const PLACEHOLDER = args => {
    return (
        <ImageContainer>
            <ImageDescription variant="Transparent">
                <ImageTitle variant="h2">Placeholder</ImageTitle>
                <ImageCaption>
                    An image placeholder is a dummy image that appears before the image to be
                    displayed. It is used in all widgets that have an image and can be used with all
                    aspects of images.
                </ImageCaption>
            </ImageDescription>
            <ImageContent variant="Transparent">
                <ImageSection variant="Transparent">
                    <ImageDescription variant="Transparent">
                        <SubTitleText variant="h2">Placeholder Solid</SubTitleText>
                        <ImageText>Placeholder with solid background.</ImageText>
                    </ImageDescription>
                    <Placeholder ratio="aspect1x1" variant="Solid" />
                </ImageSection>

                <ImageSection variant="Transparent">
                    <ImageDescription variant="Transparent">
                        <SubTitleText variant="h2">Placeholder Transparent</SubTitleText>
                        <ImageText>Placeholder without background color.</ImageText>
                    </ImageDescription>
                    <PlaceholderBorder ratio="aspect1x1" variant="Transparent" />
                </ImageSection>

                <ImageSection variant="Transparent">
                    <SubTitleText variant="h2">Placeholder Absolut</SubTitleText>
                    <ImageText>Placeholder with the position absolute.</ImageText>
                    <PlaceholderBorder ratio="aspect1x1" variant="Absolut" />
                </ImageSection>
            </ImageContent>
        </ImageContainer>
    );
};

export const IMAGE = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    console.log("SOURCES", SOURCES);
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    return (
        <ImageContainer>
            <ImageDescription variant="Transparent">
                <ImageTitle variant="h2">Aspect Images</ImageTitle>
                <ImageCaption>This image appears when using the accessory Image.</ImageCaption>
            </ImageDescription>
            <ImageContent variant="Transparent">
                <Image ratio={aspect} src={SRC} key="ejemplo" />
            </ImageContent>
        </ImageContainer>
    );
};

IMAGE.args = { count: 3 };
IMAGE.argTypes = {
    aspect: {
        control: {
            type: "select",
            options: [
                "aspect16x9",
                "aspect4x3",
                "aspect3x4",
                "aspect9x16",
                "aspect1x1",
                "aspectpanoramic",
            ],
        },
    },
    bsp: {
        control: {
            type: "select",
            options: ["large", "medium", "mobile-large", "thumbnail", "small", "x-large"],
        },
    },
};
