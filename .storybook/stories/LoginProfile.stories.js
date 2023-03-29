import React from "react";
import { Title } from "accessories";

import LoginProfile from "../../lib/items/LoginProfile";

export default {
    title: "Desing System/items/LoginProfile",
};

export const LOGINPROFILE = args => {
    return (
        <div>
            <Title variant="h2">HeaderDropDown Profile Resume</Title>
            <LoginProfile {...args} />
        </div>
    );
};

LOGINPROFILE.args = {
    name: "Daniel Lopez",
    coins: 0,
    grade: "Amateur",
};
LOGINPROFILE.argTypes = {
    name: {
        description: "Name text",
        table: {
            defaultValue: {
                summary: "Daniel Lopez",
            },
        },
        control: {
            type: "text",
        },
    },
    coins: {
        description: "Amount of coins",
        table: {
            defaultValue: {
                summary: "0",
            },
        },
        control: {
            type: "number",
        },
    },
    grade: {
        description: "Grade text",
        table: {
            defaultValue: {
                summary: "Amateur",
            },
        },
        control: {
            type: "select",
            options: [
                "Llanero",
                "Pambolero",
                "Clase Mundial",
                "Legendario",
            ],
        },
    },
};
