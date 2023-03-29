import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "accessories";

import Standing from "../../lib/widgets/Standing";
import standing from "../../lib/widgets/Standing/standing.json";
import standingteam from "../../lib/widgets/Standing/standingteam.json";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Widgets/Standing",
    component: Standing,
};

export const STANDING = args => {
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
            <Title variant="h2">Standing</Title>
            <Standing ratio={aspect} src={SRC} datas={standing} teams={standingteam} {...args} />
        </div>
    );
};
