import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "accessories";

import CommentaryItem from "../../lib/items/CommentaryItem";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/CommentaryItem",
    component: CommentaryItem,
};

export const COMMENTARYITEM = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
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
        <div>
            <Title variant="h2">Commentary Item</Title>
            <CommentaryItem ratio={aspect} src={SRC} {...args} />
        </div>
    );
};

COMMENTARYITEM.args = {
    title: "Tarjeta amarilla Beckham",
    status: "38",
    description: "David Beckhamha sido amonestado con tarjeta amarilla por juego peligroso.",
    icon: "YouTube",
};

COMMENTARYITEM.argTypes = {
    title: {
        description: "Comment title",
        table: {
            defaultValue: {
                summary: "Tarjeta amarilla Beckham",
            },
        },
        control: {
            type: "text",
        },
    },
    status: {
        description: "Comment time",
        table: {
            defaultValue: {
                summary: "38",
            },
        },
        control: {
            type: "text",
        },
    },
    description: {
        description: "Comment description",
        table: {
            defaultValue: {
                summary: "David Beckhamha sido amonestado con tarjeta amarilla por juego peligroso.",
            },
        },
        control: {
            type: "text",
        },
    },
    icon: {
        description: "Comment icon",
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