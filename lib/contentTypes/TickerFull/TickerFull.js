import React from "react";
import PropTypes from "prop-types";
import { 
    TickerStyles, 
    TickerThumb, 
    TickerBoxStyles, 
    TickerTopContainer, 
    TickerMatchesDay, 
    TickerMatchesDate, 
    TickerButton,
    } from "./styles";
import { Box, Icons } from "../../accessories";
import { TickerItem } from "../../items";

const TickerFull = props => {
    const { src, ratio, items, title, date, league } = props;
    return (
        <TickerStyles {...props}>
            <TickerTopContainer variant="Transparent">
                <Box variant="Transparent">
                    <TickerMatchesDay>{title}</TickerMatchesDay>
                    <TickerMatchesDate>{date}</TickerMatchesDate>
                </Box> 
                <TickerButton>
                    {league}
                <Icons name="Next" size="25" color="#079F70" />
                </TickerButton>
            </TickerTopContainer>
            <TickerBoxStyles variant="Transparent">
                    {items.map(item => {
                        return (
                            <TickerThumb
                                variant="Transparent "
                                ratio={ratio}
                                src={src}
                                key={item.id}
                            >
                                <TickerItem ratio={ratio} src={src} />
                            </TickerThumb>
                        );
                    })}
            </TickerBoxStyles>
        </TickerStyles>
    );
};

TickerFull.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    league: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

TickerFull.defaultProps = {
    src: {},
    ratio: "aspect1x1",
    title: "Partidos del día",
    date: "Jueves, 24 de junio de 2021",
    league: "Ver Ligas",
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
        {
            id: 9,
        },
    ],
};

export default TickerFull;
