import styled from "styled-components";

const Grid = styled.div`
    display: grid;
    grid-template-areas: ${props => props.areas};
    grid-row-gap: 4em;
    grid-column-gap: 1em;
    grid-template-columns: repeat(14, 1fr);
    grid-auto-rows: minmax(520px, auto);
`;

export default Grid;
