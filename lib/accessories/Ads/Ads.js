import React from "react";
import PropTypes from "prop-types";
import AdsStyles from "./styles";

const Ads = props => {
    const { children } = props;
    return <AdsStyles {...props}>{children}</AdsStyles>;
};

Ads.propTypes = {
    children: PropTypes.node,
};
Ads.defaultProps = {
    children: null,
};
export default Ads;
