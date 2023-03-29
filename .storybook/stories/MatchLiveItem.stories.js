import React from "react";
import { Title } from "accessories";
import MatchLiveItem from "../../lib/items/MatchLiveItem";
import matchliveitem from "../../lib/items/MatchLiveItem/matchliveitem.json";
import Barcelona from "../../assets/Equipos/esc_chamlg-barc.png";
import Bayern from "../../assets/Equipos/esc_chamlg-bmunic.png";
export default {
    title: "Desing System/items/MatchLiveItem",
    component: MatchLiveItem,
};

const SRC = {
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
export const MATCHLIVEITEM = args => {
    return (
        <div>
            <Title variant="h2">MatchLive Item</Title>
            <MatchLiveItem
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                srcLocal={SRC.local}
                srcAway={SRC.away}
                event={false}
                {...args}
            />
        </div>
    );
};

export const MATCHLIVEITEMICON = args => {
    return (
        <div>
            <Title variant="h2">MatchLiveItem Icon</Title>
            <MatchLiveItem
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                srcLocal={SRC.local}
                srcAway={SRC.away}
                {...args}
            />
        </div>
    );
};
