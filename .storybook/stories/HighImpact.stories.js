import React, { useEffect, useState } from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import HighImpact from "../../lib/widgets/HighImpact";
import highimpact from "../../lib/widgets/HighImpact/highimpact.json";
import matchliveitem from "../../lib/items/MatchLiveItem/matchliveitem.json";
import news from "../../lib/widgets/HighImpact/news.json";
import Mock from "./imageMock.json";

import Barcelona from "../../assets/Equipos/esc_chamlg-barc.png";
import Bayern from "../../assets/Equipos/esc_chamlg-bmunic.png";

export default {
    title: "Desing System/Widgets/HighImpact",
    component: HighImpact,
};

const TEAMS = {
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
};

export const HIGHIMPACT = args => {
    const { aspect = "aspect16x9", bsp = "large" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
        {
            aspect: "aspect1x1",
            query: "(min-width: 415px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        image: {
            desktop: IMG[0],
            mobile: IMG[1],
        },

        newsitem: {
            desktop: {},
            mobile: IMG[2],
        },
    };
    const [ratio, setRatio] = useState("aspect3x4");
    useEffect(() => {
        setRatio(window.innerWidth > 767 ? "aspect16x9" : "aspect3x4");
    });
    return (
        <div>
            <Title variant="h2">HighImpact</Title>
            <HighImpact
                ratio={ratio}
                src={SRC.image}
                newsitem={SRC.newsitem}
                datas={highimpact}
                news={news}
                srcLocal={TEAMS.local}
                srcAway={TEAMS.away}
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                event={false}
            />
        </div>
    );
};

export const HIGHIMPACTEVENT = args => {
    const { aspect = "aspect16x9", bsp = "large" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "mobile-large",
        },
        {
            aspect: "aspect1x1",
            query: "(min-width: 415px)",
            size: "medium",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        image: {
            desktop: IMG[0],
            mobile: IMG[1],
        },

        newsitem: {
            desktop: {},
            mobile: IMG[2],
        },
    };
    const [ratio, setRatio] = useState("aspect3x4");
    useEffect(() => {
        setRatio(window.innerWidth > 767 ? "aspect16x9" : "aspect3x4");
    });
    return (
        <div>
            <Title variant="h2">HighImpactEvent</Title>
            <HighImpact
                ratio={ratio}
                src={SRC.image}
                newsitem={SRC.newsitem}
                datas={highimpact}
                news={news}
                srcLocal={TEAMS.local}
                srcAway={TEAMS.away}
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
            />
        </div>
    );
};
