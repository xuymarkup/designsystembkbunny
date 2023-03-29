import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import Commentary from "../../lib/widgets/Commentary";

import Mock from "./imageMock.json";
import commentary from "../../lib/widgets/Commentary/commentary.json";

export default {
    title: "Desing System/Widgets/Commentary",
    component: Commentary,
};

export const COMMENTARY = args => {
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
            <Title variant="h2">Commentary</Title>
            <Commentary ratio={aspect} src={SRC} matches={commentary} />
        </div>
    );
};