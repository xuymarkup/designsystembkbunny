import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
    MatchHeaderStyles,
    TextStyles,
    BoxGrid,
    BoxTitle,
    BoxHomeGrid,
    BoxAwayGrid,
    BoxMatchHeaderTime,
    HomeTitle,
    HomeGoals,
    PlayerName,
    AwayTitle,
    AwayGoals,
    MatchHeaderNumber,
    HomeNumber,
    AwayNumber,
    SeparatorStyles,
    TimeStyles,
    MatchHeaderBoxStyles,
    BoxLeague,
    BoxImage,
    BoxImageRight,
} from "./styles";
import { Box, Image, Icons } from "../../accessories";

const MatchHeader = props => {
    const { ratio, src, divider, matchs } = props;
    return (
        <MatchHeaderStyles>
            {matchs.map(match => {
                return (
                    <Fragment key={match.id}>
                        <MatchHeaderBoxStyles variant="Transparent">
                            <BoxTitle variant="Transparent">
                                <BoxLeague variant="Transparent">
                                    <Box variant="Transparent" w="auto">
                                        <Icons size={30} name="Before" fill="#38DEAC"/>
                                    </Box>
                                    <TextStyles>{match.league}</TextStyles>
                                    <Box variant="Transparent">
                                        <TimeStyles>20'</TimeStyles>
                                    </Box>
                                </BoxLeague>
                            </BoxTitle>
                            <BoxGrid variant="Transparent">
                                <Box variant="Transparent">
                                    <BoxHomeGrid variant="Transparent">
                                        <BoxImage>
                                        <Image ratio={ratio} src={src} icon={false} />
                                        </BoxImage>
                                        <HomeTitle>{match.home}</HomeTitle>
                                    </BoxHomeGrid>
                                    <HomeGoals variant="Transparent">
                                        {match.localplayers.map((goal, index) => {
                                            const KEY = `${goal.player}-${index}`;
                                            return (
                                                <PlayerName key={KEY}>
                                                    {goal.player} {goal.time}
                                                </PlayerName>
                                            );
                                        })}
                                    </HomeGoals>
                                </Box>
                                <BoxMatchHeaderTime variant="Transparent">
                                    <MatchHeaderNumber variant="Transparent">
                                        <HomeNumber>{match.goalshome}</HomeNumber>
                                        <SeparatorStyles>{divider}</SeparatorStyles>
                                        <AwayNumber>{match.goalsaway}</AwayNumber>
                                    </MatchHeaderNumber>
                                </BoxMatchHeaderTime>
                                <Box variant="Transparent">
                                    <BoxAwayGrid variant="Transparent">
                                        <AwayTitle> {match.away}</AwayTitle>
                                        <BoxImageRight>
                                            <Image ratio={ratio} src={src} icon={false} />
                                        </BoxImageRight>
                                    </BoxAwayGrid>
                                    <AwayGoals variant="Transparent">
                                        {match.awayplayers.map((goal, index) => {
                                            const KEY = `${goal.player}-${index}`;
                                            return (
                                                <PlayerName key={KEY}>
                                                    {goal.player} {goal.time}
                                                </PlayerName>
                                            );
                                        })}
                                    </AwayGoals>
                                </Box>
                            </BoxGrid>
                        </MatchHeaderBoxStyles>
                    </Fragment>
                );
            })}
        </MatchHeaderStyles>
    );
};

MatchHeader.propTypes = {
    src: PropTypes.shape({}),
    matchs: PropTypes.arrayOf(PropTypes.shape({})),
    ratio: PropTypes.string,
    divider: PropTypes.string,
};

MatchHeader.defaultProps = {
    divider: "-",
    ratio: "aspect1x1",
    src: {},
    matchs: [],
};

export default MatchHeader;
