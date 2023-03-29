import React from "react";
import { Title, Box } from "accessories";

import RecoveryModal from "../../lib/items/RecoveryModal";

export default {
    title: "Desing System/Widgets/Login/RecoveryModal",
};

export const RECOVERY = () => {
    return (
        <div>
            <Title variant="h2">Recovery</Title>
            <Box variant="Transparent">
                <RecoveryModal errormail={true} />
            </Box>
        </div>
    );
};

export const RECOVERYERROR = () => {
    return (
        <div>
            <Title variant="h2">LoginError</Title>
            <Box variant="Transparent">
                <RecoveryModal errormail={false} />
            </Box>
        </div>
    );
};

