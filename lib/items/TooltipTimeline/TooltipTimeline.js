import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Icons, Box } from "../../accessories";
import { IconBoxStyles, Numberbox, TimeText, InfoName } from "./styles";
import { TooltipContainer, TooltipTimelineStyles } from "../../widgets/Timeline/styles";

const CardsGols = (props) => {
    const {
        playerOffName = "",
        playerOnName = "",
        playerName = "",
        scorerName = "",
        actionType = "",
        size = 18,
    } = props;

    switch (actionType) {
        case "goal":
            return (
                <Box variant="Flex">
                    <InfoName>German Sánchez</InfoName>
                </Box>
            );
        case "missedPen":
            return (
                <Box variant="Flex">
                    <InfoName>{player}</InfoName>
                </Box>
            );

        case "card":
            return (
                <Box variant="Flex">
                    <InfoName>{player}</InfoName>
                </Box>
            );
        case "substitute":
            return (
                <Box variant="Flex">
                    <Box variant="Flex">
                        <Icons size={20} name="Video" color="#007350" />
                        <TimeText>11'</TimeText>
                        
                    </Box>
                    <Box variant="Flex">
                        <Icons name="up" size={size} color="#007350" />
                        <InfoName>{player}</InfoName>
                        <Icons variant="Focus" name="down" size={size} color="#cc0000" />
                        <InfoName>{player}</InfoName>
                    </Box>
                </Box>
            );
        default:
            return <div />;
    }
};

const TooltipTimeline = (props) => {
    const {
        children,
        size,
        actionTime,
        player,
        more,
        event = {},
        inline,
        index,
        direcction,
    } = props;
    const { actionType = "", group = [] } = event;
    const [actions, setActions] = useState([]);
    useEffect(() => {
        if (group.length > 0) {
            setActions(group);
        } else {
            setActions([event]);
        }
    }, []);

    const scale = (position, direccion = "top" || "bottom") => {
        if (position === 0 || inline) {
            return direccion === "top" ? 2 : 0;
        }
        const value = direccion === "top" ? 20 : -20;
        let calculo = value * position;
        return calculo;
    };

    const scaleTooltip = (position, direccion = "top" || "bottom") => {
        if (position === 0 || inline) {
            return 0;
        }
        const value = direccion === "top" ? 40 : -1;
        let calculo = value * position;
        return calculo;
    };
    return (
        <TooltipContainer>
            <IconBoxStyles
                {...props}
                style={{
                    bottom: `${scale(index, direcction)}px`,
                }}
            >
                {more > 0 && (
                    <Numberbox style={{ marginRight: -3, marginTop: 5 }}>{more}</Numberbox>
                )}
                {children}
            </IconBoxStyles>
            <TooltipTimelineStyles
                {...props}
                style={{
                    bottom: index > 0 ? `${scaleTooltip(index, direcction)}px` : "",
                }}
            >
                <Box>
                    {/* <Icons size={20} name="Video" color="#007350" /> */}
                    <TimeText>{actionTime}</TimeText>
                    <Box variant="Flex">
                        <InfoName>{player}</InfoName>
                    </Box>
                </Box>
                {actions.map((action, i) => (
                    <CardsGols key={i} {...action} />
                ))}
            </TooltipTimelineStyles>
        </TooltipContainer>
    );
};

TooltipTimeline.propTypes = {
    action: PropTypes.string,
    actionTime: PropTypes.string,
    size: PropTypes.number,
    player: PropTypes.string,
    more: PropTypes.number,
    index: PropTypes.number,
    direcction: PropTypes.string,
    inline: PropTypes.bool,
};

TooltipTimeline.defaultProps = {
    action: "Gol",
    actionTime: "10'",
    size: 30,
    player: "León Goretzka",
    more: "2",
    index: 0,
    direcction: "top",
    inline: false,
};

export default TooltipTimeline;
