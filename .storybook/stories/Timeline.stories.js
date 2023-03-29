import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "../../lib/accessories";
import Timeline from "../../lib/widgets/Timeline";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Widgets/Timeline",
};

export const TIMELINE = args => {
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
            <Title variant="h2">Timeline</Title>
            <Timeline ratio={aspect} src={SRC} {...args} />
            <Title variant="h2">Timeline</Title>
            <Timeline ratio={aspect} src={SRC} widthExtra={50} {...args} />
            <Title variant="h2">Timeline</Title>
            <Timeline ratio={aspect} src={SRC} widthPenal={20} {...args} />
            <Title variant="h2">Timeline</Title>
            <Timeline ratio={aspect} src={SRC} widthExtra={50} widthPenal={10} {...args} />
        </div>
    );
};
TIMELINE.args = {
    progress: 90,
};
TIMELINE.argTypes = {
    progress: {
        control: {
            type: "range",
            min: 0,
            max: 100,
        },
        description: "Input size",
        defaultValue: 0,
        table: {
            defaultValue: { summary: 0 },
        },
    },
};
