import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ThemeProvider } from "styled-components";
import * as TUDN from "../lib/themes/tudn";
import * as champions from "../lib/themes/champions";
import GlobalStyle from "../lib/accessories/GlobalStyles";

const tudn = TUDN;
const champ = champions;

const modes = ["light", "dark"];

const getThemeMode = (mode, btheme) => {
    const MODE = btheme.colors.modes[mode];
    const COLORS = btheme.colors;
    const MIXED = { ...btheme, colors: { ...COLORS, ...MODE } };
    return MIXED;
};

// const [mode, setMode] = useState(modes[0]);

const THEMES = {
    TUDN: getThemeMode(modes[0], tudn),
    TUDNDark: getThemeMode(modes[1], tudn),
    Champions: getThemeMode(modes[0], champ),
};

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "TUDN",
        toolbar: {
            icon: "document",
            // array of plain string values or MenuItem shape (see below)
            items: Object.keys(THEMES),
        },
    },
};

const withThemeProvider = (Story, context) => {
    const theme = THEMES[context.globals.theme];
    // console.log("tema", context.globals.theme);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story {...context} />
        </ThemeProvider>
    );
};

export const parameters = {
    a11y: {
        element: "#root",
        config: {},
        options: {},
        manual: false,
    },
    viewMode: "docs",
    viewport: {
        viewports: INITIAL_VIEWPORTS,
        defaultViewport: "galaxys5",
    },
    html: {
        highlighter: {
            showLineNumbers: true, // default: false
            wrapLines: false, // default: true
        },
    },
};

export const decorators = [withThemeProvider];
