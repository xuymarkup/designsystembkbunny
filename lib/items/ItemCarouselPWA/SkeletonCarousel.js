import React from "react";
import Placeholder from "../../accessories/Placeholder";
import {
    SkeletonItemCarouselCaption,
    ItemCarouselStyles,
    SkeletonItemCarouselImage,
} from "./styles";

const SkeletonCarousel = () => {
    return (
        <ItemCarouselStyles variant="transparent">
            <SkeletonItemCarouselImage>
                <Placeholder ratio="aspect16x9" iconwidth="40px" />
            </SkeletonItemCarouselImage>
            <SkeletonItemCarouselCaption />
        </ItemCarouselStyles>
    );
};

export default SkeletonCarousel;
