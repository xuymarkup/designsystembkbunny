import React from "react";
import { FooterTUDN } from "widgets";
import { Title } from "accessories";

import FooterAMP from "../../lib/widgets/FooterTUDN/FooterAMP";

export default {
    title: "Desing System/Widgets/Footer",
};

export const FOOTER = () => {
    return (
        <div>
            <Title variant="h2">Footer</Title>
            <FooterTUDN />
        </div>
    );
};

export const FOOTERAMP = () => {
    return (
        <div>
            <Title variant="h2">Footer AMP</Title>
            <FooterAMP />
        </div>
    );
};
