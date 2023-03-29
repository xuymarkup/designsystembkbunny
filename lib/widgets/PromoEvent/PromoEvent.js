import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PromoEventStyles, PromoEventBox, PromoEventIcon, PromoEventButton } from "./styles";
import { Image } from "../../accessories";

const PromoEvent = props => {
    const { ratio, src } = props;
    const [iconSize, setIconSize] = useState(26);
    useEffect(() => {
        setIconSize(window.innerWidth < 1024 ? 26 : 30);
    });
    const [favorite, setFavorite] = useState(false);
    return (
        <PromoEventStyles variant="Transparent">
            <PromoEventBox variant="Transpartent">
                <Image ratio={ratio} src={src} />
                <PromoEventButton variant="Solid">Ver Más</PromoEventButton>
                <PromoEventIcon icon="Star" btniconsize={iconSize} onClick={() => setFavorite(!favorite)}
                iconcolor={favorite ? "green" : "Light"} />
            </PromoEventBox>
        </PromoEventStyles>
    );
};

PromoEvent.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
};

PromoEvent.defaultProps = {
    src: {},
    ratio: "aspectpanoramic",
};
export default PromoEvent;
