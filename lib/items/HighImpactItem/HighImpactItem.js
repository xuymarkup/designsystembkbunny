import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image } from "../../accessories";
import {
    HighImpactItemStyles,
    HighImpactItemBox,
    HighImpactItemTimeStyles,
    HighImpactItemTimeBox,
    HighImpactItemTitleStyles,
    HighImpactItemImageContent,
    HighImpactItemCaption,
    HighImpactItemLeagueBox,
    HighImpactItemLeague,
    HighImpactItemIconBox,
    HighImpactItemImageContainer,
    HighImpactItemIcon,
} from "./styles";

const HighImpactItem = props => {
    const { ratio, src, datas, size } = props;
    const [favorite, setFavorite] = useState(false);
    const [iconSize, setIconSize] = useState(26);
    useEffect(() => {
        setIconSize(window.innerWidth < 1024 ? 26 : 30);
    });

    return (
        <HighImpactItemStyles>
            {datas.map(data => {
                return (
                    <Fragment key={data.id}>
                        <HighImpactItemBox variant="Transparent">
                            <HighImpactItemLeagueBox variant="Flex">
                                <HighImpactItemLeague>UEFA Champions League</HighImpactItemLeague>
                                <HighImpactItemIconBox variant="Transparent">
                                    <HighImpactItemIcon
                                        icon="StarOutline"
                                        onClick={() => setFavorite(!favorite)}
                                        iconcolor={toString(favorite) && "green"}
                                        btniconsize={iconSize}
                                    />
                                </HighImpactItemIconBox>
                            </HighImpactItemLeagueBox>
                            <HighImpactItemImageContent variant="Transparent">
                                <HighImpactItemTimeBox>
                                    <HighImpactItemTimeStyles>{data.time}</HighImpactItemTimeStyles>
                                </HighImpactItemTimeBox>
                                <HighImpactItemImageContainer>
                                    <Image src={src} ratio={ratio} />
                                </HighImpactItemImageContainer>
                            </HighImpactItemImageContent>
                            <HighImpactItemCaption variant="Transparent">
                                <HighImpactItemTitleStyles variant="h2">
                                    {data.title}
                                </HighImpactItemTitleStyles>
                            </HighImpactItemCaption>
                        </HighImpactItemBox>
                    </Fragment>
                );
            })}
        </HighImpactItemStyles>
    );
};

HighImpactItem.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    size: PropTypes.string,
    icon: PropTypes.bool,
};

HighImpactItem.defaultProps = {
    children: null,
    ratio: "aspect3x4",
    src: {},
    size: "28px",
};

export default HighImpactItem;
