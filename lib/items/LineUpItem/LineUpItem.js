import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import {
    LineUpItemStyles,
    PositionStylesHome,
    PositionStylesAway,
    NameStyles,
    LineUpTitleBox,
    NumberBox,
    Container,
    NumberStyles,
    ItemContainerHome,
    ItemContainerAway,
} from "./styles";

import {
    SquadNumberStyles,
} from "../../items/SquadItem/styles";

import { Box } from "../../accessories";

const LineUpItem = props => {
    const { number, name, position, izquierda, derecha, suplentes } = props;
    
    return (
        <LineUpItemStyles variant="Transparent">
            {izquierda &&
                <Box variant="Flex">
                    {suplentes.map(subs => {
                        return (
                            <Fragment key={subs.id}>
                                <Container>
                                {subs.suplentes.LocalPlayer.map (local => (
                                    <ItemContainerHome variant="Flex">
                                        <NumberBox>
                                            <NumberStyles>{local.number}</NumberStyles>
                                        </NumberBox>
                                        <LineUpTitleBox variant="Transparent">
                                            <NameStyles variant="h3">{local.name}</NameStyles>
                                            <PositionStylesHome variant="h3">{local.position}</PositionStylesHome>
                                        </LineUpTitleBox>
                                    </ItemContainerHome>
                                    ))}
                                </Container>
                            </Fragment>
                        )})
                    }
                </Box>
            }

                {derecha &&
                <Box variant="Flex">
                {suplentes.map(subs => {
                    return (
                        <Fragment key={subs.id}>
                            <Container>
                            {subs.suplentes.AwayPlayer.map (Away => (
                                <ItemContainerAway variant="Flex">
                                    <LineUpTitleBox variant="Transparent">
                                        <NameStyles variant="h3">{Away.name}</NameStyles>
                                        <PositionStylesAway variant="h3">{Away.position}</PositionStylesAway>
                                    </LineUpTitleBox>
                                    <NumberBox>
                                        <NumberStyles>{Away.number}</NumberStyles>
                                    </NumberBox>
                                </ItemContainerAway>
                                ))}
                            </Container>
                        </Fragment>
                    )})
                }
            </Box>
            }
        </LineUpItemStyles>
        
    );
};

LineUpItem.propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    number: PropTypes.string,
    izquierda: PropTypes.bool,
    derecha: PropTypes.bool,
    suplentes: PropTypes.arrayOf(PropTypes.shape({})),
};

LineUpItem.defaultProps = {
    name: "T. Heaton",
    position: "Portero",
    number: "22",
    izquierda: false,
    derecha: false,
    suplentes: [],
};

export default LineUpItem;
