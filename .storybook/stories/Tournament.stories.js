import React, { useEffect, useState } from "react";
import { Title } from "accessories";
import Utils from "@televisadigital/nxtv-utilities";
import { Tournament } from "../../lib/contentTypes";
import Barcelona from "../../assets/Equipos/esc_chamlg-barc.png";
import Bayern from "../../assets/Equipos/esc_chamlg-bmunic.png";
import highimpact from "../../lib/widgets/HighImpact/highimpact.json";
import matchliveitem from "../../lib/items/MatchLiveItem/matchliveitem.json";
import news from "../../lib/widgets/HighImpact/news.json";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Template/Tournament",
    component: Tournament,
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



export const TournamentTUDN = () => {
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
            <Title variant="h2">Torneo</Title>
            <Tournament 
            image={SRC.image}
            newsItem={SRC.newsitem}
            dataHighImpact={highimpact}
            news={news}
            imgLocal={TEAMS.local}
            imgAway={TEAMS.away}
            scoreLocal={matchliveitem.scoreLocal}
            scoreAway={matchliveitem.scoreAway}
            />
        </div>
    );
};
