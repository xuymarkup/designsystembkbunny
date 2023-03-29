import styled, { css } from "styled-components";

const FormStyles = () => css`
    min-width: 200px;
    width: 100%;
    align-items: center;
    display: flex;
`;
const Form = styled("form")(FormStyles);
export default Form;
