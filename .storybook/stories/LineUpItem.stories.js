import React from "react";
import { Title } from "accessories";

import LineUpItem from "../../lib/items/LineUpItem";
import substitutes from "../../lib/items/LineUpItem/substitutes.json";
export default {
    title: "Desing System/items/LineUpItem",
};

export const LINEUPITEM = () => {
    return (
        <div>
            <Title variant="h2">LineUp Item</Title>
            <LineUpItem izquierda={true} suplentes={substitutes}/>
        </div>
    );
};

export const LINEUPITEMDERECHA = () => {
    return (
        <div>
            <Title variant="h2">LineUp Item</Title>
            <LineUpItem derecha={true} suplentes={substitutes} />
        </div>
    );
};