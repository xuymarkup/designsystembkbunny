import styled, { css } from "styled-components";
import variants from "../../helpers/variants";
import Box from "../Box";
import Button from "../Button";

const ModalStyles = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.modal};
        display: ${props => (props.active ? "flex" : "none")};
        align-items: center;
        bottom: 0;
        flex-direction: column;
        height: 100vh;
        justify-content: flex-start;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        width: 100%;
        z-index: 25;
    `,
);

const Normal = ({ theme }) => css`
    display: flex;
    margin: ${props => (props.my ? props.theme.space[props.my] : theme.space.xl3)} 12px;
    width: 100%;
    justify-content: flex-end;
`;

const Login = ({ theme }) => css`
    position: absolute;
    z-index: 3;
    right: 50%;
    transform: translate(150px, 35px);
    border: 1px solid ${theme.colors.Interaction};
    border-radius: 20px;
    @media (min-width: ${theme.breakpoints.lg}) {
        transform: translate(210px, 60px);
    }
`;
const variantClose = variants("variant", {
    Normal,
    Login,
});

const ModalClose = styled(Button)(variantClose);

export { ModalStyles, ModalClose };
