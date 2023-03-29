import React from "react";
import { Title } from "accessories";

import TabsMatch from "../../lib/widgets/TabsMatch";
import tabs from "../../lib/widgets/TabsMatch/tabs.json";

export default {
    title: "Desing System/Widgets/TabsMatch",
    component: TabsMatch,
};

export const TABSMATCH = args => {
    return (
        <div>
            <Title variant="h2">TabsMatch</Title>
            <TabsMatch sections={tabs} {...args} />
        </div>
    );
};
