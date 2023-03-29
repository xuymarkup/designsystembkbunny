import React from "react";
import Utils from "../../lib/helpers/utils";
import { Title, Box } from "accessories";
import Mock from "./imageMock.json";

import PromoEvent from "../../lib/widgets/PromoEvent";
import Qatar from "../../assets/desktop/40_17-desktop-pe-qatar.jpg";
import QatarDesktop from "../../assets/mobile/40_17-mobile-er-champions.jpg";

export default {
    title: "Desing System/Widgets/PromoEvent",
};

export const PROMOEVENT = args => {
    const { aspect = "aspectpanoramic", bsp = "mobile-large" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const SRC = {
        desktop: {height:"235px", width:"1024px", query:"(min-width: 769px)", srcSet:QatarDesktop},
        mobile: {height:"137px", width:"324px", query:"(min-width: 0px)", srcSet:Qatar},
    };
    return (
        <div>
            <Title variant="h2">PromoEvent</Title>
                <PromoEvent ratio={aspect} src={SRC} {...args} />
        </div>
    );
};
