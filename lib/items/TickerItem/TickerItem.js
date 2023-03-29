import React from "react";
import PropTypes from "prop-types";
import {
    TickerItemStyles,
    TickerItemTitleStyles,
    TickerItemImageStyles,
    TickerItemBoxStylesHome,
    TickerItemBoxStylesAway,
    TickerItemLeagueStyles,
    MomioStyles,
    MomiosBoxStyles,
    TickerItemTimeStyles,
    TickerItemTeamStyles,
    TickerMomiosBoxStyles,
    ItemCalienteBoxStyles,
    ItemCalienteImageStyles,
    TickerItemContainer,
    TickerItemScoreStyles,
    TickerItemTimeBoxStyles,
    TickerContainerLeague,
    TickerContainerTime,
    ItemCalienteTitle,
    ItemMomiosBoxStyles,
} from "./styles";
import { Image, Box } from "../../accessories";

const TickerItem = props => {
    const {
        competitionName,
        time,
        team1,
        team2,
        score1,
        score2,
        src,
        img,
        localmomio,
        empatemomio,
        visitmomio,
    } = props;

    const calienteImg = {
        mobile: {
            srcSet: "https://sportdata-design.televisa.com/graphics/widgets/ticker/calienteback.webp",
            width: "40",
            height: "40",
        },
    };

    return (
        <TickerItemStyles {...props}>
            <TickerItemTimeBoxStyles variant="Flex">
                <TickerContainerLeague variant="Flex">
                    <TickerItemLeagueStyles>{competitionName}</TickerItemLeagueStyles>
                </TickerContainerLeague>
                <TickerContainerTime variant="Flex">
                    <TickerItemTimeStyles>{time}</TickerItemTimeStyles>
                </TickerContainerTime>
            </TickerItemTimeBoxStyles>

            <TickerItemContainer>
                <TickerItemTeamStyles variant="Transparent">
                    <TickerItemBoxStylesHome variant="Flex">
                        <Box variant="Flex">
                            <TickerItemImageStyles>
                                <Image ratio="aspect1x1" size={20} src={src} />
                            </TickerItemImageStyles>
                            <TickerItemTitleStyles variant="h3">{team1}</TickerItemTitleStyles>
                        </Box>
                        <TickerItemScoreStyles variant="h3">{score1}</TickerItemScoreStyles>
                    </TickerItemBoxStylesHome>
                    <TickerItemBoxStylesAway variant="Flex">
                        <Box variant="Flex">
                            <TickerItemImageStyles>
                                <Image ratio="aspect1x1" size={20} src={src} />
                            </TickerItemImageStyles>
                            <TickerItemTitleStyles variant="h3">{team2}</TickerItemTitleStyles>
                        </Box>
                        <TickerItemScoreStyles variant="h3">{score2}</TickerItemScoreStyles>
                    </TickerItemBoxStylesAway>
                </TickerItemTeamStyles>
            </TickerItemContainer>

            <ItemCalienteBoxStyles variant="Flex">
                <ItemCalienteImageStyles>
                    <Image ratio="aspect1x1" size={30} src={calienteImg} />
                </ItemCalienteImageStyles>
                <ItemMomiosBoxStyles variant="Transparent">
                    <ItemCalienteTitle>¡Apuesta Ahora!</ItemCalienteTitle>
                    <TickerMomiosBoxStyles  variant="Transparent">
                        <MomiosBoxStyles>
                            <MomioStyles variant="Transparent">{localmomio}</MomioStyles>
                        </MomiosBoxStyles>
                        <MomiosBoxStyles>
                            <MomioStyles variant="Transparent">{empatemomio}</MomioStyles>
                        </MomiosBoxStyles>
                        <MomiosBoxStyles>
                            <MomioStyles variant="Transparent">{visitmomio}</MomioStyles>
                        </MomiosBoxStyles>
                    </TickerMomiosBoxStyles>
            </ItemMomiosBoxStyles>
            </ItemCalienteBoxStyles>
        </TickerItemStyles>
    );
};

TickerItem.propTypes = {
    src: PropTypes.shape({}),
    img: PropTypes.shape({}),
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    localmomio: PropTypes.string,
    empatemomio: PropTypes.string,
    visitmomio: PropTypes.string,
    score1: PropTypes.string,
    score2: PropTypes.string,
};

TickerItem.defaultProps = {
    src: {},
    img: {},
    competitionName: "Champions League",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    time: "19:45",
    localmomio: "+250",
    empatemomio: "+100",
    visitmomio: "+390",
    score1: "3",
    score2: "2",
};

export default TickerItem;
