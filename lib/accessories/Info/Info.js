import React from "react";
import InfoStyles from "./styles";

const Info = props => {
    const { children } = props;
    return <InfoStyles {...props}>{children}</InfoStyles>;
};

export default Info;
