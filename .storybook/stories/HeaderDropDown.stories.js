import React from "react";
import { Title } from "accessories";

import HeaderDropDown from "../../lib/items/HeaderDropDown";

export default {
    title: "Desing System/items/HeaderDropDown",
};

export const HEADERDROPDOWN = args =>  {
    return (
        <div>
            <Title variant="h2">HeaderDropDown</Title>
            <HeaderDropDown {...args} />
        </div>
    );
};

HEADERDROPDOWN.args = {
    active: false,
    logged: false,
};

HEADERDROPDOWN.argTypes = {
    active: {
        description: "Active state",
        table: {
            defaultValue: {
                summary: "False",
            },
        },
        control: {
            type: "boolean",
        },
     },
     logged: {
        description: "Login state",
        table: {
            defaultValue: {
                summary: "False",
            },
        },
        control: {
            type: "boolean",
        },
     },
};

