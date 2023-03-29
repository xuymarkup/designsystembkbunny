import React from "react";
import PropTypes from "prop-types";
import InputsStyles from "./styles";
import { Info, Box, Icons } from "../index";

const Inputs = props => {
    const { icon, iconcolor, iconsize, error, variant, inputWidth, br } = props;
    return (
        <Box variant="Transparent" w={inputWidth} br={br}>
            <Box variant="Flex">
                {icon ? <Icons name={icon} color={iconcolor} size={iconsize} /> : null}
                <InputsStyles type="search" aria-label="Search" {...props} />
            </Box>
            {error ? <Info variant="Error">*Error In Caption</Info> : null}
        </Box>
    );
};

Inputs.propTypes = {
    icon: PropTypes.string,
    error: PropTypes.bool,
    variant: PropTypes.string,
    inputWidth: PropTypes.string,
};

Inputs.defaultProps = {
    icon: "Search",
    error: false,
    variant: "White",
    inputWidth: "auto",
};

export default Inputs;
