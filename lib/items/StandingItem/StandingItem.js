import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Image from "../../accessories/Image";

import {
    StandingItemStyles,
    StandingItemTeam,
    StandingItemLogo,
    StandingItemName,
    StandingItemPosition,
    StandingItemBoxTop,
    StandingItemTopTeam,
} from "./styles";

const StandingItem = props => {
    const { src, ratio, counts, league } = props;
    return (

        <StandingItemStyles>
            <StandingItemBoxTop>
                <StandingItemTopTeam>{league}</StandingItemTopTeam>
            </StandingItemBoxTop>
            {counts.map(count => {
                return (
                    <Fragment key={count.id}>
                        <StandingItemTeam>
                            <StandingItemPosition>{count.number}</StandingItemPosition>
                            <StandingItemLogo><Image ratio={ratio} src={src} /></StandingItemLogo>
                            <StandingItemName>{count.name}</StandingItemName>
                        </StandingItemTeam>
                    </Fragment >
                );
            })}
        </StandingItemStyles >
    );
};

StandingItem.propTypes = {
    number1: PropTypes.string,
    name: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    league: PropTypes.string,
};

StandingItem.defaultProps = {
    league: "Bundesliga",
    number1: "2",
    name: "NAME",
    src: {},
    ratio: "aspect1x1",
};

export default StandingItem;
