import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    SignupStyles,
    SignupFormStyles,
    TextPrivacy,
    TextPrivacyAnchor,
    BoxPrivacy,
} from "./styles";
import { Text, Icons, Box } from "../../accessories";
import { FormStyles,
    InputStyle,
    ButtonStyles,
    LineStyles,
    TextLine,
    TextGoogle,
    BoxAlert,
    MessageError,
    IconVisible,} from "../LoginForm/styles";
const Signup = props => {
    const { errorsmail, errorsmail2,textError, errorspass, textErrorpass,textError2,errorspass2,textErrorpass2 } = props;
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
       
        <SignupStyles variant="Flex">
            <SignupFormStyles>
                <Box variant="Flex" align="left" my="sm">
                    <Text color="gray" size="fmd" variant="Bold">
                        Registro
                    </Text>
                </Box>
                <Box variant="Flex" br="5px" my="sm">
                    <InputStyle
                        icon=""
                        placeholder="Nombre"
                        inputWidth="100%"
                        type="nombre"
                    />
                </Box>
                <Box variant="Flex" br="5px" my="sm">
                    <InputStyle
                        variant={errorsmail ? "Error" : "White"}
                        icon=""
                        placeholder="E-mail"
                        inputWidth="100%"
                        type="nombre"
                    />
                </Box>
                {errorsmail ? (
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={20} />
                        <MessageError>{textError}</MessageError>
                    </BoxAlert>
                ) : null}
                {errorsmail2 ? (
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={25} />
                        <MessageError>{textError2}</MessageError>
                    </BoxAlert>
                ) : null}
                <Box variant="Flex"  br="5px" my="sm">
                    <InputStyle
                        type={passwordShown ? "text" : "password"}
                        variant={errorsmail ? "Error" : "White"}
                        icon=""
                        placeholder="Contraseña"
                        inputWidth="100%"
                    />
                    <IconVisible
                        onClick={togglePasswordVisiblity}
                        name={passwordShown ? "Eye" : "Hidden"}
                        iconcolor="gray4"
                        size={20}
                    />
                </Box>
                {errorspass && (
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={15} />
                        <MessageError>{textErrorpass}</MessageError>
                    </BoxAlert>
                )}
                <Box variant="Flex"  br="5px" my="sm">
                    <InputStyle
                        type={passwordShown ? "text" : "password"}
                        variant={errorsmail ? "Error" : "White"}
                        icon=""
                        placeholder="Repetir contraseña"
                        inputWidth="100%"
                    />
                    <IconVisible
                        onClick={togglePasswordVisiblity}
                        name={passwordShown ? "Eye" : "Hidden"}
                        iconcolor="gray4"
                        size={20}
                    />
                </Box>
                {errorspass2 && (
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={15} />
                        <MessageError>{textErrorpass2}</MessageError>
                    </BoxAlert>
                )}
                <BoxPrivacy variant="Transparent">
                    <TextPrivacy>Al seleccionar “Crear cuenta” , aceptas los</TextPrivacy>
                    <TextPrivacyAnchor> Términos del servicio y la Política de privacidad</TextPrivacyAnchor>
                </BoxPrivacy>
                <ButtonStyles>Crear cuenta</ButtonStyles>
                <Box variant="Flex">
                    <LineStyles /> 
                    <TextLine>O</TextLine>
                    <LineStyles />
                </Box>
                <ButtonStyles bg="google">
                    <Icons name="Google" color="#fff" size={23} />
                  <TextGoogle>Continuar con Google</TextGoogle>
                </ButtonStyles>
            </SignupFormStyles>
        </SignupStyles>
    );
};

Signup.propTypes = {
    errorsmail: PropTypes.bool,
    errorsmail2: PropTypes.bool,
    textError: PropTypes.string,
    textError2: PropTypes.string,
    errorspass: PropTypes.bool,
    errorspass2: PropTypes.bool,
    textErrorpass: PropTypes.string,
    textErrorpass2: PropTypes.string,
};
Signup.defaultProps = {
    errorsmail: true,
    errorsmail2: false,
    errorspass: true,
    errorspass2: false,
    textErrorpass:"La contraseña debe tener entre 8 y 12 caracteres.",
    textError: "Comprueba tu dirección de correo electrónico. Inténtalo de nuevo.",
    textError2: "El correo electrónico ya fue registrado previamente. Intenta con una cuenta diferente.",
    textErrorpass2: "Las contraseñas no coinciden.",
};

export default Signup;
