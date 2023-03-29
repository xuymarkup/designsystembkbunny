import React from "react";
import PropTypes from "prop-types";
import {
    TickerStyles,
    TickerThumb,
    TickerBoxStyles,
    TickerButtonContainer,
    TickerButtonStyles,
    TextButton,
} from "./styles";
import { Box, Icons } from "../../accessories";
import { TickerItem } from "../../items";

const Ticker = props => {
    const { src, ratio, items, sponsor } = props;
    return (
        <TickerStyles {...props}>
            <TickerBoxStyles variant="Transparent">
                {items.map(item => {
                    return (
                        <TickerThumb variant="Transparent " ratio={ratio} src={src} key={item.id}>
                            <TickerItem ratio={ratio} src={src} />
                        </TickerThumb>
                    );
                })}
            </TickerBoxStyles>
            <TickerButtonContainer variant="Transparent">
                <TickerButtonStyles variant="Transparent">
                    <Icons name="ArrowRight" size={30} />
                </TickerButtonStyles>
                <TextButton>Ver mas</TextButton>
            </TickerButtonContainer>
        </TickerStyles>
    );
};

Ticker.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    sponsor: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Ticker.defaultProps = {
    src: {},
    sponsor: "Patrocinado por",
    ratio: "aspect1x1",
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
    ],
};

export default Ticker;
