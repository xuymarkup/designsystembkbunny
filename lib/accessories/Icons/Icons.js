import React from "react";
import PropTypes from "prop-types";
import IconStyles from "./styles";
import iconSetTudn from "./selectiontudn.json";

const Icons = props => {
    const { name, size } = props;
    const PROPS = { ...props };
    delete PROPS.name;
    delete PROPS.variant;
    return <IconStyles iconSet={iconSetTudn} icon={name} size={size} {...PROPS} />;
};

Icons.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    variant: PropTypes.string,
};

Icons.defaultProps = {
    name: "",
    variant: "Transparent",
    size: 40,
};

export default Icons;
