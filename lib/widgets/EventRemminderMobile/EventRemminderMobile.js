import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {EventRemminderStyles,
        EventRemminderBox,
        EventRemminderDateBox,
        EventRemminderDate,
        EventRemminderTime,
        EventRemminderNumber,
        EventRemminderText,
        EventRemminderTeamBox,
        EventRemminderCounter,
        EventRemminderDividerText,
        EventRemminderVersus,
        EventRemminderTimeBox ,
        EventRemminderDivider,
        EventRemminderTeamNameRight,
        EventRemminderTeamNameLeft,
        EventRemminderImageBoxRight,
        EventRemminderImageBoxLeft,
        EventRemminderBack,
        TeamImage,
        EventRemminderContent,
        EventRemminderMatchButton,
        EventRemminderIcon,
        EventRemminderCounterBox} from "./styles";
import Chelsea from "../../../assets/Equipos/esc_chamlg-chelsa.png";
import Dortmund from "../../../assets/Equipos/esc_chamlg-bdortm.png";
import Back from "../../../assets/mobile/40_17-mobile-er-champions.jpg";
import { Box } from "../../accessories";

const EventRemminderMobile = props => {
    const { src, counter, teams, time, home, away, dayscount, hourscount, minutescount, secondscount, competitionName } = props;
    const [iconSize, setIconSize] = useState("20");
    useEffect(()=>{
        setIconSize(window.innerWidth < 1024 ? "20" : "28")
    })
    const [favorite, setFavorite] = useState(false)
    return (
        <EventRemminderStyles variant="Transparent"> 
            <EventRemminderDateBox variant="Flex">
                <EventRemminderText>{competitionName}</EventRemminderText>
                <EventRemminderDate variant="Airtime">{time}</EventRemminderDate>
            </EventRemminderDateBox>
                <EventRemminderBox variant="Transpartent">
                    <EventRemminderBack src={Back} />
                    {counter && <EventRemminderIcon icon="Notification" btniconsize={iconSize} onClick={()=>setFavorite(!favorite)} iconcolor={favorite && "green"}/>}
                        <EventRemminderContent variant="Transparent">           
                            {teams && <Box variant="Transparent">
                                <EventRemminderTeamBox variant="Flex">
                                    <EventRemminderImageBoxRight variant="Flex">
                                        <EventRemminderTeamNameLeft>{home}</EventRemminderTeamNameLeft>
                                        <TeamImage src={Chelsea}/>
                                    </EventRemminderImageBoxRight>
                                    <EventRemminderVersus>VS</EventRemminderVersus>
                                    <EventRemminderImageBoxLeft variant="Flex">
                                        <TeamImage src={Dortmund}/>
                                        <EventRemminderTeamNameRight>{away}</EventRemminderTeamNameRight>
                                    </EventRemminderImageBoxLeft>
                                </EventRemminderTeamBox>
                            </Box>}
                            {counter ? <EventRemminderCounterBox variant="Trasparent">
                                <EventRemminderDivider variant="Flex">
                                    <EventRemminderDividerText>Faltan</EventRemminderDividerText>
                                </EventRemminderDivider>
                                <EventRemminderCounter variant="Flex">
                                    <EventRemminderTimeBox variant="Transparent">
                                        <EventRemminderNumber>{dayscount}</EventRemminderNumber>
                                        <EventRemminderTime>Días</EventRemminderTime>
                                    </EventRemminderTimeBox >
                                    <EventRemminderTimeBox  variant="Transparent">
                                        <EventRemminderNumber>{hourscount}</EventRemminderNumber>
                                        <EventRemminderTime>Horas</EventRemminderTime>
                                    </EventRemminderTimeBox >
                                    <EventRemminderTimeBox  variant="Transparent">
                                        <EventRemminderNumber>{minutescount}</EventRemminderNumber>
                                        <EventRemminderTime>Minutos</EventRemminderTime>
                                    </EventRemminderTimeBox >
                                    <EventRemminderTimeBox  variant="Transparent">
                                        <EventRemminderNumber>{secondscount}</EventRemminderNumber>
                                        <EventRemminderTime>Segundos</EventRemminderTime>
                                    </EventRemminderTimeBox>
                                </EventRemminderCounter>
                                </EventRemminderCounterBox> : <EventRemminderMatchButton>Ir al Partido</EventRemminderMatchButton>}
                            </EventRemminderContent>
                </EventRemminderBox>              
        </EventRemminderStyles>
    );
};

EventRemminderMobile.propTypes = {
    src: PropTypes.shape({}),
    time: PropTypes.string,
    counter: PropTypes.bool,
    teams: PropTypes.bool,
    home: PropTypes.string,
    away: PropTypes.string,
    dayscount: PropTypes.string,
    hourscount: PropTypes.string,
    minutescount: PropTypes.string,
    secondscount: PropTypes.string,
    competitionName: PropTypes.string,
}

EventRemminderMobile.defaultProps = {
    src: {},
    time: "Dom 11-Sep-21",
    counter: true,
    teams: true,
    home: "Chelsea",
    away: "Dortmund",
    dayscount: "100",
    hourscount: "2",
    minutescount: "10",
    secondscount: "40",
    competitionName: "Cuartos de final - vuelta",
}
export default EventRemminderMobile;
