import React from "react";
import PropTypes from "prop-types";

import {
    BoxTheme, 
    TextProfile,
    ThemeContainer,
    ThemeColor,
    ThemeColorTUDN,
} from "./styles";

const ThemeProfile = props => {
    const {  text } = props;
    return (
        <BoxTheme variant="Transparent">
        <TextProfile>
            {text} 
        </TextProfile>
        <ThemeContainer variant="Transparent">
            <ThemeColor />
            <ThemeColorTUDN/>
        </ThemeContainer>
        </BoxTheme>
    );
};

ThemeProfile.propTypes = {
    text: PropTypes.string,
};

ThemeProfile.defaultProps = {
    text:"America",
};

export default ThemeProfile;
