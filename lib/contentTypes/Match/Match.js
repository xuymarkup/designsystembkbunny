import React from "react";
import PropTypes from "prop-types";
import Layout from "../../layout";
import socialmedia from "../../widgets/HeaderTUDN/social.json";

import { 
    CommentaryTitle,
  } from "../../widgets/Commentary/styles";
import {
    MatchGrid,
    PageStyles,
    PlayerBox,
    MatchHeaderBox,
    LineUpBox,
    CommentaryBox,
    CalendarBox,
    StandingBox,
    VersusBox,
    AdsMatchStyles,
    TimelineBox,
    AdsImageStyles,
    AdsMatchStylesBox,
    MatchBody,
} from "./styles";
import {
    MatchHeader,
    LineUp,
    Commentary,
    Calendar,
    Standing,
    Versus,
    LeadVideo,
    Timeline,
} from "../../widgets";

const Match = props => {
    const {commentaryMatches,
        srcCommentary,
        matchHeader,
        srcTimeline,
        srcCalendar,
        srcStanding,
        standingData,
        standingTeam,
        srcVersus,
        versusSections,
        versusNumbers,
        imgs,
        player,
        teamLineUp,
        progressTimeline} = props;
    return (
        <Layout
            foot={true}
            breadcrumbs={[]}
            social={socialmedia}
            uri="https://tvsa-sandbox.github.io/widgets-beta/"
            filter=""
        >
            <MatchBody>
                <PageStyles>
                        <MatchGrid>
                            <MatchHeaderBox variant="Transparent">
                                <MatchHeader matchs={matchHeader} src={srcCommentary} ratio="aspect1x1"/>
                            </MatchHeaderBox>
                            {player && <PlayerBox variant="Transparent">
                                <LeadVideo mt="zero" src={imgs} />
                            </PlayerBox>}
                            <TimelineBox variant="Transparent">
                                <Timeline src={srcTimeline} ratio="aspect1x1" progress={progressTimeline}/>
                            </TimelineBox>
                            <AdsMatchStyles>
                                <AdsImageStyles
                                    src="https://dummyimage.com/250/cccccc/cccccc.png"
                                    alt="ads"
                                    width="720"
                                    height="90"
                                />
                            </AdsMatchStyles>
                            <CommentaryBox variant="Transparent">
                                <Commentary matches={commentaryMatches} src={srcCommentary} />
                            </CommentaryBox>
                            <LineUpBox variant="Transparent">
                                <CommentaryTitle variant="h2">Alineaciones</CommentaryTitle>
                                <LineUp jugadores={teamLineUp}/>
                            </LineUpBox>
                            <VersusBox variant="Transparent">
                                <Versus src={srcVersus} ratio="aspect1x1" sections={versusSections} numbers={versusNumbers} />
                            </VersusBox>
                            <AdsMatchStylesBox>
                                <AdsImageStyles
                                    src="https://dummyimage.com/250/cccccc/cccccc.png"
                                    alt="ads"
                                    width="720"
                                    height="90"
                                />
                            </AdsMatchStylesBox>
                            <StandingBox variant="Transparent">
                                <Standing src={srcStanding} ratio="aspect1x1" datas={standingData} teams={standingTeam}/>
                            </StandingBox>
                            <CalendarBox variant="Transparent">
                                <CommentaryTitle variant="h2">Próximos Partidos</CommentaryTitle>
                                <Calendar src={srcCalendar} ratio="aspect1x1"/>
                            </CalendarBox>         
                    </MatchGrid>
                </PageStyles> 
            </MatchBody>
        </Layout>
    );
};
Match.propTypes = {
    commentaryMatches: PropTypes.arrayOf(PropTypes.shape({})),
    srcTimeline: PropTypes.shape({}),
    srcCommentary: PropTypes.shape({}),
    matchHeader: PropTypes.arrayOf(PropTypes.shape({})),
    teamLineUp: PropTypes.arrayOf(PropTypes.shape({})),
    srcCalendar: PropTypes.shape({}),
    srcStanding: PropTypes.shape({}),
    standingData: PropTypes.arrayOf(PropTypes.shape({})),
    standingTeam: PropTypes.arrayOf(PropTypes.shape({})),
    srcVersus: PropTypes.shape({}),
    versusNumbers: PropTypes.arrayOf(PropTypes.shape({})),
    versusSections: PropTypes.arrayOf(PropTypes.shape({})),
    imgs: PropTypes.shape({}),
    player: PropTypes.bool,
    progressTimeline: PropTypes.number,
};
  
Match.defaultProps = {
    commentaryMatches: [],
    srcTimeline: {},
    srcCommentary: {},
    matchHeader: [],
    teamLineUp: [],
    srcCalendar: {},
    srcStanding: {},
    standingData: [],
    standingTeam: [],
    srcVersus: {},
    versusNumbers: [],
    versusSections: [],
    imgs: [],
    player: true,
    progressTimeline: 90,
};

export default Match;
