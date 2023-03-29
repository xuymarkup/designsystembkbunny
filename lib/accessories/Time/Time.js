import React from "react";
import PropTypes from "prop-types";
import TimeStyles from "./styles";

const Time = props => {
    const { children } = props;
    return <TimeStyles {...props}>{children}</TimeStyles>;
};

Time.propTypes = {
    children: PropTypes.node,
};
Time.defaultProps = {
    children: null,
};

export default Time;
