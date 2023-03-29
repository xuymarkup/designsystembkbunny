import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles, ButtonIcon } from "./styles";

const Button = props => {
    const { children, icon, iconcolor, btniconsize } = props;
    return (
        <ButtonStyles {...props}>
            {icon ? <ButtonIcon name={icon} iconcolor={iconcolor} size={btniconsize} /> : null}
            {children}
        </ButtonStyles>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    icon: PropTypes.string,
    iconcolor: PropTypes.string,
    btniconsize: PropTypes.number,
};

Button.defaultProps = {
    variant: "Solid",
    icon: "",
    iconcolor: "",
    btniconsize: 40,
};

export default Button;
