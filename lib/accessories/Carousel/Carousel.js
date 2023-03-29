import React from "react";
import PropTypes from "prop-types";

import {
    CarouselStyles,
    Track,
    Thumbnails,
    IconStylesRight,
    IconStylesLeft,
    ButtonStylesRight,
    ButtonStylesLeft,
} from "./styles";

const Carousel = props => {
    const { children, arrow, arrowcolor, arrowsize } = props;
    return (
        <CarouselStyles {...props}>
            <ButtonStylesLeft variant="Transparent" aria-label="boton">
                {arrow === "Transparent" ? (
                    <IconStylesLeft name="ArrowLeft" variant="Inactive" size={arrowsize} />
                ) : (
                    <IconStylesLeft
                        name="ArrowLeft"
                        variant="Solid"
                        color={arrowcolor}
                        size={arrowsize}
                    />
                )}
            </ButtonStylesLeft>
            <Track>
                <Thumbnails aria-label="Carousel" tabIndex="0">
                    {children}
                </Thumbnails>
            </Track>
            <ButtonStylesRight variant="Transparent" aria-label="boton">
                {arrow === "Transparent" ? (
                    <IconStylesRight name="ArrowRight" variant="Inactive" size={arrowsize} />
                ) : (
                    <IconStylesRight
                        name="ArrowRight"
                        variant="Solid"
                        color={arrowcolor}
                        size={arrowsize}
                    />
                )}
            </ButtonStylesRight>
        </CarouselStyles>
    );
};

Carousel.propTypes = {
    arrow: PropTypes.string,
    children: PropTypes.node,
    arrowsize: PropTypes.number,
};

Carousel.defaultProps = {
    arrow: "Transparent",
    children: null,
    arrowsize: 74,
};

export default Carousel;
