import React from "react";
import PropTypes from "prop-types";
import BoxStyles from "./styles";

const Box = props => {
    const { children } = props;
    return <BoxStyles {...props}>{children}</BoxStyles>;
};

Box.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
};

Box.defaultProps = {
    variant: "Solid",
    children: null,
};

export default Box;
