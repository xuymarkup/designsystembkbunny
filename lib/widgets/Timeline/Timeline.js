import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
    TimelineStyles,
    BoxLine,
    BoxTeam,
    BoxTime,
    TimelineNameStyles,
    TimelineLogoStyles,
    StartTime,
    HalfTime,
    ExtraTime,
    BoxTest,
    TimeText,
    TooltipTimelineStyles,
    TooltipContainer,
    BoxSponsor,
    BoxSponsorImage,
} from "./styles";
import { Image, Box, Icons, Button, ProgressBar,Text } from "../../accessories";
import { BoxEvents,TooltipTimeline  } from "../../items";

const Timeline = props => {
    const {
        namelocal,
        nameaway,
        src,
        size,
        progress,
        color,
        extratime,
        start,
        half,
        end,
        widthRegular,
        widthExtra,
        widthPenal,
    } = props;

    const penales = widthPenal > 0 ? <ProgressBar progress={progress} width={widthPenal} /> : null;
    const textras =
        widthExtra > 0 ? (
            <Box variant="Flex" w="30%">
                <ProgressBar progress={progress} width={widthExtra} />
                <ProgressBar progress={progress} width={widthExtra} />
            </Box>
        ) : null;
    const eventos = (evento, tiempo) => {
        let minuto = (evento / tiempo) * 100;
        return Math.round(minuto);
    };
    console.log("minuto", eventos(42, 45));
    const yellowCard = <Icons name="yellow-card1" size={size} color="#f5bb5c" />;
    const redCard = <Icons name="red-card1" size={size} color="#cc0000" />;
    const goal = <Icons name="goal" color={color} size={size} />;

    return (
<Box>
    <TimelineStyles {...props}>
        <BoxTest>
            <BoxTeam variant="Flex">
                <TimelineLogoStyles>
                    <Image ratio="aspect1x1" src={src}  icon={false} />
                </TimelineLogoStyles>
                <TimelineNameStyles>{namelocal}</TimelineNameStyles>
            </BoxTeam>
            <BoxLine>
                <div>
                    <Box variant="Flex" w="100%">
                        <BoxEvents team={namelocal} width={100}>
                            <ExtraTime>+3</ExtraTime>
                            <StartTime>0'</StartTime>
                            <HalfTime>45'</HalfTime>
                                <div>
                                    <TooltipTimeline variant="Transparent"  posX={eventos(20, 45)}>
                                        <Icons
                                            name="penalty-goal"
                                            size={size}
                                        />
                                    </TooltipTimeline>
                                    <TooltipTimeline variant="Transparent"  posX={eventos(30, 45)}>
                                        <Icons
                                            name="penalty-goal"
                                            size={size}
                                        />
                                    </TooltipTimeline>
                                </div>
                        </BoxEvents>
                    </Box> 
                    <Box variant="Flex">
                        <ProgressBar
                            style={{ marginTop: 10, marginBottom: 10 }}
                            progress={50}
                            width={100}
                        />    
                        <ProgressBar
                            style={{ marginTop: 10, marginBottom: 10 }}
                            progress={50}
                            width={100}
                        />
                    </Box>
                    
                    <Box variant="Flex" w="100%" style={{ paddingTop: 10 }}>
                        <BoxEvents team={namelocal} width={100} top={20}>   
                            <div>
                                <TooltipTimeline variant="Transparent"  posX={eventos(10, 45)}>
                                    <Icons
                                        name="goal"
                                        size={size}
                                    />
                                </TooltipTimeline>
                            </div>
                        </BoxEvents>
                    </Box>
                </div> 
            </BoxLine>      
            <BoxTeam variant="Flex">
                <Box variant="Flex">
                <TimelineLogoStyles>
                    <Image ratio="aspect1x1" src={src} icon={false}/>
                </TimelineLogoStyles>
                <TimelineNameStyles>{nameaway}</TimelineNameStyles>
                </Box>
            </BoxTeam>
        </BoxTest>
     </TimelineStyles>
    <Box>
        <BoxSponsor>
            <Text>Por:</Text>
            <BoxSponsorImage variant="Transparent">
                <Image ratio="aspect1x1" src={src} icon={false} width={20}/>
            </BoxSponsorImage>
        </BoxSponsor>
    </Box>
</Box>
    );
};

Timeline.propTypes = {
    src: PropTypes.shape({}),
    namelocal: PropTypes.string,
    color: PropTypes.string,
    progress: PropTypes.number,
    nameaway: PropTypes.string,
    action: PropTypes.string,
    start: PropTypes.string,
    half: PropTypes.string,
    end: PropTypes.string,
    extratime: PropTypes.string,
    size: PropTypes.number,
    widthRegular: PropTypes.number,
    widthExtra: PropTypes.number,
    widthPenal: PropTypes.number,
};

Timeline.defaultProps = {
    color: "#000000",
    src: {},
    namelocal: "Pumas",
    nameaway: "Cruz Azul",
    size: 20,
    action: "9'",
    start: "1'",
    half: "45'",
    end: "90 +2'",
    extratime: "+3",
    progress: 0,
    widthRegular: 50,
    widthExtra: 0,
    widthPenal: 0,
};

export default Timeline;
