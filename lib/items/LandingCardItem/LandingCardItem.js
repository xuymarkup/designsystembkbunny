import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    LandingCardItemStyles,
    LandingCardItemBox,
    LandingCardIcon,
    LandingCardItemName,
    LandingCardItemText,
    LandingCardItemAnchor,
} from "./styles";
import { Image } from "../../accessories";

const LandingCardItem = props => {
    const { src, name, uri } = props;
    const [iconSize, setIconSize] = useState(20);
    useEffect(() => {
        setIconSize(window.innerWidth < 1024 ? 20 : 20);
    });
    const [favorite, setFavorite] = useState(false);
    return (
        <LandingCardItemStyles variant="Transparent">
            <LandingCardIcon
                icon="Star"
                btniconsize={iconSize}
                onClick={() => setFavorite(!favorite)}
                iconcolor={favorite ? "green" : "Light"}
            />
            <LandingCardItemAnchor href={uri}>
                <LandingCardItemBox variant="Transpartent">
                    <Image ratio="aspect3x4" src={src} />
                </LandingCardItemBox>
                <LandingCardItemName variant="Solid">
                    <LandingCardItemText>{name}</LandingCardItemText>
                </LandingCardItemName>
            </LandingCardItemAnchor>
        </LandingCardItemStyles>
    );
};

LandingCardItem.propTypes = {
    src: PropTypes.shape({}),
    name: PropTypes.string,
    uri: PropTypes.string,
};

LandingCardItem.defaultProps = {
    src: {},
    name: "TORNEOS",
    uri: "./",
};
export default LandingCardItem;
