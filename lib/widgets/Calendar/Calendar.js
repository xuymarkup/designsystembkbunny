import React from "react";
import PropTypes from "prop-types";
import {
    CalendarStyles,
    CalendarLeagueBox,
    TitleCalendar,
    BoxLeagueStyles,
    CalendarButton,
    CalendarBoxButtons,
    CalendarBoxButton,
    BoxButtonStyles,
    SelectTeamButton,
    BeforeStyles,
    NextStyles,
    CalendarButtonText,
    CalendarBoxButtonActive,
    ContainerItemsStyles,
    CalendarButtonContainer,
    CalendarPlusButtonContainer,
} from "./styles";
import { CalendarItem } from "../../items";
import { CommentaryTitle } from "../Commentary/styles";
import { Image } from "../../accessories";
import { ItemLeagueImageStyles } from "../../items/ItemLeague/styles";

const Calendar = props => {
    const {
        ratio,
        src,
        SRC,
        items,
        before,
        next,
        teamHome,
        fullWidget,
        teamAway,
        roundleague,
        bgcolor,
        more,
        title,
    } = props;

    return (
        <CalendarStyles {...props}>
            <CommentaryTitle variant="h2">{title}</CommentaryTitle>
            {fullWidget && (
                <BoxLeagueStyles>
                    <CalendarLeagueBox>
                        <ItemLeagueImageStyles>
                            <Image ratio={ratio} src={SRC} icon={false} />
                        </ItemLeagueImageStyles>
                        <TitleCalendar variant="h2">Liga MX</TitleCalendar>
                    </CalendarLeagueBox>
                </BoxLeagueStyles>
            )}
            {!fullWidget && (
                <CalendarBoxButtons variant="Transparent">
                    <CalendarBoxButtonActive variant="Transparent">
                        <SelectTeamButton>{teamHome}</SelectTeamButton>
                    </CalendarBoxButtonActive>
                    <CalendarBoxButton variant="Transparent">
                        <SelectTeamButton>{teamAway}</SelectTeamButton>
                    </CalendarBoxButton>
                </CalendarBoxButtons>
            )}
            {fullWidget && (
                <BoxButtonStyles variant="Flex">
                    {previousPage !== "" && (
                        <BeforeStyles variant="Transparent">
                            <Icons name="Before" size="25" />
                            {before}
                        </BeforeStyles>
                    )}
                    {nextPage !== "" && (
                        <NextStyles variant="Transparent">
                            {next}
                            <Icons name="Next" size="25" />
                        </NextStyles>
                    )}
                </BoxButtonStyles>
            )}
            <ContainerItemsStyles p={!fullWidget && "36px 18px"} h={!fullWidget ? "459px" : "auto"}>
                {items.map(item => {
                    return <CalendarItem ratio={ratio} src={src} key={item.id} />;
                })}
                <CalendarButtonContainer variant="Transparent">
                    {
                        <CalendarButton>
                            <CalendarButtonText variant="Bold">{more}</CalendarButtonText>
                        </CalendarButton>
                    }
                </CalendarButtonContainer>
                <CalendarPlusButtonContainer variant="Transparent">
                    {!fullWidget && (
                        <CalendarButton>
                            <CalendarButtonText>Ir a calendario</CalendarButtonText>
                        </CalendarButton>
                    )}
                </CalendarPlusButtonContainer>
            </ContainerItemsStyles>
        </CalendarStyles>
    );
};

Calendar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})),
    src: PropTypes.shape({}),
    before: PropTypes.string,
    next: PropTypes.string,
    titleleague: PropTypes.string,
    roundleague: PropTypes.string,
    ratio: PropTypes.string,
    bgcolor: PropTypes.string,
    teamHome: PropTypes.string,
    teamAway: PropTypes.string,
    more: PropTypes.string,
    title: PropTypes.string,
};
Calendar.defaultProps = {
    ratio: "aspect16x9",
    titleleague: "Champions League",
    before: "Anterior",
    next: "Siguiente",
    title: "Próximos Partidos",
    teamHome: "Cruz Azul",
    teamAway: "Pumas",
    roundleague: "Cuartos de Final",
    bgcolor: "#01044e",
    more: "Ver más",
    src: {},
    items: [
        {
            id: 0,
        },
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
    ],
};

export default Calendar;
