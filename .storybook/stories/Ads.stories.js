import React from "react";
import { Ads } from "../../lib/accessories";

export default {
    title: "Desing System/Atoms/Ads",
    component: Ads,
};

export const ADS = args => <Ads {...args} />;
ADS.args = {
    children: "Ads",
};
