import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import {
    ItemCarouselPWAStyles,
    ItemCarouselBoxStyles,
    ItemCarouselTextStyles,
    ItemCarouselSection,
    ItemCarouselIconsStyles,
} from "./styles";
import { Box, Image, Icons } from "../../accessories";

const ItemCarouselPWA = ({ isAmp, video, image, uri, title, gallery, size, section }) => {
    const themeContext = useContext(ThemeContext);
    return (
        <ItemCarouselPWAStyles href={uri}>
            <Box>
                <Image alt={title} ratio="aspect16x9" iconwidth="40" isAmp={isAmp} src={image} />
                {/* {video && (
                    <ItemCarouselIconDurationStyles name="Video">
                        {video}
                    </ItemCarouselIconDurationStyles>
                )} */}
                <ItemCarouselIconsStyles>
                    <Icons color="#ffff" size={size} variant="Transparent" name="Gallery" />
                </ItemCarouselIconsStyles>
            </Box>
            <ItemCarouselBoxStyles variant="Solid">
                {title && <ItemCarouselTextStyles>{title}</ItemCarouselTextStyles>}
            </ItemCarouselBoxStyles>
        </ItemCarouselPWAStyles>
    );
};

ItemCarouselPWA.propTypes = {
    gallery: PropTypes.string,
    image: PropTypes.shape({}),
    publishDate: PropTypes.string,
    uri: PropTypes.string,
    section: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.string,
    isAmp: PropTypes.bool,
    video: PropTypes.string,
};

ItemCarouselPWA.defaultProps = {
    gallery: "11 fotos",
    image: {
        desktop: {
            srcSet: "",
        },
        mobile: {
            srcSet: "",
        },
    },
    publishDate: "11 feb ",
    uri: "./",
    section: "espectáculos",
    title: "Consuelo Duval revela que recibió una millonaria propuesta para posar desnuda",
    size: "30",
    isAmp: false,
    video: "",
};

export default ItemCarouselPWA;
