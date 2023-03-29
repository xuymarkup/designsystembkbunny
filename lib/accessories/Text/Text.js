import React from "react";
import PropTypes from "prop-types";
import TextStyles from "./styles";

const Text = props => {
    const { children } = props;
    return <TextStyles {...props}>{children}</TextStyles>;
};

Text.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
};
Text.defaultProps = {
    variant: "Normal",
    children: null,
};

export default Text;
