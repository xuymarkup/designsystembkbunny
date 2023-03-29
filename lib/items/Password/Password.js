import React from "react";
import PropTypes from "prop-types";
import {
    LoginStyles,
    IconsClose,
    LoginContainerStyles,
    LoginInputStyles,
    BoxAlert,
    MessageError,
    TextTitle,
    LoginPasswordButton,
} from "./styles";

import { Icons } from "../../accessories";

const Password = props => {
    const { title, texterrormail, errormail, confirm, errorpass, text2 } = props;
    return (
        <LoginStyles h="457px" variant="Transparent">
            <IconsClose name="Close" color="#ffff" />
            <TextTitle>{title}</TextTitle>
            {errormail ? (
                <LoginContainerStyles variant="Transparent">
                    <LoginInputStyles icon={false} placeholder="Contraeña" />
                </LoginContainerStyles>
            ) : (
                <LoginContainerStyles variant="Transparent">
                    <LoginInputStyles variant="Error" icon={false} placeholder="Contraseña" />
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={20} />
                        <MessageError>{texterrormail}</MessageError>
                    </BoxAlert>
                </LoginContainerStyles>
            )}
            {errorpass ? (
                <LoginContainerStyles variant="Transparent">
                    <LoginInputStyles icon={false} placeholder="Verificar contraeña" />
                </LoginContainerStyles>
            ) : (
                <LoginContainerStyles variant="Transparent">
                    <LoginInputStyles
                        variant="Error"
                        icon={false}
                        placeholder="Verificar contraeña"
                    />
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={20} />
                        <MessageError>{text2}</MessageError>
                    </BoxAlert>
                </LoginContainerStyles>
            )}
            <LoginPasswordButton variant="Transparent">{confirm}</LoginPasswordButton>
        </LoginStyles>
    );
};

Password.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    confirm: PropTypes.string,
    texterrormail: PropTypes.string,
    enlace: PropTypes.string,
    text2: PropTypes.string,
    errormail: PropTypes.bool,
    errorpass: PropTypes.bool,
};

Password.defaultProps = {
    errormail: true,
    errorpass: true,
    confirm: "Confirmar",
    title: "Actualizar contraseña",
    text2: "Las contraseñas no conciden",
    texterrormail: "La contraseña debe tener entre 8 y 12 caracteres.",
};

export default Password;
