import React from "react";
import PropTypes from "prop-types";
import BoxItemStyles from "./styles";

const BoxEvents = (props) => {
    const { team, children, width, top } = props;

    return (
        <BoxItemStyles variant="Flex" team={team} width={width} top={top} {...props}>
            {children}
        </BoxItemStyles>
    );
};

BoxEvents.propTypes = {
    team: PropTypes.string,
};

BoxEvents.defaultProps = {
    team: "local",
};

export default BoxEvents;
