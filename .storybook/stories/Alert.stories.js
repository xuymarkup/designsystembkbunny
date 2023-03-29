import React from "react";
import { Alert } from "../../lib/accessories";

export default {
    title: "Desing System/Atoms/Alert",
    component: Alert,
};

export const ALERT = args => <Alert {...args} />;
ALERT.args = {
    children: "Alerta",
};
ALERT.argTypes = {
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
};
