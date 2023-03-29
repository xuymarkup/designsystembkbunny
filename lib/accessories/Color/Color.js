import React from "react";
import PropTypes from "prop-types";
import ColorStyles from "./styles";

const Color = props => {
    const { children } = props;
    return <ColorStyles {...props}>{children}</ColorStyles>;
};

Color.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
};

Color.defaultProps = {
    variant: "Solid",
    children: null,
};

export default Color;
