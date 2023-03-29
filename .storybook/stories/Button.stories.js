import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Button } from "accessories";

export default {
    title: "Desing System/Atoms/Buttons",
    decorators: [
        Story => (
            <div style={{ margin: "3em" }}>
                <h2>Button</h2>
                <Story />
            </div>
        ),
    ],
};

const Template = args => <Button {...args} />;

export const SOLID = args => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return <Button color={ui === "elnueve" ? "elnueve" : null} {...args} />;
};

SOLID.args = {
    children: "Click Me!",
    variant: "Solid",
    disabled: false,
    icon: "",
    iconcolor: "",
};

export const OUTLINE = args => <Button {...args} />;

OUTLINE.args = {
    children: "Click Me!",
    variant: "Outline",
    disabled: false,
    icon: "",
    iconcolor: "",
};

export const ICONBUTTON = args => <Button {...args} />;

ICONBUTTON.args = {
    children: "",
    variant: "Solid",
    disabled: false,
    icon: "Search",
    iconcolor: "",
};

export const DOUBLEBUTTON = args => <Button {...args} />;

DOUBLEBUTTON.args = {
    children: "Click Me!",
    variant: "Solid",
    disabled: false,
    icon: "Search",
    iconcolor: "",
};

SOLID.argTypes = {
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
                summary: "Solid",
            },
        },
        control: {
            type: "select",
            options: ["Solid", "Outline", "Active", "Inactive", "Transparent"],
        },
    },
    disabled: {
        description: "Button state",
        table: {
            defaultValue: {
                summary: "False",
            },
        },
        control: {
            type: "boolean",
        },
     },
    icon: {
        description: "Button icon",
        table: {
            defaultValue: {
                summary: "",
            },
        },
        control: {
            type: "text",
        },
    },
    iconcolor: {
        description: "Button icon color",
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

