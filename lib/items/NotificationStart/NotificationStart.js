import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NotificationStartItemStyles, BoxNotification, TextNotification, ItemTeamImage } from "./styles";
import Animate  from "../../helpers/animate";
import Event01 from "../../../assets/sports-follow/img-sports-follow-2-158x158.png";

const NotificationStart = props => {
    const { text } = props;
    const [animationType, setAnimationType] = useState("FadeInDown");
    useEffect(() => {
        setAnimationType(window.innerWidth < 1024 ? "FadeInDown" : "FadeInRight");
    });
    return (
        <NotificationStartItemStyles variant="Transparent">
            <Animate animation={animationType} duration="1s" delay="0s">    
                    <BoxNotification variant="Flex">
                        <ItemTeamImage src={Event01} aria-label="Champions" />
                        <TextNotification>{text}</TextNotification>
                    </BoxNotification>                
            </Animate>
        </NotificationStartItemStyles>
    );
};

NotificationStart.propTypes = {
    text: PropTypes.string,
};

NotificationStart.defaultProps = {
    text:
        "Chelsea vs Dortmund esta a punto de iniciar.",
    };

export default NotificationStart;
