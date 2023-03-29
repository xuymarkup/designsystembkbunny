import React from "react";
import { Title } from "accessories";

import LineUp from "../../lib/widgets/LineUp";
import lineup from "../../lib/widgets/LineUp/lineup.json";

export default {
    title: "Desing System/Widgets/LineUp",
    component: "LineUp"
};

export const LINEUP = args => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">LineUp</Title>
            <LineUp jugadores={lineup}  {...args} titulares={true} />
        </div>
    );
};

export const SUBSTITUTES = args => {
    const props = () => ({
        title: text("Titulo", "Titulo de test"),
    });
    return (
        <div>
            <Title variant="h2">LineUp</Title>
            <LineUp jugadores={lineup}  {...args} suplentes={true} />
        </div>
    );
};
