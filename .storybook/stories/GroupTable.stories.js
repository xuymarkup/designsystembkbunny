import React from "react";
import { Title } from "accessories";
import bombostabs from "../../lib/widgets/GroupTable/bombostabs.json";
import GroupTable from "../../lib/widgets/GroupTable";
import standingteam from "../../lib/widgets/GroupTable/standingteam.json";

import Bombo1 from "../../assets/desktop/bombo1.png";

export default {
    title: "Desing System/widgets/GroupTable",
};

export const GROUPTABLE = args => {
    const { aspect = "aspect1x1", bsp = "medium" } = args;
    const SOURCES = [
        {
            aspect,
            query: "(min-width: 0px)",
            size: bsp,
        },
    ];
    const SRC = {

        mobile: {height:"137px", width:"100px", query:"(min-width: 0px)", srcSet:Bombo1},
    };
    return (
        <div>
            <Title variant="h2">Tabla de grupos</Title>
                <GroupTable sections={bombostabs} teams={standingteam} ratio={aspect} src={SRC} {...args} />
        </div>
    );
};

GROUPTABLE.args = {
    
};

GROUPTABLE.argTypes = {
    
};