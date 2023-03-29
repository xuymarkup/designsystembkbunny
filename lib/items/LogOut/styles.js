import styled, { css } from "styled-components";
import { Button } from "../../accessories";

const ButtonStyles = styled(Button)(
    ({ theme }) => css`
        min-width: 120px;
        height: 40px;
        justify-content: center;
        font-size: ${theme.fontSizes.fsm};
    `,
);

export { ButtonStyles };
