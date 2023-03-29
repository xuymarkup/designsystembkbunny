import React from "react";
import PropTypes from "prop-types";
import {
    EditProfileStyles,
    FormStyles,
    ProfileButton,
    TextProfile,
    EditProfileContainer,
    BoxIcon,
    ThemeText,
    BoxThemeContainer,
    ButtonSecondary,
    TextNotifications,
} from "./styles";

import { ThemeProfile } from "../../items";
import { LoginInputStyles } from "../../items/Password/styles";
import { 
    TextAnchor,
} from "../../widgets/Profile/styles";


import { Text, Box, Icons } from "../../accessories";
import { TextNotification } from "../../items/NotificationLogin/styles";

const EditProfile = props => {
    const {
        DeleteProfile, 
        EditProfile, 
        ThemeUndo, 
        EditPassword, 
        ThemeProfileColor, 
        items, 
        save,
        cancel,
        edit,
        question,
        deletetheme,
        changetheme,
        restore,
        editpassword,
        forgotpassword,
        selecttheme,
        NotificationLogin,
        NotificationActive,
        NotificationDelete,
        Synchronized,
        CalendarDelete,
    } = props;
    return (
        <EditProfileStyles variant="Flex">

        {EditProfile && 
            <FormStyles>
                <Box variant="Flex" >
                    <Text color="gray" size="fmd" variant="Bold" justify="flex-start">
                        {edit}
                    </Text>
                </Box>
                <LoginInputStyles variant="White" icon="" placeholder="Nombre" inputWidth="100%" />
                <LoginInputStyles variant="White" icon="" placeholder="E-mail" inputWidth="100%" />
                <Box variant="Flex">
                    <ProfileButton>{save}</ProfileButton>
                    <ButtonSecondary>{cancel}</ButtonSecondary>
                </Box>
            </FormStyles>
        }

        {DeleteProfile &&
            <EditProfileContainer variant="Transparent">
                <BoxIcon variant="Transparent">
                    <Icons name="Elimiar" color="#38DEAC" size={20} />
                </BoxIcon>
                <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                    {question}
                </TextProfile>
                <Box variant="Flex">
                    <ProfileButton>{deletetheme}</ProfileButton>
                    <ButtonSecondary>{cancel}</ButtonSecondary>
                </Box>
            </EditProfileContainer>
        }

        {ThemeUndo &&
                <EditProfileContainer variant="Transparent">
                    <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                        {changetheme}
                    </TextProfile>
                    <Box variant="Flex">
                        <ProfileButton>{restore}</ProfileButton>
                        <ButtonSecondary>{cancel}</ButtonSecondary>
                    </Box>
                </EditProfileContainer>
            }

        {EditPassword && 
                <FormStyles>
                    <Box variant="Flex" >
                        <Text color="gray" size="fmd" variant="Bold" justify="flex-start">
                            {editpassword}
                        </Text>
                    </Box>
                    <LoginInputStyles variant="White" icon="" placeholder="Contraseña actual" inputWidth="100%" />
                    <LoginInputStyles variant="White" icon="" placeholder="Nueva contraseña" inputWidth="100%" />
                    <LoginInputStyles variant="White" icon="" placeholder="Repetir contraseña" inputWidth="100%" />
                    <TextAnchor>{forgotpassword}</TextAnchor>
                    <Box variant="Flex">
                        <ProfileButton>{save}</ProfileButton>
                        <ButtonSecondary>{cancel}</ButtonSecondary>
                    </Box>
                </FormStyles>
            }

            {ThemeProfileColor &&
                <EditProfileContainer variant="Transparent">
                    <Text color="gray" size="fmd" variant="Bold">
                        {selecttheme}
                    </Text>

                    <ThemeText>Liga MX</ThemeText>
                    <BoxThemeContainer variant="Flex">
                    
                        {items.map((item) => <ThemeProfile  key={item.id}/> )}

                    </BoxThemeContainer>

                    <ThemeText>Internacional</ThemeText>
                    <BoxThemeContainer variant="Flex">

                        {items.map((item) => <ThemeProfile  key={item.id}/> )}

                    </BoxThemeContainer>
                    
                    
                    <Box variant="Flex">
                        <ProfileButton>{save}</ProfileButton>
                        <ButtonSecondary>{cancel}</ButtonSecondary>
                    </Box>

                </EditProfileContainer>
            }

            {NotificationLogin &&
                <EditProfileContainer variant="Transparent">
                    <BoxIcon variant="Transparent">
                        <Icons name="Notification" color="#38DEAC" size={20} />
                    </BoxIcon>
                    <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                        Para agregar más recordatorios inicia sesión o registrate.
                    </TextProfile>
                    <Box variant="Flex">
                        <ProfileButton>Registrate</ProfileButton>
                        <ButtonSecondary>Inicia Sesión</ButtonSecondary>
                    </Box>
                </EditProfileContainer>
            }

            {NotificationActive &&
                <EditProfileContainer variant="Transparent">
                    <BoxIcon variant="Transparent">
                        <Icons name="Notification" color="#38DEAC" size={20} />
                    </BoxIcon>
                    <TextNotifications color="gray" size="fsm" variant="Bold" justify="flex-start">
                        Has activado las notificaciones para este evento.
                    </TextNotifications>
                    
                    <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                        Para agregar este y otros eventos o partidos a tu calendario.
                    </TextProfile>
                    <Box variant="Flex">
                        <ProfileButton>Registrate</ProfileButton>
                        <ButtonSecondary>Inicia Sesión</ButtonSecondary>
                    </Box>
                </EditProfileContainer>
            }

            {NotificationDelete &&
                <EditProfileContainer variant="Transparent">
                    <BoxIcon variant="Transparent">
                        <Icons name="Elimiar" color="#38DEAC" size={20} />
                    </BoxIcon>
                    
                    <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                        ¿Estás seguro de eliminar las notificaciones para Chelsea vs Dortmund?
                    </TextProfile>
                    <Box variant="Flex">
                        <ProfileButton>{cancel}</ProfileButton>
                        <ButtonSecondary>Aceptar</ButtonSecondary>
                    </Box>
                </EditProfileContainer>
            }

            {Synchronized &&
                <EditProfileContainer variant="Transparent">
                    <BoxIcon variant="Transparent">
                        <Icons name="Calendar" color="#38DEAC" size={20} />
                    </BoxIcon>
                    
                    <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                        Los eventos se han sincronizado con tu calendario asociado a daniel.lopez@gmail.com
                    </TextProfile>
                    
                </EditProfileContainer>
            }

            {CalendarDelete &&
                <EditProfileContainer variant="Transparent">
                    <BoxIcon variant="Transparent">
                        <Icons name="Calendar" color="#38DEAC" size={20} />
                    </BoxIcon>
                    
                    <TextProfile color="gray" size="fsm" variant="Bold" justify="flex-start">
                        A partir de este momento los eventos dejaran de aparecer en tu calendario.
                    </TextProfile>
                </EditProfileContainer>
            }

        </EditProfileStyles>
    );
};

EditProfile.propTypes = {
    DeleteProfile: PropTypes.bool,
    EditProfile: PropTypes.bool,
    ThemeUndo: PropTypes.bool,
    EditPassword: PropTypes.bool,
    ThemeProfileColor: PropTypes.bool,
    NotificationLogin: PropTypes.bool,
    NotificationActive: PropTypes.bool,
    NotificationDelete: PropTypes.bool,
    Synchronized: PropTypes.bool,
    CalendarDelete: PropTypes.bool,
    save: PropTypes.string,
    cancel: PropTypes.string,
    edit: PropTypes.string,
    question: PropTypes.string,
    deletetheme: PropTypes.string,
    changetheme: PropTypes.string,
    restore: PropTypes.string,
    editpassword: PropTypes.string,
    forgotpassword: PropTypes.string,
    selecttheme: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
};

EditProfile.defaultProps = {
    EditProfile: false,
    DeleteProfile: false,
    ThemeUndo: false,
    EditPassword: false,
    ThemeProfileColor: false,
    NotificationLogin: false,
    NotificationActive: false,
    NotificationDelete:false,
    Synchronized:false,
    CalendarDelete: false,
    save:"Guardar",
    cancel:"Cancelar",
    edit:"Editar datos",
    question:"¿Estas seguro que deseas eliminar tu cuenta? Esta acción no se puede revertir.",
    deletetheme:"Eliminar cuenta",
    changetheme:"¿Deseas cambiar el tema por el de TUDN?",
    restore:"Restablecer",
    editpassword:"Editar Contraseña",
    forgotpassword:"Olvidaste tu Contraseña",
    selecttheme:"Selecciona el tema de tu preferencia",
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
        {
            id: 9,
        },
    ],
};

export default EditProfile;