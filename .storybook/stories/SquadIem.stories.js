import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "accessories";

import SquadItem from "../../lib/items/SquadItem";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/SquadItem",
    component: SquadItem,
};

export const SQUADITEM = args => {
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
            <Title variant="h2">Squad Item</Title>
            <SquadItem {...args} />
        </div>
    );
};

SQUADITEM.args = {
    title: "David de Gea",
    number: "1",
    nation: "España",
};

SQUADITEM.argTypes = {
    title: {
        description: "Player name",
        table: {
            defaultValue: {
                summary: "David de Gea",
            },
        },
        control: {
            type: "text",
        },
    },
    number: {
        description: "Player number",
        table: {
            defaultValue: {
                summary: "1",
            },
        },
        control: {
            type: "text",
        },
    },
    nation: {
        description: "Player nationality",
        table: {
            defaultValue: {
                summary: "España",
            },
        },
        control: {
            type: "text",
        },
    },
};