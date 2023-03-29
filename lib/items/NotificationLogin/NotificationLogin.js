import React from "react";
import PropTypes from "prop-types";
import { BoxNotification, TextNotification } from "./styles";

const NotificationLogin = props => {
    const { text } = props;
    return (
        <BoxNotification>
            <TextNotification>{text}</TextNotification>
        </BoxNotification>
    );
};

NotificationLogin.propTypes = {
    text: PropTypes.string,
};

NotificationLogin.defaultProps = {
    text:
        "Se ha enviado exitosamente. Revisa tu bandeja de entrada o spam y accede al enlace para restablecer tu contraseña.",
};

export default NotificationLogin;
