import React from "react";
import { Title } from "accessories";

import LoginForm from "../../lib/items/LoginForm";

export default {
    title: "Desing System/items/LoginForm",
};

export const LOGINFORM = args => {
    return (
        <div>
            <Title variant="h2">HeaderDropDown Login Form</Title>
            <LoginForm {...args} />
        </div>
    );
};

LOGINFORM.args = {
    errorsmail: false,
    errorspass: false,
    textErrorpass:
        "La contraseña es incorrecta. Inténtalo de nuevo o inicia sesión de otra manera.",
    textError:
        "Comprueba tu dirección de correo electrónico. Inténtalo de nuevo o inicia sesión de otra manera.",
};
LOGINFORM.argTypes = {
    errorsmail: {
        description: "Displays error text in email input",
        table: {
            defaultValue: {
                summary: "False",
            },
        },
        control: {
            type: "boolean",
        },
    },
    errorspass: {
        description: "Displays error text in password input",
        table: {
            defaultValue: {
                summary: "False",
            },
        },
        control: {
            type: "boolean",
        },
    },
    textErrorpass: {
        description: "Error text in password input",
        table: {
            defaultValue: {
                summary: "La contraseña es incorrecta. Inténtalo de nuevo o inicia sesión de otra manera.",
            },
        },
        control: {
            type: "text",
        },
    },
    textError: {
        description: "Error text in email input",
        table: {
            defaultValue: {
                summary: "Comprueba tu dirección de correo electrónico. Inténtalo de nuevo o inicia sesión de otra manera.",
            },
        },
        control: {
            type: "text",
        },
    },
};
