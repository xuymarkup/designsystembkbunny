import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title, Box } from "accessories";
import Mock from "./imageMock.json";

import EventRemminder from "../../lib/widgets/EventRemminder";

export default {
    title: "Desing System/Widgets/EventRemminder",
};

export const EVENTREMMINDER = args => {
    const { aspect = "aspect16x9", bsp = "mobile-large" } = args;
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
            <Title variant="h2">EventRemminder</Title>
                <EventRemminder ratio={aspect} src={SRC} {...args} />
        </div>
    );
};

export const EVENTREMMINDERTEAMS = args => {
    const { aspect = "aspect16x9", bsp = "mobile-large" } = args;
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
            <Title variant="h2">EventRemminder Teams</Title>
                <EventRemminder ratio={aspect} src={SRC} teams={false} {...args} />
        </div>
    );
};

export const EVENTREMMINDERSTART = args => {
    const { aspect = "aspect16x9", bsp = "mobile-large" } = args;
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
            <Title variant="h2">EventRemminder Start</Title>
                <EventRemminder ratio={aspect} src={SRC} counter={false} {...args} />
        </div>
    );
};
