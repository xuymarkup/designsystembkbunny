import React from "react";
import { Title, Box } from "accessories";

import NotificationLogin from "../../lib/items/NotificationLogin";

export default {
    title: "Desing System/Widgets/Login/NotificationLogin",
};

export const NOTIFICATION = () => {
    return (
        <div>
            <Title variant="h2">NotificationLogin</Title>
            <Box variant="Space">
                <NotificationLogin />
            </Box>
        </div>
    );
};
