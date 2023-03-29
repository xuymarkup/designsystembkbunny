import React from "react";
import PropTypes from "prop-types";
import { MulticontentStyles, MulticontentTrack, MulticontentThumbnails } from "./styles";

const Multicontent = props => {
    const { children } = props;
    return (
        <MulticontentStyles {...props}>
            <MulticontentTrack>
                <MulticontentThumbnails>{children}</MulticontentThumbnails>
            </MulticontentTrack>
        </MulticontentStyles>
    );
};
Multicontent.propTypes = {
    children: PropTypes.node,
};
Multicontent.defaultProps = {
    children: null,
};
export default Multicontent;
