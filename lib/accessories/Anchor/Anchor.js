import React from "react";
import PropTypes from "prop-types";
import AnchorStyles from "./styles";

const Anchor = props => {
    const { children } = props;
    return (
        <AnchorStyles {...props} rel="noreferrer noopener">
            {children}
        </AnchorStyles>
    );
};

Anchor.propTypes = {
    /**
     * The CHILDREN node is Required.
     */
    children: PropTypes.node.isRequired,
};

export default Anchor;
