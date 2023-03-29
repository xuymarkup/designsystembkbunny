import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title } from "accessories";
import TickerItem from "../../lib/items/TickerItem";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/TickerItem",
};

export const TICKERITEM = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect: aspect,
            query: "(min-width: 415px)",
            size: bsp,
        },
        {
            aspect: "aspect1x1",
            query: "(min-width: 0px) and (max-width: 414px)",
            size: "medium",
        },
    ];

    const IMG = Utils.getSources(Mock.renditions, SOURCES);
    const SRC = {
        desktop: {},
        mobile: IMG[0],
    };
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">TickerItem</Title>
            <TickerItem ratio={aspect} src={SRC} {...props} />
        </div>
    );
};

TICKERITEM.args = {
    competitionName: "Champions League",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    time: "19:45",
    localmomio: "+250",
    empatemomio: "+100",
    visitmomio: "+390",
    score1: "3",
    score2: "2",
};

TICKERITEM.argTypes = {
    competitionName: {
        description: "Competition name",
        table: {
            defaultValue: {
                summary: "Champions League",
            },
        },
        control: {
            type: "text",
        },
    },
    team1: {
        description: "Local team name",
        table: {
            defaultValue: {
                summary: "Paris Saint-Germain",
            },
        },
        control: {
            type: "text",
        },
    },
    team2: {
        description: "Visit team name",
        table: {
            defaultValue: {
                summary: "Burussia Monchengladbach",
            },
        },
        control: {
            type: "text",
        },
    },
    time: {
        description: "Match schedule",
        table: {
            defaultValue: {
                summary: "19:45",
            },
        },
        control: {
            type: "text",
        },
    },
    localmomio: {
        description: "Local momio",
        table: {
            defaultValue: {
                summary: "+250",
            },
        },
        control: {
            type: "text",
        },
    },
    empatemomio: {
        description: "Tie momio",
        table: {
            defaultValue: {
                summary: "+100",
            },
        },
        control: {
            type: "text",
        },
    },
    visitmomio: {
        description: "Visit momio",
        table: {
            defaultValue: {
                summary: "+390",
            },
        },
        control: {
            type: "text",
        },
    },
    score1: {
        description: "Local team score",
        table: {
            defaultValue: {
                summary: "3",
            },
        },
        control: {
            type: "text",
        },
    },
    score2: {
        description: "Visit team ",
        table: {
            defaultValue: {
                summary: "2",
            },
        },
        control: {
            type: "text",
        },
    },
};