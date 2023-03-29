import React, { Fragment } from "react";
import { Title } from "accessories";

import VoteCardTUDN from "../../lib/widgets/VoteCardTUDN/VoteCardTUDN";

export default {
    title: "Desing System/Widgets/VoteCard",
};

export const VOTECARD = () => {
    return (
        <div>
            <Title variant="h2">Vote Card</Title>
            <VoteCardTUDN VCnormal={true} />
        </div>
    );
};

export const VOTECARDACTIVE = () => {
    return (
        <div>
            <Title variant="h2">Vote Card Active</Title>
            <VoteCardTUDN VCactive={true} />
        </div>
    );
};