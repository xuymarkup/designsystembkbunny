import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import {Home} from "../../lib/contentTypes/";

import Barcelona from "../../assets/Equipos/esc_chamlg-barc.png";
import Bayern from "../../assets/Equipos/esc_chamlg-bmunic.png";
import Qatar from "../../assets/desktop/40_17-desktop-pe-qatar.jpg";
import QatarDesktop from "../../assets/mobile/40_17-mobile-er-champions.jpg";

import highimpact from "../../lib/widgets/HighImpact/highimpact.json";
import matchliveitem from "../../lib/items/MatchLiveItem/matchliveitem.json";
import news from "../../lib/widgets/HighImpact/news.json";
import torneos from "../../lib/widgets/LandingCard/torneos.json"
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Template/Home",
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

export const HomeTUDN = () => {
    const SOURCES = [
        {
            aspect: "aspect3x4",
            query: "(min-width: 0px)",
            size: "medium",
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
        {
            aspect: "aspect16x9",
            query: "(min-width: 415px)",
            size: "large",
        },
    ];
    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {
            height:235, 
            width:1024, 
            query:"(min-width: 769px)", 
            srcSet:QatarDesktop
        },
        mobile: {
            height:137, 
            width:324, 
            query:"(min-width: 0px)", 
            srcSet:Qatar
        },
    };
    const SRC2 = {
        srcLanding: {
            desktop: {},
            mobile: IMG[0],
        },
    };
    const SRC3 = {
        image: {
            desktop: IMG[3],
            mobile: IMG[1],
        },
        newsitem: {
            desktop: {},
            mobile: IMG[2],
        },
    }; 
    return (
        <div>
            <Home
                image={SRC3.image}
                newsItem={SRC3.newsitem}
                dataHighImpact={highimpact}
                news={news}
                imgLocal={TEAMS.local}
                imgAway={TEAMS.away}
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                imageLanding={SRC2.srcLanding}
                dataTorneos={torneos}
                imagePromo={SRC}
            />
        </div>
    );
};
