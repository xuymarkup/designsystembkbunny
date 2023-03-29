import React, { useState } from "react";
import PropTypes from "prop-types";
import LoginProfile from "../LoginProfile";
import LoginForm from "../LoginForm";
import Animate from "../../helpers/animate";
import { HeaderDropDownStyles, ResponsiveBox } from "./styles";

const HeaderDropDown = ({ active, handleModal, logged, handleLoggedOut }) => {
    return (
        <HeaderDropDownStyles active={active} id="HeaderDropDown" handleClose={handleModal}>
            <Animate
                animation={active ? "FadeInDown" : "FadeOut"}
                duration="0.8s"
                playState={active ? "running" : "paused"}
            >
                {logged ? (
                    <ResponsiveBox variant="Transparent">
                        <LoginProfile handleSession={handleLoggedOut} />
                    </ResponsiveBox>
                ) : (
                    <LoginForm />
                )}
            </Animate>
        </HeaderDropDownStyles>
    );
};

HeaderDropDown.propTypes = {
    active: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    handleLoggedOut: PropTypes.func.isRequired,
    logged: PropTypes.bool,
};
HeaderDropDown.defaultProps = {
    active: false,
    logged: false,
};

export default HeaderDropDown;
