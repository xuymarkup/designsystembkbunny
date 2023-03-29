import React, { Fragment } from "react";
import Utils from "../../lib/helpers/utils";

import ItemLeague from "../../lib/items/ItemLeague";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/ItemLeague",
};

export const ITEMLEAGUE = args => {
    const { aspect = "aspect1X1", bsp = "thumbnail" } = args;
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
    return <ItemLeague ratio={aspect} image={SRC} {...args} />;
};

ITEMLEAGUE.args = {
    title: "Partidos Internacionales",
    uri: "./",
};

ITEMLEAGUE.argTypes = {
    title: {
        description: "League name",
        table: {
            defaultValue: {
                summary: "Partidos Internacionales",
            },
        },
        control: {
            type: "text",
        },
    },
    uri: {
        description: "Destination page",
        table: {
            defaultValue: {
                summary: "./",
            },
        },
        control: {
            type: "text",
        },
    },
};