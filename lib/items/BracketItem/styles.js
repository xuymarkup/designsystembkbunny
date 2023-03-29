import styled, { css } from "styled-components";
import { Box } from "../../accessories";

const Score = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        min-width: 175px;
        display: flex;
        background-color: ${theme.colors.gray};
        justify-content: center;
        border-radius: 10px;
        padding: ${theme.space.md};
        flex-wrap: wrap;
    `,
);
const BoxScore = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        background-color: transparent;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: ${theme.space.zero} ${theme.space.xs};
    `,
);

export { Score, BoxScore };
