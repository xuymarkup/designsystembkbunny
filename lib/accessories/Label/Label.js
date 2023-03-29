import React from "react";
import PropTypes from "prop-types";
import LabelStyles from "./styles";

const Label = props => {
    const { children } = props;
    return <LabelStyles {...props}>{children}</LabelStyles>;
};

Label.propTypes = {
    children: PropTypes.node,
};
Label.defaultProps = {
    children: null,
};

export default Label;
