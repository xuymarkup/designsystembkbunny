import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, Carousel, Image } from "../../accessories";
import {
    StandingItemStyles,
    StandingItemTeam,
    StandingItemLogo,
    StandingItemName,
    StandingItemPosition,
    StandingItemBoxTop,
    StandingItemTopTeam,
} from "../../items/StandingItem/styles";

import {
    StandingStyles,
    StandingBoxHeader,
    StandingHeaderTitle,
    StandingBoxData,
    TitleStanding,
    StatisticsBox,
} from "./styles";

import {
    StatisticsItemStyles,
    StatisticsItemNumber,
    StatisticsBoxSpace,
    StatisticsItemTopTeam,
    StatisticsItemBoxTop,
} from "../../items/StatisticsItem/styles";


const Standing = props => {
    const { match, opt1, opt2, SRC, ratio, datas, teams, league } = props;

return (
    <Box variant="Transparent">
    <TitleStanding>Posiciones</TitleStanding>
    <StandingStyles>
        <StandingBoxHeader />
            <StandingBoxData variant="Transparent">
                <StandingItemStyles>
                    <StandingItemBoxTop>
                        <StandingItemTopTeam>{league}</StandingItemTopTeam>
                    </StandingItemBoxTop>
                    {teams.map(team => {
                        return (
                            <Fragment key={team.id}>
                                <Box variant="Flex">
                                    <StandingItemTeam>
                                        <StandingItemPosition>{team.number}</StandingItemPosition>
                                        <StandingItemLogo>
                                         <Image ratio={ratio} src={SRC} icon={false} />
                                        </StandingItemLogo>
                                        <StandingItemName>
                                            {team.name}
                                        </StandingItemName>
                                    </StandingItemTeam>
                                </Box>
                            </Fragment>
                        );
                    })}
                </StandingItemStyles >
                <StatisticsItemStyles variant="Transparent">
                        <Box variant="Transparent"> 
                            <Box variant="Flex">
                                {datas.map(data => {
                                    return (
                                        <Fragment key={data.id}>
                                            <StatisticsItemBoxTop>
                                                <StatisticsItemTopTeam>{data.title}</StatisticsItemTopTeam>
                                            </StatisticsItemBoxTop>
                                        </Fragment>
                                    );
                                })}
                            </Box>
                            <StatisticsBox>
                                {teams.map(team => {
                                    return (
                                        <Fragment key={team.id}>
                                            <Box variant="Flex">
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.pts}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.pj}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>  {team.g}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>  {team.e}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>  {team.p} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.gf} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber> {team.gc} </StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                                <StatisticsBoxSpace>
                                                    <StatisticsItemNumber>   {team.dg}</StatisticsItemNumber>
                                                </StatisticsBoxSpace>
                                            </Box>
                                        </Fragment>
                                    );
                                })}
                            </StatisticsBox>
                        </Box>
                </StatisticsItemStyles>
            </StandingBoxData>
        </StandingStyles>
    </Box>
    )
};

Standing.propTypes = {
    league: PropTypes.string,
    match: PropTypes.string,
    opt1: PropTypes.string,
    opt2: PropTypes.string,
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

Standing.defaultProps = {
    league: "Bundesliga",
    match: "MATCHDAY",
    opt1: "POSITIONS",
    opt2: "RELEGATION",
    src: {},
    ratio: "aspect1x1",
};

export default Standing;
