import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { 
    NotificationsStyles, 
    NotificationsTitle, 
    TitleContainer, 
    EventsContainer,
    EventRemminderContainer,
    EventRemminderText,
    EventRemminderEmpty,
    NotificationIcon,
} from "./styles";
import { EventRemminderMobile } from "../../widgets";

const Notifications = props => {
    const{ title, text, empty, event } = props;
    const favoriteCallback = () => {
        setFavorite(!favorite);
        
    };
    const [favorite, setFavorite] = useState(false);
    return (
        <NotificationsStyles variant="Transparent"> 
            <TitleContainer variant="Transparent">
                <NotificationsTitle variant="h2">{title}</NotificationsTitle>
                
                    <NotificationIcon
                    variant="Outline" 
                    icon="Calendar" 
                    btniconsize="18px"
                    onClick={() => favoriteCallback()}
                    iconcolor={favorite ? "Light" : "Secondary"}
                    bg= {favorite ? "Secondary": "Light"}
                    />
                
            </TitleContainer>
            <EventsContainer variant="Transparent">

            {empty && 
                <EventRemminderContainer variant="Transparent">
                    <EventRemminderText>{text} </EventRemminderText> 
                </EventRemminderContainer>
            }
            
            {event && 
                <EventRemminderContainer variant="Transparent">
                    <EventRemminderMobile/>
                </EventRemminderContainer>
            }

                <EventRemminderEmpty variant="Transparent"/>
                <EventRemminderEmpty variant="Transparent"/>
            </EventsContainer>
        </NotificationsStyles>
    );
};

Notifications.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    empty: PropTypes.bool,
    event: PropTypes.bool,
};

Notifications.defaultProps = {
    title: "Notificaciones",
    text: "Aún no tienes recordatorios para eventos o partidos.",
    empty: false,
    event: false,
};

export default Notifications;
