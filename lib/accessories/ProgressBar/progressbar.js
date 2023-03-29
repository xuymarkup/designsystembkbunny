import React from "react";
import PropTypes from "prop-types";
import { Bar, TimeBar } from "./styles";
const ProgressBar = props => {
    const { stroke, strokecolor, progress, width } = props;

    return (
        <Bar width={width}>
            <TimeBar stroke={stroke} strokecolor={strokecolor} progress={progress} />
        </Bar>
    );
};

ProgressBar.propTypes = {
    stroke: PropTypes.number,
    strokecolor: PropTypes.string,
    progress: PropTypes.number,
    width: PropTypes.number,
};
ProgressBar.defaultProps = {
    stroke: 4,
    strokecolor: "",
    progress: 0,
    width: 100,
};

export default ProgressBar;
