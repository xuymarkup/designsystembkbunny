module.exports = {
    stories: ["./stories/**/*.stories.mdx", "./stories/**/*.stories.@(js|jsx|ts|tsx)"],
    addons: [
        {
            name: "@storybook/addon-essentials",
            options: {
                backgrounds: false,
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        "@storybook/addon-links",
        "@storybook/addon-a11y",
        "@whitespace/storybook-addon-html",
    ],
};
