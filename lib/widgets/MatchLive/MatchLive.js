import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "../../accessories";
import {
    MatchLiveStyles,
    MatchLiveBoxStyles,
    MatchLiveTitleStyles,
    TeamImage,
    MatchLiveBoxScore,
    MatchLiveTeamStyles,
    MatchLiveButton,
    MatchLiveBoxImage,
} from "./styles";

const MatchLive = props => {
    const { scoreLocal, scoreAway, srcLocal, srcAway, local, away, ratio } = props;
    const favoriteCallback = () => {
        setFavorite(!favorite);
    };
    const [favorite, setFavorite] = useState(false);

    return (
        <MatchLiveStyles href="./" {...props}>
            <Box variant="Flex">
                <MatchLiveBoxImage variant="Transparent">
                    <TeamImage src={srcLocal} ratio={ratio} icon={false} variant="Transparent" />
                </MatchLiveBoxImage>
                <MatchLiveBoxStyles variant="Transparent">
                    <MatchLiveTeamStyles>{local}</MatchLiveTeamStyles>
                    <MatchLiveBoxScore variant="Flex">
                        <MatchLiveTitleStyles>{scoreLocal}</MatchLiveTitleStyles>
                        <MatchLiveTitleStyles>:</MatchLiveTitleStyles>
                        <MatchLiveTitleStyles>{scoreAway}</MatchLiveTitleStyles>
                    </MatchLiveBoxScore>
                    <MatchLiveTeamStyles>{away}</MatchLiveTeamStyles>
                </MatchLiveBoxStyles>
                <MatchLiveBoxImage variant="Transparent">
                    <TeamImage src={srcAway} ratio={ratio} icon={false} variant="Transparent" />
                </MatchLiveBoxImage>
            </Box>

            <MatchLiveButton
                variant="Outline"
                btniconsize={18}
                onClick={() => favoriteCallback()}
                color={favorite ? "default" : "Interaction"}
                bg={favorite ? "Interaction" : "Light"}
            >
                {favorite ? "Quitar" : "Seguir"}
            </MatchLiveButton>
        </MatchLiveStyles>
    );
};

MatchLive.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    event: PropTypes.bool,
    local: PropTypes.string,
    away: PropTypes.string,
    scoreLocal: PropTypes.number,
    scoreAway: PropTypes.number,
};

MatchLive.defaultProps = {
    ratio: "aspect1x1",
    src: {},
    local: "Loc",
    away: "Awa",
    event: true,
    scoreLocal: 0,
    scoreAway: 0,
};

export default MatchLive;
