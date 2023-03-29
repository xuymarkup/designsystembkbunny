import styled, { css } from "styled-components";
import variants from "../../helpers/variants";

const common = ({ theme }) => css`
    font-family: ${theme.fonts[1]};
    font-size: ${theme.fontSizes.fxs};
`;

const Error = ({ theme }) => css`
    ${common}
   color: ${theme.colors.Danger};
   font-weight: bold;
   display: block;
`;

const variant = variants("variant", {
    Error,
});

const Info = styled("span")(variant);
export default Info;
