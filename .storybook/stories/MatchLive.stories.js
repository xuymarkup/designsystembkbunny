import React from "react";
import { Title } from "accessories";
import MatchLive from "../../lib/widgets/MatchLive";
import matchliveitem from "../../lib/items/MatchLiveItem/matchliveitem.json";
import MatchLiveItem from "../../lib/items/MatchLiveItem";

import Barcelona from "../../assets/Equipos/esc_chamlg-barc.png";
import Bayern from "../../assets/Equipos/esc_chamlg-bmunic.png";

export default {
    title: "Desing System/widgets/MatchLive",
    component: MatchLive,
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
export const MATCHLIVE = args => {
    return (
        <div>
            <Title variant="h2">MatchLive</Title>
            <MatchLive
                srcLocal={SRC.local}
                srcAway={SRC.away}
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                event={false}
                {...args}
            />
        </div>
    );
};

export const MATCHLIVEFLOAT = args => {
    return (
        <div>
            <MatchLiveItem
                srcLocal={SRC.local}
                srcAway={SRC.away}
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                event={false}
                {...args}
            />
        </div>
    );
};

export const MATCHLIVEFLOATICON = args => {
    return (
        <div>
            <MatchLiveItem
                srcLocal={SRC.local}
                srcAway={SRC.away}
                scoreLocal={matchliveitem.scoreLocal}
                scoreAway={matchliveitem.scoreAway}
                {...args}
            />
        </div>
    );
};
