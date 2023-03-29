import React from "react";
import PropTypes from "prop-types";
import SVG from "./configSVG.json";
import {LoaderScrollSpinner, LoaderScrollText, LoaderPath, LoaderScrollContainer} from "./styles";

const Spiner = (props) => {
    const { type } = props;
    const { [type]: draw } = SVG;
    let contentSpiner = (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox={draw.viewBox}
        >
            {
                draw.coordinates.map((item, index) => (
                    <LoaderPath animation={index / 10} key={`spiner-${index + 1}`} {...item} />
                ))
            }
        </svg>
    );


    if (type !== "default" ) {
        contentSpiner = (
            <LoaderScrollContainer variant="Transparent">
                <LoaderScrollSpinner>
                    {contentSpiner}
                </LoaderScrollSpinner>
                <LoaderScrollText>
                    Cargando siguiente nota ...
                </LoaderScrollText>
            </LoaderScrollContainer>
        );
    } else {
        contentSpiner = (
            <LoaderScrollContainer variant="Transparent">
                {contentSpiner}
            </LoaderScrollContainer>
        );
    }
    return contentSpiner;
};

Spiner.propTypes = {
    type: PropTypes.string,
};

Spiner.defaultProps = {
    type: "default",
};

export default Spiner;
