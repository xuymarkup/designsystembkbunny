import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import StandingItem from "../../lib/items/StandingItem";
import Mock from "./imageMock.json";
import standingitem from "../../lib/items/StandingItem/standingitem.json";

export default {
    title: "Desing System/Items/StandingItem",
    component: StandingItem,
};

export const STANDINGITEM = args => {
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
            <Title variant="h2">StandingItem</Title>
            <StandingItem ratio={aspect} src={SRC} counts={standingitem} />
        </div>
    );
};
