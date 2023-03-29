import React, { Fragment } from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { LandingCard } from "widgets";
import Title from "accessories/Title";
export default {
    title: "Desing System/Widgets/LandingCard",
};
import Mock from "./imageMock.json";
import torneos from "../../lib/widgets/LandingCard/torneos.json"

export const LANDINGCARD = args => {
    const { aspect = "aspect3x4", bsp = "medium" } = args;
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
            <Title variant="h2">LandingCard </Title>
            <LandingCard data={torneos} src={SRC} />
        </div>
    );
};
