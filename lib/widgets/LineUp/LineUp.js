import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "../../accessories";
import {
    LineUpStyles,
    LineUpPlayerField,
    LineUpBoxField,
    LineUpContainer,
    LineUpNumberHome,
    LineUpNumberAway,
    LineUpGridField,
    LineUpBoxHomeTeam,
    LineUpBoxAwayTeam,
    LineUpTabsActive,
    LineUpTabs,
    LineUpIconsField,
    LineUpPlayerFieldGk,
    LineUpSubstitutes,
    TeamsContainer,
    TeamsContainerHeadlines,
    TeamTileHome,
    TeamTileAway,
    PlayersContainer,
    TeamTileHeadlines,
} from "./styles";

import substitutes from "../../items/LineUpItem/substitutes.json"



import ModalLineUp from "../../items/ModalSubsWrap";
import LineUpItem from "../../items/LineUpItem";

const LineUp = props => {
    const { jugadores, dfl, mdl, fwl, titulares, suplentes } = props;
    const [statidistics, handleStadistics] = useState(false);
    return (
        <LineUpStyles>
            <ModalLineUp
                active={statidistics}
                handleModal={() => handleStadistics(!statidistics)}
            />
            <Box variant="Flex">
                <LineUpTabsActive variant="Transparent">Titulares</LineUpTabsActive>
                <LineUpTabs variant="Transparent">Suplentes</LineUpTabs>
            </Box>
            {titulares && 
                <LineUpContainer variant="Flex">
                    <TeamsContainerHeadlines variant="Transparent">
                        <TeamTileHeadlines>León</TeamTileHeadlines>
                    </TeamsContainerHeadlines>
                        {jugadores.map(subs => {
                            return (
                                <Fragment key={subs.suplentes}>
                                    <LineUpGridField variant="Transparent">
                                        <LineUpBoxField variant="Transparent">
                                            <LineUpBoxHomeTeam
                                                variant="Transparent"
                                                df={dfl}
                                                md={mdl}
                                                fw={fwl}
                                            >
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "gk", display: "flex" }}
                                                >
                                                    {subs.suplentes.LocalPlayer.map(local => {
                                                        if (local.position === "gk") {
                                                            return (
                                                                <LineUpPlayerFieldGk variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberHome
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {local.number}
                                                                        </LineUpNumberHome>
                                                                        <LineUpIconsField
                                                                            name="substitution"
                                                                            variant="Inactive"
                                                                            
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerFieldGk>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "df", display: "flex" }}
                                                >
                                                    {subs.suplentes.LocalPlayer.map(local => {
                                                        if (local.position === "df") {
                                                            return (
                                                                <LineUpPlayerField variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberHome
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {local.number}
                                                                        </LineUpNumberHome>
                                                                        <LineUpIconsField
                                                                            name="red-card1"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerField>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "md", display: "flex" }}
                                                >
                                                    {subs.suplentes.LocalPlayer.map(local => {
                                                        if (local.position === "md") {
                                                            return (
                                                                <LineUpPlayerField variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberHome
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {local.number}
                                                                        </LineUpNumberHome>
                                                                        <LineUpIconsField
                                                                            name="substitution"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerField>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "fw", display: "flex" }}
                                                >
                                                    {subs.suplentes.LocalPlayer.map(local => {
                                                        if (local.position === "fw") {
                                                            return (
                                                                <LineUpPlayerField variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberHome
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {local.number}
                                                                        </LineUpNumberHome>
                                                                        <LineUpIconsField
                                                                            name="substitution"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerField>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                            </LineUpBoxHomeTeam>

                                            <LineUpBoxAwayTeam
                                                variant="Transparent"
                                                df={dfl}
                                                md={mdl}
                                                fw={fwl}
                                            >
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "gk", display: "flex" }}
                                                >
                                                    {subs.suplentes.AwayPlayer.map(away => {
                                                        if (away.position === "gk") {
                                                            return (
                                                                <LineUpPlayerFieldGk variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberAway
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {away.number}
                                                                        </LineUpNumberAway>
                                                                        <LineUpIconsField
                                                                            name="substitution"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerFieldGk>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "df", display: "flex" }}
                                                >
                                                    {subs.suplentes.AwayPlayer.map(away => {
                                                        if (away.position === "df") {
                                                            return (
                                                                <LineUpPlayerField variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberAway
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {away.number}
                                                                        </LineUpNumberAway>
                                                                        <LineUpIconsField
                                                                            name="red-card1"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerField>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "md", display: "flex" }}
                                                >
                                                    {subs.suplentes.AwayPlayer.map(away => {
                                                        if (away.position === "md") {
                                                            return (
                                                                <LineUpPlayerField variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberAway
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {away.number}
                                                                        </LineUpNumberAway>
                                                                        <LineUpIconsField
                                                                            name="substitution"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerField>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                                <Box
                                                    variant="Transparent"
                                                    style={{ gridArea: "fw", display: "flex" }}
                                                >
                                                    {subs.suplentes.AwayPlayer.map(away => {
                                                        if (away.position === "fw") {
                                                            return (
                                                                <LineUpPlayerField variant="Transparent">
                                                                    <Box variant="Flex">
                                                                        <LineUpNumberAway
                                                                            onClick={() =>
                                                                                handleStadistics(true)
                                                                            }
                                                                        >
                                                                            {away.number}
                                                                        </LineUpNumberAway>
                                                                        <LineUpIconsField
                                                                            name="substitution"
                                                                            variant="Inactive"
                                                                        />
                                                                    </Box>
                                                                </LineUpPlayerField>
                                                            );
                                                        }
                                                    })}
                                                </Box>
                                            </LineUpBoxAwayTeam>
                                        </LineUpBoxField>
                                    </LineUpGridField>
                                </Fragment>
                            );
                        })}
                    <TeamsContainerHeadlines variant="Transparent">
                        <TeamTileHeadlines>Pumas</TeamTileHeadlines>
                    </TeamsContainerHeadlines>
                </LineUpContainer>
            }
            {suplentes && 
                <LineUpSubstitutes>
                        <TeamsContainer variant="Transparent">
                            <TeamTileHome>Manchester United</TeamTileHome>
                            <TeamTileAway>NewCastle United</TeamTileAway>
                        </TeamsContainer>
                        <PlayersContainer variant="Transparent">
                            
                                <LineUpItem izquierda={true} suplentes={substitutes}/>
                                <LineUpItem derecha={true} suplentes={substitutes}/>
                            
                        </PlayersContainer>
                </LineUpSubstitutes>
            }

        </LineUpStyles>
    );
};

LineUp.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    suplentes: PropTypes.arrayOf(PropTypes.shape({})),
    dfl: PropTypes.number,
    dfa: PropTypes.number,
    mdl: PropTypes.number,
    mda: PropTypes.number,
    fwl: PropTypes.number,
    fwa: PropTypes.number,
    titulares: PropTypes.bool,
    suplentes: PropTypes.bool,
};

LineUp.defaultProps = {
    name: "Manchester United",
    number: "9",
    suplentes: [],
    dfl: 1,
    dfa: 1,
    mdl: 1,
    mda: 1,
    fwl: 1,
    fwa: 1,
    titulares: false,
    suplentes: false,
};

export default LineUp;
