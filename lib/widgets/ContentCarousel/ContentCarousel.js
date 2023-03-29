import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Box, Multicontent } from "../../accessories";
import { ContentCarouselStyles, ContentCarouselTitleStyles } from "./styles";

const ContentCarousel = ({ children, isAmp, title, titlevariant, size }) => {
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <ContentCarouselStyles>
            <ContentCarouselTitleStyles variant={titlevariant} center={ui === "tudn"} font={size}>
                {title}
            </ContentCarouselTitleStyles>
            <Box variant="Transparent">
                <Multicontent>{children}</Multicontent>
            </Box>
        </ContentCarouselStyles>
    );
};

ContentCarousel.propTypes = {
    isAmp: PropTypes.bool,
    Title: PropTypes.string,
    titlevariant: PropTypes.string,
};

ContentCarousel.defaultProps = {
    isAmp: false,
    Title: "Titulos",
    titlevariant: "h2",
};

export default ContentCarousel;
