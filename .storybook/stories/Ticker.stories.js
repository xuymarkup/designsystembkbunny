import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "../../lib/accessories";
import Ticker from "../../lib/widgets/Ticker";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Widgets/Ticker",
};

export const TICKER = args => {
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
            <Title variant="h2">Ticker</Title>
            <Ticker ratio={aspect} src={SRC} />
        </div>
    );
};
