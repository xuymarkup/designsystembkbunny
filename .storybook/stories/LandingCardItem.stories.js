import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title, Box } from "accessories";
import Mock from "./imageMock.json";

import LandingCardItem from "../../lib/items/LandingCardItem";
import Champions from "../../assets/landing card/img-landing-card-1-225x300.png";

export default {
    title: "Desing System/items/LandingCardItem",
};

export const LANDINGCARDITEM = args => {
    const { aspect = "aspect3x4", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const SRC = {

        mobile: {height:"137px", width:"100px", query:"(min-width: 0px)", srcSet:Champions},
    };
    return (
        <div>
            <Title variant="h2">LandingCardItem</Title>
                <LandingCardItem ratio={aspect} src={SRC} {...args} />
        </div>
    );
};

LANDINGCARDITEM.args = {
    name: "TORNEOS",
};

LANDINGCARDITEM.argTypes = {
    name: {
        description: "Landing Page name",
        table: {
            defaultValue: {
                summary: "TORNEOS",
            },
        },
        control: {
            type: "text",
        },
    },
};