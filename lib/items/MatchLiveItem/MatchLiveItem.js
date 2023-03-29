import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    MatchLiveItemStyles,
    MatchLiveItemBoxStyles,
    MatchLiveItemTitleStyles,
    TeamItemImage,
    MatchliveItemIcon,
    MatchLiveItemBox,
    MatchLiveIconBox,
    MatchLiveItemBoxImage,
} from "./styles";

const MatchLiveItem = props => {
    const { event, scoreLocal, scoreAway, srcLocal, srcAway } = props;
    const [favorite, setFavorite] = useState(false);
    const [iconname, setIconname] = useState("Minireproductor");
    const favoriteCallback = () => {
        setFavorite(!favorite);
        setIconname(iconname === "Minireproductor" ? "CerrarReproductor" : "Minireproductor");
    };
    const [iconSize, setIconSize] = useState(26);
    useEffect(() => {
        setIconSize(window.innerWidth < 1024 ? 30 : 30);
    });

    return (
        <MatchLiveItemStyles variant="Flex">
            <MatchLiveItemBox href="./">
                <MatchLiveItemBoxImage variant="Transparent">
                    <TeamItemImage
                        src={srcLocal}
                        ratio="aspect1x1"
                        icon={false}
                        variant="Transparent"
                    />
                </MatchLiveItemBoxImage>
                <MatchLiveItemBoxStyles variant="Transparent">
                    <MatchLiveItemTitleStyles>{scoreLocal}</MatchLiveItemTitleStyles>
                    <MatchLiveItemTitleStyles>:</MatchLiveItemTitleStyles>
                    <MatchLiveItemTitleStyles>{scoreAway}</MatchLiveItemTitleStyles>
                </MatchLiveItemBoxStyles>
                <MatchLiveItemBoxImage variant="Transparent">
                    <TeamItemImage
                        src={srcAway}
                        ratio="aspect1x1"
                        icon={false}
                        variant="Transparent"
                    />
                </MatchLiveItemBoxImage>
            </MatchLiveItemBox>
            {event && (
                <MatchLiveIconBox variant="Flex">
                    <MatchliveItemIcon
                        icon={iconname}
                        onClick={() => favoriteCallback()}
                        iconcolor="Light"
                        btniconsize={iconSize}
                    />
                </MatchLiveIconBox>
            )}
        </MatchLiveItemStyles>
    );
};

MatchLiveItem.propTypes = {
    srcLocal: PropTypes.shape({}),
    srcAway: PropTypes.shape({}),
    event: PropTypes.bool,
    scoreLocal: PropTypes.number,
    scoreAway: PropTypes.number,
};

MatchLiveItem.defaultProps = {
    srcLocal: {},
    srcAway: {},
    event: true,
    scoreLocal: 0,
    scoreAway: 0,
};

export default MatchLiveItem;
