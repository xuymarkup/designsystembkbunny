import React, { Fragment } from "react";
import Utils from "../../lib/helpers/utils";

import ItemCarousel from "../../lib/items/ItemCarousel";
import SkeletonCarousel from "../../lib/items/ItemCarousel/SkeletonCarousel";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/Carousel",
};

export const ITEMCAROUSEL = args => {
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
    return <ItemCarousel ratio={aspect} image={SRC} {...args} />;
};

export const CAROUSELITEMSKELETON = () => {
    return <SkeletonCarousel />;
};

ITEMCAROUSEL.args = {
    gallery: "11 fotos",
    publishDate: "11 feb ",
    uri: "./",
    section: "una familia de diez",
    title: "un titulo para las fotos",
    isAmp: false,
    video: "",
};

ITEMCAROUSEL.argTypes = {
    gallery: {
        description: "Number of photos in the gallery",
        table: {
            defaultValue: {
                summary: "11 fotos",
            },
        },
        control: {
            type: "text",
        },
    },
    publishDate: {
        description: "Publication date",
        table: {
            defaultValue: {
                summary: "11 feb",
            },
        },
        control: {
            type: "text",
        },
    },
    uri: {
        description: "Destination uri",
        table: {
            defaultValue: {
                summary: "./",
            },
        },
        control: {
            type: "text",
        },
    },
    section: {
        description: "Section name",
        table: {
            defaultValue: {
                summary: "una familia de diez",
            },
        },
        control: {
            type: "text",
        },
    },
    title: {
        description: "Title",
        table: {
            defaultValue: {
                summary: "un titulo para las fotos",
            },
        },
        control: {
            type: "text",
        },
    },
    isAmp: {
            description: "AMP State",
            table: {
                defaultValue: {
                    summary: "False",
                },
            },
            control: {
                type: "boolean",
            },
    },
    video: {
        description: "Video text",
        table: {
            defaultValue: {
                summary: "",
            },
        },
        control: {
            type: "text",
        },
    },
};