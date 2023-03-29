import React, { useEffect, useState } from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "accessories";
import HighImpactItem from "../../lib/items/HighImpactItem";
import highimpactitem from "../../lib/items/HighImpactItem/highimpactitem.json";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/items/HighImpactItem",
    component: HighImpactItem,
};

export const HIGHIMPACTITEM = args => {
    const { aspect = "aspect16x9", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: "mobile-large",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: bsp,
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: IMG[0],
        mobile: IMG[1],
    };
    const [ratio, setRatio] = useState("aspect3x4");
    useEffect(() => {
        setRatio(window.innerWidth > 1024 ? "aspect16x9" : "aspect3x4");
    });

    return (
        <div>
            <Title variant="h2">HighImpactItem</Title>
            <HighImpactItem ratio={ratio} src={SRC} datas={highimpactitem} />
        </div>
    );
};
