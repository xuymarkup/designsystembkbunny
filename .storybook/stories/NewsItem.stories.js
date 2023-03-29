import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import NewsItem from "../../lib/items/NewsItem";
import Mock from "./imageMock.json";
import newsitem from "../../lib/items/NewsItem/newsitem.json";

export default {
    title: "Desing System/items/NewsItem",
    component: NewsItem,
};

export const NEWSITEM = args => {
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
            <Title variant="h2">News Item</Title>
            <NewsItem ratio={aspect} src={SRC} news={newsitem} />
        </div>
    );
};
