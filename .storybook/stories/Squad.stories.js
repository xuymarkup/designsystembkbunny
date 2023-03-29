import React from "react";
import { Title } from "accessories";

import Squad from "../../lib/widgets/Squad";
import squad from "../../lib/widgets/Squad/squad.json";


export default {
    title: "Desing System/Widgets/Squad",
    component: Squad,
};

export const SQUAD = args => {
    return (
        <div>
            <Title variant="h2">Squad Item</Title>
            <Squad team={squad}  {...args} />
        </div>
    );
};
