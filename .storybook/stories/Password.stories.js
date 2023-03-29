import React from "react";
import { Title, Box } from "accessories";

import Password from "../../lib/items/Password";

export default {
    title: "Desing System/Widgets/Login/Password",
};

export const PASSWORD = () => {
    return (
        <div>
            <Title variant="h2">Password</Title>
            <Box variant="Transparent">
                <Password errormail={true} />
            </Box>
        </div>
    );
};

export const PASSWORDERROR = () => {
    return (
        <div>
            <Title variant="h2">PaswordError</Title>
            <Box variant="Transparent">
                <Password errormail={false} />
            </Box>
        </div>
    );
};


export const PASSWORDERROR2 = () => {
    return (
        <div>
            <Title variant="h2">PaswordError</Title>
            <Box variant="Transparent">
                <Password errormail={false}  errorpassw={false}/>
            </Box>
        </div>
    );
};
