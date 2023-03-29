import React from "react";
import PropTypes from "prop-types";
import IconDurationStyles from "./styles";
import { Icons, Time } from "..";

const IconDuration = props => {
    const { children, name, size } = props;
    return (
        <IconDurationStyles {...props}>
            <Icons icon={name} size={size} variant="Transparent" />
            <Time variant="Duration">{children}</Time>
        </IconDurationStyles>
    );
};

IconDuration.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
};

IconDuration.defaultProps = {
    children: null,
    variant: "Transparent",
    name: "Video",
    size: 26,
};

export default IconDuration;
