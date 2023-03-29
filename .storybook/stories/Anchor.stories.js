import React from "react";
import { Anchor } from "../../lib/accessories";

export default {
    title: "Desing System/Atoms/Anchor",
    component: Anchor,
};

export const ANCHOR = args => <Anchor {...args} />;
ANCHOR.args = {
    children: "Anchor",
    variant: "Active",
};
ANCHOR.argTypes = {
    children: {
        description: "Node",
        table: {
            defaultValue: {
                summary: "",
            },
        },
        control: {
            type: "text",
        },
    },
    variant: {
        description: "Variants",
        table: {
            defaultValue: {
                summary: "Active",
            },
        },
        control: {
            type: "select",
            options: ["Active", "Focus"],
        },
    },
};
