import React from "react";
import Utils from "../../lib/helpers/utils";

import {Match} from "../../lib/contentTypes/";
import commentary from "../../lib/widgets/Commentary/commentary.json";
import matchHeader from "../../lib/widgets/MatchHeader/matchHeaderTemplate.json";
import standing from "../../lib/widgets/Standing/standing.json";
import standingteam from "../../lib/widgets/Standing/standingteam.json";
import versus from "../../lib/widgets/Versus/versus.json";
import versusnumber from "../../lib/widgets/Versus/versusnumber.json";
import lineup from "../../lib/widgets/LineUp/lineup.json";

export default {
    title: "Desing System/Template/Match",
    component: Match,
};

import Mock from "./imageMock.json";

export const MATCH = args => {
    const { aspect = "aspect1x1", bsp = "thumbnail" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
        {
            aspect: "aspect16x9",
            query: "(min-width: 0px)",
            size: "large",
        },
        {
            aspect: "aspect16x9",
            query: "(min-width: 0px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        general: {
            desktop: {},
            mobile: IMG[0],
        },
        video: {
            desktop: {},
            mobile: IMG[1],
        },
        carousel: {
            desktop: {},
            mobile: IMG[2],
        },
    };
    return (
        <Match commentaryMatches={commentary} srcCommentary={SRC.general} srcTimeline={SRC.general}
        matchHeader={matchHeader} teamLineUp={lineup} srcCalendar={SRC.general}
        srcStanding={SRC.general} standingData={standing} standingTeam={standingteam} 
        srcVersus={SRC.general} versusSections={versus} versusNumbers={versusnumber} imgs={SRC.video} />
    );
};

