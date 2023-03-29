import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    LoginFormStyles,
    FormStyles,
    InputStyle,
    AnchorBox,
    ButtonStyles,
    LineStyles,
    AnchorStyles,
    ButtonContainers,
    ButtonMobileStyles,
    BoxAlert,
    MessageError,
    IconVisible,
    TextLine,
    TextGoogle,
} from "./styles";
import { Text, Icons, Box } from "../../accessories";

const LoginForm = props => {
    const { errorsmail, textError, errorspass, textErrorpass } = props;
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    return (
        <LoginFormStyles variant="Flex">
            <FormStyles>
                <Box variant="Flex" align="left" my="sm">
                    <Text color="gray" size="fmd" variant="Bold">
                        Iniciar sesión o regístrate
                    </Text>
                </Box>
                <Box variant="Flex" br="5px" my="sm">
                    <InputStyle
                        variant={errorsmail ? "Error" : "White"}
                        icon=""
                        placeholder="E-mail"
                        inputWidth="100%"
                        type="email"
                    />
                </Box>
                {errorsmail ? (
                    <BoxAlert variant="Transparent">
                        <Icons name="Alert" color="#F93131" size={30} />
                        <MessageError>{textError}</MessageError>
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
                        <Icons name="Alert" color="#F93131" size={30} />
                        <MessageError>{textErrorpass}</MessageError>
                    </BoxAlert>
                )}
                <AnchorBox variant="Flex" align="between">
                    <AnchorStyles href="#">¿Olvidaste la contraseña?</AnchorStyles>
                    <AnchorStyles href="#">Registrate</AnchorStyles>
                </AnchorBox>
                <ButtonStyles>Iniciar sesión</ButtonStyles>
                <Box variant="Flex">
                <LineStyles /> 
                <TextLine>O</TextLine>
                <LineStyles />
                </Box>
                <ButtonStyles bg="google">
                    <Icons name="Google" color="#fff" size={23} />
                  <TextGoogle>Continuar con Google</TextGoogle>
                </ButtonStyles>
            </FormStyles>
            <ButtonContainers variant="Flex">
                <ButtonMobileStyles>Regístrate</ButtonMobileStyles>
                <ButtonMobileStyles variant="Outline">Iniciar sesión</ButtonMobileStyles>
            </ButtonContainers>
        </LoginFormStyles>
    );
};

LoginForm.propTypes = {
    errorsmail: PropTypes.bool,
    textError: PropTypes.string,
    errorspass: PropTypes.bool,
    textErrorpass: PropTypes.string,
};
LoginForm.defaultProps = {
    errorsmail: false,
    errorspass: false,
    textErrorpass:
        "La contraseña es incorrecta. Inténtalo de nuevo o inicia sesión de otra manera.",
    textError:
        "Comprueba tu dirección de correo electrónico. Inténtalo de nuevo o inicia sesión de otra manera.",
};

export default LoginForm;
