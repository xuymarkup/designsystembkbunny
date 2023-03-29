import React from "react";
import { BracketItem } from "../../lib/items";
import { Box } from "../../lib/accessories";
import Utils from "../../lib/helpers/utils";

export default {
    title: "Desing System/Items/Bracket",
    component: BracketItem,
};

import Mock from "./imageMock.json";

export const BRACKETITEM = args => {
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
        <Box variant="Flex" w="300px" style={{ margin: "auto" }}>
            <BracketItem src={SRC} {...args} />
        </Box>
    );
};

BRACKETITEM.args = {
    teamLocal: "LOC",
    teamAway: "AWY",
    scoreLocal: 2,
    scoreAway: 1,
    penLocal: 5,
    penAway: 4,
    pen: true,
    date: "12 Dic 2022",
    stadium: "Qatar arena",
};
