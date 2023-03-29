import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";

import EnhancementVideo from "../../lib/widgets/EnhancementVideo";

import Mock from "./imageMock.json";

export default {
    title: "Desing System/enhancement/EnhancementVideo",
    component: EnhancementVideo,
};

export const ENHANCEMENTVIDEO = args => {
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
        <div>
            <Title variant="h2">Enhancement Video</Title>
            <EnhancementVideo ratio={aspect} src={SRC} />;
        </div>
    );
};
