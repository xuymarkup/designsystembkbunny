import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import {
    ItemCarouselStyles,
    ItemCarouselBoxStyles,
    ItemCarouselTextStyles,
    ItemCarouselTimeStyles,
    ItemCarouselSection,
} from "./styles";
import { Box, Image, IconDuration } from "../../accessories";

const ItemCarousel = ({
    isAmp,
    video,
    image,
    publishDate,
    uri,
    title,
    gallery,
    section,
    ratio,
}) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <ItemCarouselStyles href={uri} shadow={ui === "tudn"}>
            <Box>
                <Image alt={title} ratio={ratio} iconwidth="40" isAmp={isAmp} src={image} />
                {video && <IconDuration name="Video">{video}</IconDuration>}
                {gallery &&
                    (ui.name === "tudn" ? (
                        <IconDuration name="Gallery">{gallery}</IconDuration>
                    ) : (
                        <IconDuration name="Gallery" variant="Solid">
                            {gallery}
                        </IconDuration>
                    ))}
            </Box>
            <ItemCarouselBoxStyles>
                {section && <ItemCarouselSection>{section}</ItemCarouselSection>}
                {title && <ItemCarouselTextStyles>{title}</ItemCarouselTextStyles>}
                {publishDate && (
                    <ItemCarouselTimeStyles variant="Airtime">{publishDate}</ItemCarouselTimeStyles>
                )}
            </ItemCarouselBoxStyles>
        </ItemCarouselStyles>
    );
};

ItemCarousel.propTypes = {
    gallery: PropTypes.string,
    image: PropTypes.shape({}),
    publishDate: PropTypes.string,
    uri: PropTypes.string,
    section: PropTypes.string,
    title: PropTypes.string,
    isAmp: PropTypes.bool,
    video: PropTypes.string,
    ratio: PropTypes.string,
};

ItemCarousel.defaultProps = {
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
    section: "una familia de diez",
    title: "un titulo para las fotos",
    isAmp: false,
    video: "",
    ratio: "aspect16x9",
};

export default ItemCarousel;
