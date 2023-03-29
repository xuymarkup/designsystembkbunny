import React from "react";
import Utils from "@televisadigital/nxtv-utilities";
import { Title } from "accessories";
import CalendarItem from "../../lib/items/CalendarItem";
import Mock from "./imageMock.json";

export default {
    title: "Desing System/Items/CalendarItem",
};

export const CALENDARITEM = args => {
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
            <Title variant="h2">CalendarItem</Title>
            <CalendarItem ratio={aspect} src={SRC} {...args}  />
        </div>
    );
};

CALENDARITEM.args = {
    date: "Martes 20 octubre",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    jornada: "Jornada 3",
    time: "2:00pm",
    score1: "3",
    score2: "2",
};

CALENDARITEM.argTypes = {
    date: {
        description: "Match date",
        table: {
            defaultValue: {
                summary: "Martes 20 Octubre",
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
    jornada: {
        description: "Current journey",
        table: {
            defaultValue: {
                summary: "Jornada 3",
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
                summary: "2:00",
            },
        },
        control: {
            type: "text",
        },
    },
    score1: {
        description: "Team one score",
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
        description: "Team two score",
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