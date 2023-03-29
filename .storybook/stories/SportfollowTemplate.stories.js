import React, { Fragment } from "react";
import { Title } from "accessories";

import SportFollow from "../../lib/widgets/SportFollow/SportFollow";

export default {
    title: "Desing System/Template/SportFollow",
};

export const SFPAGEEMPTY = () => {
    return (
        <div>
            <Title variant="h2">SportFollow Page Empty</Title>
            <SportFollow SFPageEmpty={true} />
        </div>
    );
};

export const SFPAGEACTIVE = () => {
    return (
        <div>
            <Title variant="h2">SportFollow Page Active</Title>
            <SportFollow SFPageActive={true} />
        </div>
    );
};