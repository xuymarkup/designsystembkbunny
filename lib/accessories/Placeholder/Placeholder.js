import React from "react";
import PropTypes from "prop-types";
import { PlaceholderStyles, IconsStyles } from "./styles";

const Placeholder = props => {
    const { children, size, ratio, name, icon } = props;
    return (
        <PlaceholderStyles ratio={ratio} {...props}>
            {icon ? <IconsStyles name={name} size={size} variant="Transparent" /> : null}
            {children}
        </PlaceholderStyles>
    );
};

Placeholder.propTypes = {
    variant: PropTypes.string,
    ratio: PropTypes.string,
    size: PropTypes.number,
    name: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.bool,
};

Placeholder.defaultProps = {
    variant: "Solid",
    ratio: "aspect16x9",
    size: 50,
    name: "Deportes",
    children: null,
    icon: true,
};

export default Placeholder;
