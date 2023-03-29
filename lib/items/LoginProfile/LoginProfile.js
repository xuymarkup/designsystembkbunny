import React from "react";
import PropTypes from "prop-types";
import { Box, Text, Icons } from "../../accessories";
import { LoginProfileStyles, AnchorStyles, DataBoxStyles, LinksStyles } from "./styles";

const LoginProfile = props => {
    const { name, coins, grade, handleSession } = props;
    return (
        <LoginProfileStyles variant="Flex">
            <DataBoxStyles variant="Flex">
                <Box variant="Transparent" w="120px">
                    <Icons name="Profile" color="#fff" size={40} />
                </Box>
                <Box variant="Transparent">
                    <Text color="gray">{name}</Text>
                    <Box variant="Flex">
                        <Box variant="Transparent" w="40px">
                            <Icons name="Medalla" color="#808080" size={30} />
                        </Box>
                        <Box variant="Transparent">
                            <Text color="gray4">{grade}</Text>
                            <Text color="gray4">{coins}</Text>
                        </Box>
                    </Box>
                </Box>
            </DataBoxStyles>
            <LinksStyles variant="Flex">
                <AnchorStyles href="#">Editar Perfil</AnchorStyles>
                <AnchorStyles href="#">Notificaciones</AnchorStyles>
                <AnchorStyles onClick={handleSession}>Cerrar Sesión</AnchorStyles>
            </LinksStyles>
        </LoginProfileStyles>
    );
};

LoginProfile.propTypes = {
    name: PropTypes.string,
    coins: PropTypes.number,
    grade: PropTypes.string,
    handleSession: PropTypes.func.isRequired,
};
LoginProfile.defaultProps = {
    name: "Daniel Lopez",
    coins: 0,
    grade: "Amateur",
};

export default LoginProfile;
