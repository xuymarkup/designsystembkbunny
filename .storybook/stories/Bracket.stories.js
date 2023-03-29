import React from "react";
import { Bracket, BracketRight } from "../../lib/widgets";
import Utils from "@televisadigital/nxtv-utilities";

export default {
    title: "Desing System/Widget/Bracket",
    component: Bracket,
};
import Mock from "./imageMock.json";

import data from "../mockups/bracket.json";
import Barcelona from "../../assets/Equipos/esc_chamlg-barc.png";
import Bayern from "../../assets/Equipos/esc_chamlg-bmunic.png";
import worldCup from "../../assets/trofeos_bracket.webp";
import bgworldCup from "../../assets/bracket-qatar.webp";
import bgworldCuph from "../../assets/bracket3x4.webp";
import cupMx from "../../assets/ligamx_trofeo_bracket.webp";
import bgLigaMX from "../../assets/bracket-ligamx.webp";
import Sponsor from "../../assets/logo_caliente_horizontal_bco.webp";

const TMS = {
    local: {
        mobile: {
            height: 40,
            query: "(min-width: 0px)",
            width: 40,
            srcSet: Barcelona,
        },
    },
    away: {
        mobile: {
            height: 40,
            query: "(min-width: 0px)",
            width: 40,
            srcSet: Bayern,
        },
    },
    sponsor: {
        mobile: {
            height: 100,
            query: "(min-width: 0px)",
            width: 56,
            srcSet: Sponsor,
        },
    },
};

export const BRACKET = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
        {
            aspect: "aspectpanoramic",
            query: "(min-width: 0px)",
            size: "x-large",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px)",
            size: "small",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        flags: { desktop: {}, mobile: IMG[0] },
        back: {
            desktop: {},
            mobile: {
                height: 301,
                query: "(min-width: 0px)",
                width: 225,
                srcSet: bgworldCup,
            },
        },
        cup: {
            desktop: {},
            mobile: {
                height: 301,
                query: "(min-width: 0px)",
                width: 225,
                srcSet: worldCup,
            },
        },
    };
    return (
        <Bracket
            data={data}
            src={TMS.away}
            srcBack={SRC.back}
            srcup={SRC.cup}
            srcSponsor={TMS.sponsor}
            {...args}
        />
    );
};

BRACKET.args = {
    cols: 3,
    champion: "MEX",
    tournament: "Qatar FIFA World Cup 2022",
    thirdmatch: true,
};

export const BRACKETMX = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
        {
            aspect: "aspectpanoramic",
            query: "(min-width: 0px)",
            size: "x-large",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px)",
            size: "small",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        flags: { desktop: {}, mobile: IMG[0] },
        backmx: {
            desktop: {},
            mobile: {
                height: 301,
                query: "(min-width: 0px)",
                width: 225,
                srcSet: bgLigaMX,
            },
        },
        cupmx: {
            desktop: {},
            mobile: {
                height: 301,
                query: "(min-width: 0px)",
                width: 225,
                srcSet: cupMx,
            },
        },
    };
    return (
        <Bracket
            data={data}
            src={TMS.away}
            srcBack={SRC.backmx}
            srcup={SRC.cupmx}
            srcSponsor={TMS.sponsor}
            {...args}
        />
    );
};

BRACKETMX.args = {
    cols: 3,
    champion: "AME",
    tournament: "GRITA MEXICO MX",
    thirdmatch: false,
};

export const BRACKETRIGHT = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px)",
            size: "mobile-large",
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px)",
            size: "small",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        flags: { desktop: {}, mobile: IMG[0] },
        backmx: {
            desktop: {},
            mobile: {
                height: 301,
                query: "(min-width: 0px)",
                width: 225,
                srcSet: bgworldCuph,
            },
        },
        cupmx: {
            desktop: {},
            mobile: {
                height: 301,
                query: "(min-width: 0px)",
                width: 225,
                srcSet: worldCup,
            },
        },
    };
    return (
        <BracketRight
            data={data}
            src={TMS.away}
            srcBack={SRC.backmx}
            srcup={SRC.cupmx}
            srcSponsor={TMS.sponsor}
            {...args}
        />
    );
};

BRACKETRIGHT.args = {
    cols: 3,
    champion: "MEX",
    tournament: "QATAR 2022 WORLD CUP",
    thirdmatch: true,
};
