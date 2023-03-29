import React, { Fragment } from "react";
import { Title } from "accessories";

import SportFollow from "../../lib/widgets/SportFollow/SportFollow";

export default {
    title: "Desing System/Widgets/SportFollow",
};

export const SFEMPTY = () => {
    return (
        <div>
            <Title variant="h2">SportFollow Empty</Title>
            <SportFollow SFEmpty={true} />
        </div>
    );
};

export const SFACTIVE = () => {
    return (
        <div>
            <Title variant="h2">SportFollow Active</Title>
            <SportFollow SFActive={true} />
        </div>
    );
};
