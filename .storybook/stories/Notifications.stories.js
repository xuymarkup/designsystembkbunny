import React from "react";
import { Title } from "accessories";

import Notifications from "../../lib/widgets/Notifications";

export default {
    title: "Desing System/Template/Notifications",
};

export const NOTIFICATIONES = () => {
    return (
        <div>
            <Title variant="h2">Notificaciones Vacías</Title>
            <Notifications empty={true} />
        </div>
    );
};

export const EVENT = () => {
    return (
        <div>
            <Title variant="h2">Notificaciones Evento</Title>
            <Notifications event={true} />
        </div>
    );
};











