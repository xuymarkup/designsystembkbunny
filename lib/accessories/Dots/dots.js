import React from "react";
import PropTypes from "prop-types";
import {
    LeadGalleryItemDot,
    LeadGalleryItemDotStyle,
    LeadGalleryItemDotTrack,
    Display,
} from "./styles";

const Dots = props => {
    const { small, active, items } = props;
    return (
        <LeadGalleryItemDot variant="Trasparent">
            <LeadGalleryItemDotTrack variant="Trasparent">
                {items.map((item, index) => {
                    return (
                        <LeadGalleryItemDotStyle key={item.id}>
                            <Display>{index}</Display>
                        </LeadGalleryItemDotStyle>
                    );
                })}
                {/* <LeadGalleryItemDotStyle small>
                    <Display>1</Display>
                </LeadGalleryItemDotStyle>
                <LeadGalleryItemDotStyle active>
                    <Display>3</Display>
                </LeadGalleryItemDotStyle>
                <LeadGalleryItemDotStyle small>
                    <Display>5</Display>
                </LeadGalleryItemDotStyle> */}
            </LeadGalleryItemDotTrack>
        </LeadGalleryItemDot>
    );
};

Dots.propTypes = {
    small: PropTypes.bool,
    active: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({})),
};

Dots.defaultProps = {
    small: false,
    active: false,
    items: [
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
    ],
};

export default Dots;
