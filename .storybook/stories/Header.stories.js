import React from "react";
import { Title } from "accessories";

import HeaderTUDNAMP from "../../lib/widgets/HeaderTUDN/HeaderTUDNAMP";
import Layout from "../../lib/layout";
import socialmedia from "../../lib/widgets/HeaderTUDN/social.json";

export default {
    title: "Desing System/Widgets/Header",
};

export const HEADERAMP = () => {
    return (
        <div>
            <Title variant="h2">Header AMP</Title>
            <HeaderTUDNAMP />
        </div>
    );
};

export const HEADER = () => {
    return (
        <div>
            <Layout
                foot={false}
                breadcrumbs={[]}
                social={socialmedia}
                uri="https://tvsa-sandbox.github.io/widgets-beta/"
                filter=""
            />
        </div>
    );
};
