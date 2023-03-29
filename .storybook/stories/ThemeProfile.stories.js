import React from "react";
import { Title } from "accessories";

import ThemeProfile from "../../lib/items/ThemeProfile";

export default {
    title: "Desing System/items/ThemeProfile",
};

export const THEMEPROFILE = args => {
    return (
        <div>
            <Title variant="h2">Theme Profile</Title>
            <ThemeProfile {...args} />
        </div>
    );
};

THEMEPROFILE.args = {
    text:"America",
};

THEMEPROFILE.argTypes = {
    text: {
        description: "Team name",
        table: {
            defaultValue: {
                summary: "America",
            },
        },
        control: {
            type: "text",
        },
    },
};