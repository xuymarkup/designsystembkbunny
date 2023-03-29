import React from "react";
import PropTypes from "prop-types";
import { ButtonStyles } from "./styles";
import { Alert } from "../../accessories";

const LogOut = props => {
    const { handleClose } = props;
    return (
        <Alert copyText="¿Seguro que deseas Cerrar Sesión ?">
            <ButtonStyles onClick={handleClose}>Cancelar</ButtonStyles>
            <ButtonStyles variant="Outline">Cerrar Sesión</ButtonStyles>
        </Alert>
    );
};

LogOut.propTypes = {
    handleClose: PropTypes.func.isRequired,
};
LogOut.defaultProps = {};

export default LogOut;
