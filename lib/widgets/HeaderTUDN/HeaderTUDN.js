import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import Utils from "../../lib/helpers/utils";
import { HeaderDropDown, LoginProfile, LogOut } from "../../items";
import { Anchor, Button, Icons, Form, Modal } from "../../accessories";
import Animate from "../../helpers/animate";

import navigation from "./navigation.json";

import {
    HeaderStyles,
    HeaderMobile,
    HeaderGrid,
    HeaderLogo,
    HeaderLink,
    HeaderSubLink,
    HeaderLiveLink,
    HeaderLinkContainer,
    HeaderNavigation,
    HeaderDinamic,
    InnerSearch,
    InnerSearchContainer,
    InnerSearchBox,
    InnerSearchInput,
    HeaderLinkBox,
    HeaderSocial,
    OpenSearch,
    SocialText,
    LogoAnchor,
    SearchStyles,
    ArrowStyles,
} from "./styles";

const HeaderTUDN = ({ breadcrumbs, uri, logged }) => {
    const [search, handleSearch] = useState(false);
    const [menu, handleMenu] = useState(false);
    const [modal, setModal] = useState(false);

    return (
        <HeaderStyles as="header" id="Header">
            <Animate
                animation={modal ? "FadeIn" : "FadeOut"}
                duration="0.8s"
                playState={modal ? "running" : "paused"}
                style={{ zIndex: "10", position: "fixed" }}
            >
                <Modal active={modal} closebtn={false}>
                    <LogOut handleClose={() => setModal(!modal)} />
                </Modal>
            </Animate>
            <HeaderMobile variant="Transparent" as="section">
                <LogoAnchor>
                    <Icons color="#079F70" name="Deportes" size={120} variant="Transparent" />
                </LogoAnchor>
                <Animate
                    animation={menu ? "FadeIn" : "FadeOut"}
                    duration="0.8s"
                    playState={menu ? "running" : "paused"}
                >
                    <Button
                        aria-label="Menu"
                        variant="Transparent"
                        onClick={() => {
                            handleMenu(true);
                            handleSearch(!search);
                        }}
                    >
                        <Icons color="#079F70" name="Menu" variant="Transparent" />
                    </Button>
                </Animate>
            </HeaderMobile>
            <Animate
                animation={menu ? "FadeIn" : "FadeOut"}
                duration="0.8s"
                playState={menu ? "running" : "paused"}
            >
                <HeaderGrid variant="Transparent" id="Navigation" active={menu}>
                    <HeaderLogo as="section" variant="Transparent" color={menu ? "gray" : null}>
                        <LogoAnchor href="/">
                            <Icons
                                color="#079F70"
                                name="Deportes"
                                size={120}
                                variant="Transparent"
                            />
                        </LogoAnchor>
                        <Button
                            variant="Transparent"
                            onClick={() => {
                                handleMenu(false);
                                handleSearch(!search);
                            }}
                            m="0"
                        >
                            <Icons color="#079F70" name="Close" variant="Transparent" />
                        </Button>
                    </HeaderLogo>
                    <HeaderNavigation variant="Transparent" as="section">
                        <HeaderLinkContainer variant="Transparent" as="nav">
                            <HeaderLinkBox variant="Transparent">
                                {navigation.map(nav => {
                                    let LinkTag;
                                    if (nav.live) {
                                        LinkTag = HeaderLiveLink;
                                    } else if (nav.subnav) {
                                        LinkTag = HeaderSubLink;
                                    } else {
                                        LinkTag = HeaderLink;
                                    }

                                    return (
                                        <LinkTag
                                            href={nav.path}
                                            key={nav.name}
                                            // active={breadcrumbs[0].uri === nav.path}
                                        >
                                            {nav.name}
                                        </LinkTag>
                                    );
                                })}
                            </HeaderLinkBox>
                        </HeaderLinkContainer>
                        <InnerSearch variant="Transparent" as="section">
                            <InnerSearchContainer variant="Transparent">
                                <InnerSearchBox variant="Transparent">
                                    <Form>
                                        <InnerSearchInput
                                            placeholder="Buscar"
                                            inputWidth="100%"
                                            autoFocus
                                        />
                                    </Form>
                                </InnerSearchBox>
                                {/* <Button variant="Transparent" aria-label="hamburger">
                                <Icons color="#079F70" name="Search" variant="Transparent" />
                            </Button> */}
                            </InnerSearchContainer>
                            {logged && <LoginProfile handleSession={setModal} />}
                        </InnerSearch>
                    </HeaderNavigation>
                    <HeaderDinamic variant="Transparent">
                        <HeaderDropDown
                            logged={logged}
                            active={search}
                            handleModal={() => handleSearch(!search)}
                            handleLoggedOut={() => setModal(!modal)}
                        />
                        <SocialText>¿Ya nos sigues?</SocialText>
                        <HeaderSocial variant="Transparent" as="nav">
                            <Anchor href="./">
                                <Icons color="#fff" name="Facebook" variant="Transparent" />
                            </Anchor>
                            <Anchor href="./">
                                <Icons color="#fff" name="Twitter" variant="Transparent" />
                            </Anchor>
                            <Anchor href="./">
                                <Icons color="#fff" name="YouTube" variant="Transparent" />
                            </Anchor>
                            <Anchor href="./">
                                <Icons color="#fff" name="Instagram" variant="Transparent" />
                            </Anchor>
                        </HeaderSocial>
                        <OpenSearch variant="Flex">
                            <SearchStyles placeholder="Buscar" />
                            <Button variant="Transparent" onClick={() => handleSearch(!search)}>
                                <Icons
                                    color="#464646"
                                    name="Profile"
                                    size={30}
                                    variant="Transparent"
                                />
                            </Button>
                            <ArrowStyles
                                color="#079F70"
                                name="Next"
                                size={15}
                                variant="Transparent"
                            />
                        </OpenSearch>
                    </HeaderDinamic>
                </HeaderGrid>
            </Animate>
        </HeaderStyles>
    );
};

HeaderTUDN.propTypes = {
    // breadcrumbs: PropTypes.arrayOf(
    //     PropTypes.shape({
    //         uri: PropTypes.string.isRequired,
    //     }),
    // ).isRequired,
    // uri: PropTypes.string.isRequired,
    logged: PropTypes.bool,
};
HeaderTUDN.defaultProps = {
    logged: true,
};

export default HeaderTUDN;
