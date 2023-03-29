import React from "react";
import PropTypes from "prop-types";
import {

        CalendarItemStyles,
        CalendarItemTitleStyles,
        CalendarItemImageStyles,
        CalendarItemBoxStylesHome,
        CalendarItemBoxStylesAway,
        CalendarItemDateStyles,
        CalendarItemTimeStyles,
        CalendarItemTeamStyles,
        CalendarItemScoreStyles,
        CalendarItemTimeBoxStyles,
        CalendarItemContainer,
        BoxTimeContainer,
        BoxInfo,
        CalendarItemSeasonStyles,
        BoxItem,
        ItemCalienteBoxStyles,
        ItemCalienteImageStyles,
        ItemCalienteTitle,
        ItemMomiosBoxStyles,
        TickerMomiosBoxStyles,
        MomiosBoxStyles,
        MomioStyles,
        CalienteClosedContainer,
} from "./styles";
import { Image, Box } from "../../accessories";



const CalendarItem = props => {
    const { date, time, team1, team2, score1, score2, src,isMobile, fullCard,jornada} = props;

    const fullWidthCard = fullCard ? "440px" : "300px";
    const widthCard = isMobile ? "100%" : fullWidthCard;
    return (
<CalendarItemStyles>
    <BoxTimeContainer variant="Transparent">
        <CalendarItemDateStyles>{date}</CalendarItemDateStyles>
    </BoxTimeContainer>
    <BoxItem variant="Transparent" w={widthCard}>
        <BoxInfo variant="Transparent">
            <CalendarItemContainer variant="Transparent">
                <CalendarItemTeamStyles variant="Transparent">
                    <CalendarItemBoxStylesHome variant="Flex">
                        <Box variant="Flex">
                            <CalendarItemImageStyles>
                                <Image ratio="aspect1x1" src={src} icon={false} />
                            </CalendarItemImageStyles>
                            <CalendarItemTitleStyles>
                                {team1}
                            </CalendarItemTitleStyles>
                        </Box>
                        <CalendarItemScoreStyles>
                            {score1}
                        </CalendarItemScoreStyles>
                    </CalendarItemBoxStylesHome>
                    <CalendarItemBoxStylesAway variant="Flex">
                        <Box variant="Flex">
                            <CalendarItemImageStyles>
                                <Image ratio="aspect1x1" src={src} icon={false} />
                            </CalendarItemImageStyles>
                            <CalendarItemTitleStyles>
                                {team2}
                            </CalendarItemTitleStyles>
                        </Box>
                        <CalendarItemScoreStyles>
                            {score2}
                        </CalendarItemScoreStyles>
                    </CalendarItemBoxStylesAway>
                </CalendarItemTeamStyles>
                <CalendarItemTimeBoxStyles variant="Transparent">
                    <CalendarItemTimeStyles>
                        {time}
                    </CalendarItemTimeStyles>
                </CalendarItemTimeBoxStyles>
            </CalendarItemContainer>
        </BoxInfo>
            <ItemCalienteBoxStyles>
                <ItemCalienteImageStyles>
                    <Image ratio="aspect1x1" src={src} icon={false}/>
                </ItemCalienteImageStyles>
                <ItemMomiosBoxStyles variant="Transparent">
                    <TickerMomiosBoxStyles variant="Transparent">
                        <MomiosBoxStyles>
                            <MomioStyles variant="Transparent">
                                +120
                            </MomioStyles>
                        </MomiosBoxStyles>
                        <MomiosBoxStyles>
                            <MomioStyles variant="Transparent">
                                +90
                            </MomioStyles>
                        </MomiosBoxStyles>
                        <MomiosBoxStyles>
                            <MomioStyles variant="Transparent">
                                +100
                            </MomioStyles>
                        </MomiosBoxStyles>
                    </TickerMomiosBoxStyles>
                </ItemMomiosBoxStyles>
            </ItemCalienteBoxStyles>
        </BoxItem>
</CalendarItemStyles>
          
    );
};

CalendarItem.propTypes = {
    src: PropTypes.shape({}),
    img: PropTypes.shape({}),
    jornada:PropTypes.string,
    team1: PropTypes.string,
    team2: PropTypes.string,
    time: PropTypes.string,
    date: PropTypes.string,
    score1: PropTypes.string,
    score2: PropTypes.string,
};

CalendarItem.defaultProps = {
    src: {},
    img: {},
    date: "Martes 20 octubre",
    team1: "Paris Saint-Germain",
    team2: "Burussia Monchengladbach",
    jornada: "Jornada 3",
    time: "2:00pm",
    score1: "3",
    score2: "2",
};

export default CalendarItem;
