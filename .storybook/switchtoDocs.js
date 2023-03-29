import { useContext } from "react";
import { DocsContext } from "@storybook/addon-docs/blocks";
import addons from "@storybook/addons";
import { NAVIGATE_URL } from "@storybook/core-events";

const SwitchToDocs = () => {
    const context = useContext(DocsContext);
    window.setTimeout(() => {
        if (!context.storyStore.getSelection().viewMode !== "docs") {
            addons.getChannel().emit(NAVIGATE_URL, `?path=/docs/${context.id}`);
        }
    }, 0);
    return null;
};

export default SwitchToDocs;
