import React from "react";
import  Profile  from "../../lib/widgets/Profile";
import { Title } from "accessories";


export default {
    title: "Desing System/Widgets/Profile",
};


export const PROFILE = () => {
    return (
        <div>
            <Title variant="h2">Profile</Title>
            <Profile Level={true} />
        </div>
    );
};

export const PROFILELEVEL = () => {
    return (
        <div>
            <Title variant="h2">Delete Profile</Title>
            <Profile LevelPam={true} />
        </div>
    );
};

export const AVATAR = () => {
    return (
        <div>
            <Title variant="h2">Avatar</Title>
            <Profile Avatar={true} />
        </div>
    );
};






