import React from "react";
import PropTypes from "prop-types";
import { FooterTUDN } from "../widgets";
import { Nav, Main, GridLayout } from "./styles";
import HeaderTUDN from "../widgets/HeaderTUDN";

const Layout = props => {
    const { children, nav, foot, breadcrumbs, uri, social, filter } = props;
    return (
        <GridLayout {...props}>
            {nav && (
                <Nav>
                    <HeaderTUDN
                        // breadcrumbs={breadcrumbs}
                        // uri={uri}
                        social={social}
                        filter={filter}
                    />
                </Nav>
            )}
            <Main>{children}</Main>
            {foot ? <FooterTUDN /> : null}
        </GridLayout>
    );
};

Layout.propTypes = {
    breadcrumbs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    nav: PropTypes.bool,
    foot: PropTypes.bool,
    filter: PropTypes.string,
    children: PropTypes.node,
    social: PropTypes.arrayOf(PropTypes.shape({})),
    uri: PropTypes.string,
};

Layout.defaultProps = {
    filter: "",
    nav: true,
    foot: true,
    children: null,
    social: [],
    uri: "",
};

export default Layout;
