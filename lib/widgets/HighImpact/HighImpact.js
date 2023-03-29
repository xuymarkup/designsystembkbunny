import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image, Icons, Box } from "../../accessories";
import MatchLive from "../../widgets/MatchLive";
import {
    HighImpactItemStyles,
    HighImpactItemBox,
    HighImpactItemTimeStyles,
    HighImpactItemTitleStyles,
    HighImpactItemImageContent,
    HighImpactItemCaption,
    HighImpactItemTimeBox,
    HighImpactItemImageContainer,
    HighImpactItemLeagueBox,
    HighImpactItemLeague,
    HighImpactItemIconBox,
    HighImpactEventCaption,
    HighImpactEventTimeBox,
    HighImpactEventImageContainer,
    HighImpactEventTitle,
    HighImpactItemIcon,
    HighImpactItemImageContentEvent,
    HighImpactItemEventTime,
    HighImpactItemEventImage,
} from "../../items/HighImpactItem/styles";
import {
    HighImpactContainer,
    NewsStyles,
    BoxPages,
    ButtonPages,
    ButtonPagesActive,
} from "./styles";
import {
    NewsItemStyles,
    NewsItemBoxStyles,
    NewsItemImageStyles,
    NewsItemTitleStyles,
    NewsItemLabelStyles,
    NewsItemBoxLabel,
    NewsItemCaption,
} from "../../items/NewsItem/styles";

const HighImpact = props => {
    const {
        src,
        datas,
        news,
        ratio,
        newsitem,
        scoreLocal,
        scoreAway,
        srcLocal,
        srcAway,
        local,
        away,
        event,
    } = props;
    const [favorite, setFavorite] = useState(false);
    const [iconname, setIconname] = useState("StarOutline");
    const favoriteCallback = () => {
        setFavorite(!favorite);
        setIconname(iconname === "Star" ? "StarOutline" : "Star");
    };
    const [iconSize, setIconSize] = useState(26);
    useEffect(() => {
        setIconSize(window.innerWidth < 1024 ? 30 : 30);
    });
    return (
        <HighImpactContainer variant="Transparent">
            <HighImpactItemStyles href="./">
                {event ? (
                    <HighImpactItemBox variant="Transparent">
                        <HighImpactItemLeagueBox variant="Flex">
                            <HighImpactItemLeague>UEFA Champions League</HighImpactItemLeague>
                            <HighImpactItemIconBox variant="Transparent">
                                <HighImpactItemIcon
                                    icon={iconname}
                                    onClick={() => favoriteCallback()}
                                    iconcolor={favorite && "green"}
                                    btniconsize={iconSize}
                                />
                            </HighImpactItemIconBox>
                        </HighImpactItemLeagueBox>
                        <HighImpactItemImageContentEvent variant="Transparent">
                            <HighImpactEventTimeBox>
                                <HighImpactItemEventTime>{datas.time}</HighImpactItemEventTime>
                            </HighImpactEventTimeBox>
                            <HighImpactEventCaption variant="Transparent">
                                <HighImpactEventTitle variant="h2">
                                    Barcelona vs Bayern Münich
                                </HighImpactEventTitle>
                            </HighImpactEventCaption>
                            <HighImpactItemImageContentEvent>
                                <HighImpactItemEventImage>
                                    <Image src={src} ratio={ratio} />
                                </HighImpactItemEventImage>
                            </HighImpactItemImageContentEvent>
                        </HighImpactItemImageContentEvent>
                    </HighImpactItemBox>
                ) : (
                    <HighImpactItemBox variant="Transparent">
                        <HighImpactItemImageContent variant="Transparent">
                            <HighImpactItemImageContainer>
                                <Image src={src} ratio={ratio} />
                            </HighImpactItemImageContainer>
                        </HighImpactItemImageContent>
                        <HighImpactItemCaption variant="Transparent">
                            <HighImpactItemTitleStyles variant="h2">
                                {datas.title}
                            </HighImpactItemTitleStyles>
                        </HighImpactItemCaption>
                    </HighImpactItemBox>
                )}
            </HighImpactItemStyles>
            <NewsStyles variant="Transparent">
                <MatchLive
                    srcLocal={srcLocal}
                    srcAway={srcAway}
                    scoreLocal={scoreLocal}
                    scoreAway={scoreAway}
                    local={local}
                    away={away}
                    event={false}
                />
                {news.map(data => {
                    return (
                        <NewsItemStyles href="./" key={data.id}>
                            <NewsItemBoxStyles variant="Transparent">
                                <NewsItemBoxLabel variant="Transparent">
                                    <Icons name="Video" size={25} color="#fff" />
                                    <NewsItemLabelStyles>{data.time}</NewsItemLabelStyles>
                                </NewsItemBoxLabel>
                                <NewsItemImageStyles ratio="aspect1x1" src={newsitem} />
                            </NewsItemBoxStyles>
                            <NewsItemCaption variant="Transparent">
                                <NewsItemTitleStyles variant="h3">{data.title}</NewsItemTitleStyles>
                            </NewsItemCaption>
                        </NewsItemStyles>
                    );
                })}
                <BoxPages variant="Flex">
                    <ButtonPagesActive variant="Transparent">1</ButtonPagesActive>
                    <ButtonPages variant="Transparent">2</ButtonPages>
                    <ButtonPages variant="Transparent">3</ButtonPages>
                    <ButtonPages variant="Transparent">4</ButtonPages>
                </BoxPages>
            </NewsStyles>
        </HighImpactContainer>
    );
};

HighImpact.propTypes = {
    children: PropTypes.node,
    src: PropTypes.shape({}),
    srcLocal: PropTypes.shape({}),
    srcAway: PropTypes.shape({}),
    text: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    size: PropTypes.number,
    ratio: PropTypes.string,
    event: PropTypes.bool,
    local: PropTypes.string,
    away: PropTypes.string,
    scoreLocal: PropTypes.number,
    scoreAway: PropTypes.number,
};

HighImpact.defaultProps = {
    children: null,
    src: {},
    srcLocal: {},
    srcAway: {},
    title: "Pumas y América se juegan su pase a la liguilla, en la última Jornada",
    label: "Eurocopa",
    text: "En un duelo que pone en juego más que solo 3 puntos, se juega el honor ",
    time: "34:12",
    size: 25,
    ratio: "aspect3x4",
    event: true,
    local: "Loc",
    away: "Awa",
    scoreLocal: 0,
    scoreAway: 0,
};

export default HighImpact;
