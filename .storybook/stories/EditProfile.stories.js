import React from "react";
import { Title } from "accessories";

import EditProfile from "../../lib/widgets/EditProfile";

export default {
    title: "Desing System/widgets/EditProfile",
};

export const EDITPROFILE = () => {
    return (
        <div>
            <Title variant="h2">Edit Profile</Title>
            <EditProfile EditProfile={true} />
        </div>
    );
};

export const DELETEPROFILE = () => {
    return (
        <div>
            <Title variant="h2">Delete Profile</Title>
            <EditProfile DeleteProfile={true} />
        </div>
    );
};

export const THEMEPROFILES = () => {
    return (
        <div>
            <Title variant="h2">Theme Profile</Title>
            <EditProfile ThemeUndo={true} />
        </div>
    );
};

export const EDITPASWORD = () => {
    return (
        <div>
            <Title variant="h2">Edit Pasword</Title>
            <EditProfile EditPassword={true} />
        </div>
    );
};

export const THEMEPROFILECOLOR = () => {
    return (
        <div>
            <Title variant="h2">Theme Profile</Title>
            <EditProfile ThemeProfileColor={true} />
        </div>
    );
};

export const NOTIFICATIONLOGIN = () => {
    return (
        <div>
            <Title variant="h2">Notificaciones Login</Title>
            <EditProfile NotificationLogin={true} />
        </div>
    );
};

export const NOTIFICATIONACTIVE = () => {
    return (
        <div>
            <Title variant="h2">Activa Notificaciones</Title>
            <EditProfile NotificationActive={true} />
        </div>
    );
};

export const NOTIFICATIONDELETE = () => {
    return (
        <div>
            <Title variant="h2">Eliminar Notificación</Title>
            <EditProfile NotificationDelete={true} />
        </div>
    );
};

export const SYNCHRONIZED = () => {
    return (
        <div>
            <Title variant="h2">Eventos sincronizados</Title>
            <EditProfile Synchronized={true} />
        </div>
    );
};

export const CALENDARDELETE = () => {
    return (
        <div>
            <Title variant="h2">Retirar Eventos</Title>
            <EditProfile CalendarDelete={true} />
        </div>
    );
};

