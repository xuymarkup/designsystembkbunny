import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import {
    GroupTableStyles, 
    TextProfile,
    GroupsTabsActive,
    GroupsTabs,
    GroupsTabsStyles,
    GroupsImageContainer,
    GroupsTableContainer,
    GroupTabsContainer,
} from "./styles";
import { Image } from "../../accessories";

import {
    TabsMatchContainerStyles,
} from "../TabsMatch/styles";

import {
    StandingItemPosition,
    StandingItemTeam,
    StandingItemLogo,
    StandingItemName,
} from "../../items/StandingItem/styles";


const GroupTable = props => {
    const { src, sections, teams } = props;
    return (
        <GroupTableStyles variant="Transparent">
                <TextProfile>
                    Sorteo Qatar 2022
                </TextProfile>
                <GroupsTabsStyles>
                    <TabsMatchContainerStyles variant="Transparent">
                        <GroupTabsContainer>
                            <GroupsTabsActive href="/" variant="Transparent">
                                Bombo 1
                            </GroupsTabsActive >
                        </GroupTabsContainer>
                        {sections.map(section => {
                            return ( 
                                <Fragment key={section.id}>
                                    <GroupTabsContainer>
                                        <GroupsTabs href="/" variant="Transparent">
                                            {section.title} 
                                        </GroupsTabs >
                                    </GroupTabsContainer>
                                </Fragment> 
                            ); 
                        })} 
                    </TabsMatchContainerStyles>
                </GroupsTabsStyles>
                <GroupsImageContainer>
                    <Image ratio="aspect1x1" src={src}  />
                </GroupsImageContainer>

                <GroupsTableContainer>
                    {teams.map(team => {
                        return (
                            <Fragment key={team.id}>
                                <StandingItemTeam>
                                    <StandingItemPosition>{team.number}</StandingItemPosition>
                                    <StandingItemLogo>
                                        <Image ratio="aspect1x1" src={src} />
                                    </StandingItemLogo>
                                    <StandingItemName>
                                        {team.name}
                                    </StandingItemName>
                                </StandingItemTeam>
                            </Fragment>
                        );
                    })}
                </GroupsTableContainer>                
        </GroupTableStyles>
    );
};

GroupTable.propTypes = {
    src: PropTypes.shape({}),
    name: PropTypes.string,
    uri: PropTypes.string,
};

GroupTable.defaultProps = {
    src: {},
    name: "TORNEOS",
    uri: "./",
};
export default GroupTable;
