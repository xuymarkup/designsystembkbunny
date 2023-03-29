import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import StatisticsItem from "../../lib/items/StatisticsItem";
import Mock from "./imageMock.json";
import statistics from "../../lib/items/StatisticsItem/statistics.json";
import statiscticstitle from "../../lib/items/StatisticsItem/statiscticstitle.json";

export default {
    title: "Desing System/Items/StatisticsItem",
    component: StatisticsItem,
};

export const STATISTICSITEM = args => {
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
            <Title variant="h2">StatisticsItem</Title>
            <StatisticsItem ratio={aspect} src={SRC} counts={statistics} points={statiscticstitle} />
        </div>
    );
};
