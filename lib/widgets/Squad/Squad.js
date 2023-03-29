import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
    SquadStyles,
    SquadBoxSection,
    SquadTitle,
    SquadBoxButtonActive,
    SquadBoxButtons,
    ButtonActive,
    ButtonInactive,
    SquadBoxButtonInactive,
    SquadBoxScroll,
    TitleSquad,
} from "./styles";
import { Box, Button } from "../../accessories";
import { SquadItem } from "../../items";
import {
    SquadItemStyles,
    SquadNumberBox,
    SquadNumberStyles,
    SquadTitleStyles,
    SquadTitleBox,
    SquadNationStyles,
    SquadNationBox,
} from "../../items/SquadItem/styles";

const Squad = props => {
    const { team, home, away } = props;
    const posiciones = Object.keys(team[0].squad);
    const players = Object.values(team[0].squad);

    return (
        <Box variant="Transparent">
            <TitleSquad variant="h2">Alineaciones</TitleSquad>
            <SquadStyles>
                <SquadBoxButtons variant="Flex">
                    <SquadBoxButtonActive>
                        <ButtonActive>{home}</ButtonActive>
                    </SquadBoxButtonActive>
                    <SquadBoxButtonInactive>
                        <ButtonInactive variant="Transparent">{away}</ButtonInactive>
                    </SquadBoxButtonInactive>
                </SquadBoxButtons>
                <SquadBoxScroll>
                    {posiciones.map(position => (
                        <Fragment key={position.id}>
                            <Box variant="Solid">
                                <SquadBoxSection variant="Transparent">
                                    <SquadTitle>{position}</SquadTitle>
                                </SquadBoxSection>
                                <Box variant="Transparent">
                                    {Object.values(
                                        players.map(player => {
                                            return (
                                                <>
                                                    {player.map(key => {
                                                        const goal = position === key.position;
                                                        return goal ? (
                                                            <SquadItemStyles variant="Transparent">
                                                                <SquadNumberBox>
                                                                    <SquadNumberStyles>
                                                                        {key.number}
                                                                    </SquadNumberStyles>
                                                                </SquadNumberBox>
                                                                <SquadTitleBox>
                                                                    <SquadTitleStyles variant="h3">
                                                                        {key.name}
                                                                    </SquadTitleStyles>
                                                                </SquadTitleBox>
                                                            </SquadItemStyles>
                                                        ) : null;
                                                    })}
                                                </>
                                            );
                                        }),
                                    )}
                                </Box>
                            </Box>
                        </Fragment>
                    ))}
                </SquadBoxScroll>
            </SquadStyles>
        </Box>
    );
};

Squad.propTypes = {
    team: PropTypes.arrayOf(PropTypes.shape({})),
    positions: PropTypes.arrayOf(PropTypes.shape({})),
    home: PropTypes.string,
    away: PropTypes.string,
};

Squad.defaultProps = {
    team: [],
    positions: [],
    home: "Manchester United",
    away: "Arsenal",
};

export default Squad;
