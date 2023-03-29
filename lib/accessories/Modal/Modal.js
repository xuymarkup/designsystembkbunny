import React from "react";
import PropTypes from "prop-types";
import { ModalStyles, ModalClose } from "./styles";

const Modal = props => {
    const { children, handleClose, closebtn, variantClose, iconSize, iconcolor } = props;
    
    return (
        <ModalStyles variant="Transparent" as="section" {...props}>
            {closebtn ? (
                <ModalClose
                    variant={variantClose}
                    onClick={handleClose}
                    aria-label="close"
                    my="12px"
                    icon="Close"
                    iconcolor={iconcolor}
                    btniconsize={iconSize}
                />
            ) : null}
            {children}
        </ModalStyles>
    );
};

Modal.propTypes = {
    children: PropTypes.node,
    closebtn: PropTypes.bool,
    handleClose: PropTypes.func,
    variantClose: PropTypes.string,
    iconSize: PropTypes.number,
    iconcolor: PropTypes.string,
};

Modal.defaultProps = {
    children: null,
    closebtn: true,
    variantClose: "Normal",
    iconSize: 40,
    iconcolor: "#fff",
};

export default Modal;
