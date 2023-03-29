import React from "react";
import PropTypes from "prop-types";
import { Box, Image, Text, Label, Info } from "../../accessories";
import { BoxScore, Score } from "./styles";

const BracketItem = props => {
    const {
        scoreLocal,
        scoreAway,
        pen,
        penLocal,
        penAway,
        teamLocal,
        teamAway,
        date,
        stadium,
        src,
    } = props;
    return (
        <Score>
            <Box variant="Flex" align="center" my="sm">
                <Label>{date}</Label>
            </Box>
            <Box variant="Flex">
                <Box w="40px" variant="Transparent">
                    <Image src={src} ratio="aspect1x1" icon={false} variant="Transparent" />
                </Box>
                <BoxScore>
                    <Text size="fsm">{teamLocal}</Text>
                    <Text size="fbase">{scoreLocal}</Text>
                    <Text>-</Text>
                    <Text size="fbase">{scoreAway}</Text>
                    <Text size="fsm">{teamAway}</Text>
                </BoxScore>
                <Box w="40px" variant="Transparent">
                    <Image src={src} ratio="aspect1x1" icon={false} variant="Transparent" />
                </Box>
            </Box>
            {pen && (
                <Box variant="Flex" align="center">
                    <Text>{penLocal}</Text>
                    <Text>-PEN-</Text>
                    <Text>{penAway}</Text>
                </Box>
            )}
            <Box variant="Flex" align="center" my="sm">
                <Info>{stadium}</Info>
            </Box>
        </Score>
    );
};

BracketItem.propTypes = {
    teamLocal: PropTypes.string,
    teamAway: PropTypes.string,
    scoreLocal: PropTypes.number,
    scoreAway: PropTypes.number,
    penLocal: PropTypes.number,
    penAway: PropTypes.number,
    pen: PropTypes.bool,
    date: PropTypes.string,
    stadium: PropTypes.string,
};
BracketItem.defaultProps = {
    teamLocal: "LOC",
    teamAway: "AWY",
    scoreLocal: 0,
    scoreAway: 0,
    penLocal: 0,
    penAway: 0,
    pen: false,
    date: "12 Dic 2022",
    stadium: "Qatar arena",
};

export default BracketItem;
