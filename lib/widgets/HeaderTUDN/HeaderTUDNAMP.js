import React from "react";
import { Anchor, Icons } from "../../accessories";
import { HeaderStylesAMP } from "./styles";

const HeaderTUDNAMP = () => {
    return (
        <HeaderStylesAMP id="Header" as="header">
            <Anchor>
                <Icons color="#fff" name="Deportes" size={130} variant="Transparent" />
            </Anchor>
        </HeaderStylesAMP>
    );
};

export default HeaderTUDNAMP;
