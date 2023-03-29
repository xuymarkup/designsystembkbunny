import React from "react";
import PropTypes from "prop-types";
import { AlertStyles } from "./styles";
import { Text, Box } from "../../accessories";

const Alert = props => {
    const { children, maxw, minh, copyText } = props;
    return (
        <AlertStyles variant="Flex" align="center" maxw={maxw} minh={minh}>
            <Box variant="Flex" align="center" h="60px">
                <Text color="gray">{copyText}</Text>
            </Box>
            {children}
        </AlertStyles>
    );
};

Alert.propTypes = {
    maxw: PropTypes.string,
    minw: PropTypes.string,
    copyText: PropTypes.string,
};
Alert.defaultProps = {
    maxw: "300px",
    minh: "100px",
    copyText: "Default Text",
};

export default Alert;
