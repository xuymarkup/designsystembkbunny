import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ItemLeagueStyles, ItemLeagueImageStyles, ItemLeagueTitleStyles } from "./styles";
import { Image } from "../../accessories";

const ItemLeague = props => {
    const { title, uri, ratio, SRC } = props;
    return (
        <ItemLeagueStyles href={uri} variant="Transparent">
            <ItemLeagueImageStyles variant="Transparent">
                <Image ratio={ratio} src={SRC} icon={false} />
            </ItemLeagueImageStyles>
            <ItemLeagueTitleStyles variant="h2">{title}</ItemLeagueTitleStyles>
        </ItemLeagueStyles>
    );
};

ItemLeague.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    uri: PropTypes.string,
    title: PropTypes.string,
};

ItemLeague.defaultProps = {
    src: {},
    ratio: "aspect1x1",
    title: "Partidos Internacionales",
    uri: "./",
};

export default ItemLeague;
