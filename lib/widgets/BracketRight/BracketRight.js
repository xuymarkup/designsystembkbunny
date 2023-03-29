import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Box, Title, Image, Text } from "../../accessories";
import { BracketItem } from "../../items";
import { BracketStyles, BracketGrid, BracketCol, ImgBox, SponsorBox } from "./styles";

const BracketRight = props => {
    const { cols, champion, tournament, thirdmatch, src, srcBack, srcup, data, srcSponsor } = props;
    const fases = cols + 1;
    const finalMatch = data.final;
    const thirdPlace = data.third;
    return (
        <BracketStyles as="section">
            <ImgBox>
                <Image src={srcBack} ratio="aspect3x4" />
            </ImgBox>
            <Box variant="Flex" p="xs">
                <Text color="gray" size="fsm">
                    Presentado por:
                </Text>
                <SponsorBox>
                    <Image src={srcSponsor} ratio="aspect16x9" variant="Transparent" icon={false} />
                </SponsorBox>
            </Box>
            <Box variant="Flex" h="25px">
                {cols >= 3 ? (
                    <Box variant="Flex" align="center">
                        <Text color="gray" size="fbase">
                            Octavos de Final
                        </Text>
                    </Box>
                ) : null}
                {cols >= 2 ? (
                    <Box variant="Flex" align="center">
                        <Text color="gray" size="fbase">
                            Cuartos de Final
                        </Text>
                    </Box>
                ) : null}

                {cols >= 1 ? (
                    <Box variant="Flex" align="center">
                        <Text color="gray" size="fbase">
                            Semifinales
                        </Text>
                    </Box>
                ) : null}
                <Box variant="Flex" align="center">
                    <Text color="gray" size="fbase">
                        Final
                    </Text>
                </Box>
            </Box>
            <BracketGrid cols={fases} variant="Transparent">
                {cols >= 3 ? (
                    <BracketCol variant="Flex">
                        {data.round16.map(item => (
                            <BracketItem
                                src={src}
                                teamLocal={item.local}
                                teamAway={item.away}
                                scoreLocal={item.scoreLocal}
                                scoreAway={item.scoreAway}
                                date={item.date}
                                stadium={item.stadium}
                                key={item.id}
                            />
                        ))}
                    </BracketCol>
                ) : null}

                {cols >= 2 ? (
                    <BracketCol variant="Flex">
                        {data.quarter.map(item => (
                            <BracketItem
                                src={src}
                                teamLocal={item.local}
                                teamAway={item.away}
                                scoreLocal={item.scoreLocal}
                                scoreAway={item.scoreAway}
                                date={item.date}
                                stadium={item.stadium}
                                key={item.id}
                            />
                        ))}
                    </BracketCol>
                ) : null}
                {cols >= 1 ? (
                    <BracketCol variant="Flex">
                        {data.semi.map(item => (
                            <BracketItem
                                src={src}
                                teamLocal={item.local}
                                teamAway={item.away}
                                scoreLocal={item.scoreLocal}
                                scoreAway={item.scoreAway}
                                date={item.date}
                                stadium={item.stadium}
                                key={item.id}
                            />
                        ))}
                    </BracketCol>
                ) : null}
                <BracketCol variant="Flex">
                    <Title variant="h5" align="center" color="gray">
                        {tournament}
                    </Title>
                    {champion != "" ? (
                        <Fragment>
                            <Title variant="h6" color="gray">
                                Campeón
                            </Title>
                            <Box w="90px" variant="Transparent">
                                <Image src={src} ratio="aspect1x1" variant="Transparent" />
                            </Box>
                            <Title variant="h6" color="gray">
                                {champion}
                            </Title>
                        </Fragment>
                    ) : null}
                    {finalMatch.map(item => (
                        <BracketItem
                            pen
                            teamLocal={item.local}
                            teamAway={item.away}
                            scoreLocal={item.scoreLocal}
                            scoreAway={item.scoreAway}
                            penLocal={item.penLocal}
                            penAway={item.penAway}
                            date={item.date}
                            stadium={item.stadium}
                            src={src}
                        />
                    ))}

                    <Box w="100px" variant="Transparent">
                        <Image src={srcup} ratio="aspect3x4" variant="Transparent" />
                    </Box>
                    {thirdmatch &&
                        thirdPlace.map(item => (
                            <BracketItem
                                pen
                                teamLocal={item.local}
                                teamAway={item.away}
                                scoreLocal={item.scoreLocal}
                                scoreAway={item.scoreAway}
                                date={item.date}
                                stadium={item.stadium}
                                penLocal={item.penLocal}
                                penAway={item.penAway}
                                src={src}
                            />
                        ))}
                </BracketCol>
            </BracketGrid>
        </BracketStyles>
    );
};

BracketRight.propTypes = {
    cols: PropTypes.number,
    champion: PropTypes.string,
    tournament: PropTypes.string,
    thirdmatch: PropTypes.bool,
};
BracketRight.defaultProps = {
    cols: 3,
    champion: "",
    tournament: "",
    thirdmatch: false,
};

export default BracketRight;
