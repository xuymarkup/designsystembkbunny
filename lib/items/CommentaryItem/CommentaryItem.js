import React from "react";
import PropTypes from "prop-types";
import Icon from "../../accessories/Icons";
import {
    CommentaryStyles,
    CommentaryTitleStyles,
    CommentaryPlaceStyles,
    CommentaryBoxStyles,
    CommentaryBoxIcon,
    CommentaryBoxImage,
    CommentaryBoxCaption,
    CommentaryTextStyles,
    CommentaryDescriptionStyles,
    CommentaryBoxStatus,
} from "./styles";

const CommentaryItem = props => {
    const { ratio, src, title, status, description, icon } = props;
    return (
        <CommentaryStyles variant="Transparent">
            <CommentaryBoxStyles variant="Flex">
                <CommentaryBoxIcon variant="Transparent">
                    <Icon name={icon} variant="Transparent" />
                </CommentaryBoxIcon>
                <CommentaryTextStyles>{title}</CommentaryTextStyles>
                    <CommentaryTitleStyles variant="h3">
                        {status}
                        '
                    </CommentaryTitleStyles>
                <CommentaryBoxImage variant="Transparent">
                    <CommentaryPlaceStyles src={src} ratio={ratio} icon={false} />
                </CommentaryBoxImage>
            </CommentaryBoxStyles>
            <CommentaryBoxCaption variant="Solid">
                <CommentaryDescriptionStyles>{description}</CommentaryDescriptionStyles>
            </CommentaryBoxCaption>
        </CommentaryStyles>
    );
};

CommentaryItem.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
};

CommentaryItem.defaultProps = {
    src: {},
    ratio: "aspect1x1",
    title: "Tarjeta amarilla Beckham",
    status: "38",
    description: "David Beckhamha sido amonestado con tarjeta amarilla por juego peligroso.",
    icon: "YouTube",
};

export default CommentaryItem;
