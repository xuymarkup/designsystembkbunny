import React from "react";
import { Title, Box } from "accessories";

import NotificationStart from "../../lib/items/NotificationStart";

export default {
    title: "Desing System/Widgets/NotificationStart",
};

export const NOTIFICATIONSTART = () => {
    return (
        <div>
            <Title variant="h2">NotificationStart</Title>
            <NotificationStart />
        </div>
    );
};
