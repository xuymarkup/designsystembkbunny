import React from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import { FooterStylesAMP, CopyRightStylesAMP, TextCopyStylesAMP } from "./styles";

const FooterAMP = props => {
    const { footertext } = props;
    return (
        <FooterStylesAMP>
            <CopyRightStylesAMP>
                <Icons color="#fff" name="Logo" size={45} variant="Transparent" />
                <TextCopyStylesAMP>{footertext}</TextCopyStylesAMP>
            </CopyRightStylesAMP>
        </FooterStylesAMP>
    );
};

FooterAMP.propTypes = {
    footertext: PropTypes.string,
};

FooterAMP.defaultProps = {
    footertext: "Derechos Reservados @ Televisa S.A. de C.V.",
};

export default FooterAMP;
