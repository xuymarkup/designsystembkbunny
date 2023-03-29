import styled, { css } from "styled-components";

const imgcss = css`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    object-fit: contain;
`;
const Image = styled.img(imgcss);

export default Image;
