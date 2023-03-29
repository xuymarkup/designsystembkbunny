import React from "react";
import PropTypes from "prop-types";
import CounterStyles from "./styles";

const Counter = props => {
    const { children } = props;
    return <CounterStyles {...props}>{children}</CounterStyles>;
};

Counter.propTypes = {
    children: PropTypes.node,
};
Counter.defaultProps = {
    children: null,
};

export default Counter;
