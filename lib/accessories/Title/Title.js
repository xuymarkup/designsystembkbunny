import React, { memo } from "react";

import PropTypes from "prop-types";
import TitleStyles from "./styles";

const Title = memo(props => {
    const { children, variant } = props;
    const TEXT = variant.toLowerCase();
    return (
        <TitleStyles as={TEXT} {...props}>
            {children}
        </TitleStyles>
    );
});

Title.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
};

Title.defaultProps = {
    variant: "h1",
};

export default Title;
