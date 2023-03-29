import React from "react";
import  Sports  from "../../lib/contentTypes/Sports";
import { Title } from "accessories";


export default {
    title: "Desing System/Template/Sports",
};


export const SPORTS = () => {
    return (
        <div>
            <Title variant="h2">Sports</Title>
            <Sports SFPageEmpty={true}  />
        </div>
    );
};

export const SPORTSFAV = () => {
    return (
        <div>
            <Title variant="h2">Sports</Title>
            <Sports SFPageActive={false} />
        </div>
    );
};



