import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import Utils from "../../lib/helpers/utils";

import { Title, Anchor, Box, Image, Carousel, Text } from "accessories";

export default {
    title: "Desing System/Atoms/Carousel",
};

import Mock from "./imageMock.json";

const CarouselContainer = styled(Box)(
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

const CarouselDescription = styled(Box)(
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

const CarouselTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const CarouselCaption = styled(Text)(
    ({ theme }) => css`
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const CarouselContent = styled(Box)(
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

export const CAROUSEL = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    return (
        <CarouselContainer>
            <CarouselDescription variant="Transparent">
                <CarouselTitle variant="h2">Carousel</CarouselTitle>
                <CarouselCaption>
                    Displays a handful of relevant course cards the user can click or scroll through
                    horizontally.
                </CarouselCaption>
            </CarouselDescription>
            <CarouselContent variant="Transparent">
                <Carousel>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                    <Anchor
                        href="http://google.com"
                        style={{ width: "258px", marginRight: "4px", flex: "0 0 auto" }}
                        aria-label="link"
                    >
                        <Image ratio={aspect} src={SRC} key="ejemplo" />
                    </Anchor>
                </Carousel>
            </CarouselContent>
        </CarouselContainer>
    );
};

CAROUSEL.args = {
    arrow: "Transparent",
    children: null,
    arrowsize: 74,
};
CAROUSEL.argTypes = {
    arrow: {
        description: "Button variant",
        table: {
            defaultValue: {
                summary: "Transparent",
            },
        },
        control: {
            type: "text",
        },
    },
    children: {
        description: "Node",
        table: {
            defaultValue: {
                summary: "null",
            },
        },
        control: {
            type: "text",
        },
    },
    arrowsize: {
        description: "Icon size",
        table: {
            defaultValue: {
                summary: "74",
            },
        },
        control: {
            type: "number",
        },
    },
};