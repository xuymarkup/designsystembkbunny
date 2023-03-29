import styled, { css } from "styled-components";
import { Box, Anchor } from "../../accessories";

const LoginProfileStyles = styled(Box)(
    ({ theme }) => css`
        flex-direction: column;
        align-items: flex-start;
        color: ${theme.colors.gray};
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xl};

        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 223px;
            min-height: 221px;
            background: ${theme.colors.modal};
            border-radius: 15px;
            padding: ${theme.space.xxl};
            box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
        }
    `,
);

const AnchorStyles = styled(Anchor)(
    ({ theme }) => css`
        color: ${theme.colors.gray};
        padding: ${theme.space.md} ${theme.space.zero};

        &:hover {
            opacity: 0.5;
        }
    `,
);

const DataBoxStyles = styled(Box)(
    ({ theme }) => css`
        min-height: 100px;
        align-items: flex-start;
    `,
);

const LinksStyles = styled(Box)(
    ({ theme }) => css`
        flex-direction: column;
        align-items: flex-start;
    `,
);

export { LoginProfileStyles, AnchorStyles, DataBoxStyles, LinksStyles };
