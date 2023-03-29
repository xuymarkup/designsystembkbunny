import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import Mock from "./imageMock.json";

import TickerFull from "../../lib/contentTypes/TickerFull";

export default {
    title: "Desing System/Template/TickerFull",
};

export const TICKERFULL = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
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
            <TickerFull ratio={aspect} src={SRC} />
        </div>
    );
};












