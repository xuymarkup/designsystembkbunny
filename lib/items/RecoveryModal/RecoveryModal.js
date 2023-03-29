import React from "react";
import PropTypes from "prop-types";
import { TextRecovery, TextTitle } from "./styles";
import {
    LoginStyles,
    IconsClose,
    LoginContainerStyles,
    LoginInputStyles,
    BoxAlert,
    MessageError,
    LoginButtonStyles,
} from "../Password/styles";
import { Icons } from "../../accessories";
const RecoveryModal = props => {
    const { title, texterrormail, text, enlace, errormail } = props;
    return (
        <LoginStyles variant="Transparent">
            <IconsClose name="Close" color="#ffff" />
            <TextTitle>{title}</TextTitle>
            <TextRecovery>{text}</TextRecovery>
            {errormail ? (
                <LoginContainerStyles variant="Transparent">
                    <LoginInputStyles icon={false} placeholder="Nombre" />
                </LoginContainerStyles>
            ) : (
                <LoginContainerStyles variant="Transparent">
                    <LoginInputStyles variant="Error" icon={false} placeholder="Nombre" />
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={20} />
                        <MessageError>{texterrormail}</MessageError>
                    </BoxAlert>
                </LoginContainerStyles>
            )}
            <LoginButtonStyles variant="Transparent">{enlace}</LoginButtonStyles>
        </LoginStyles>
    );
};

RecoveryModal.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    texterrormail: PropTypes.string,
    enlace: PropTypes.string,
    errormail: PropTypes.bool,
};

RecoveryModal.defaultProps = {
    errormail: true,
    title: "Recuperar Contraseña",
    enlace: "Enviar Enlace",
    text:
        "Ingresa la dirección de correo electrónico asociada a tu cuenta y te enviaremos un enlace para restablecer tu contraseña.",
    texterrormail: "Comprueba tu dirección de correo electrónico. Inténtalo de nuevo.",
};

export default RecoveryModal;
