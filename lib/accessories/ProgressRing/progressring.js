import React from "react";
import PropTypes from "prop-types";
import SvgCircle from "./styles";

const ProgressRing = props => {
    const { stroke, strokecolor, radius, progress } = props;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <SvgCircle height={radius * 2} width={radius * 2}>
            <circle
                stroke={strokecolor}
                strokeWidth={stroke}
                strokeDasharray={`${circumference} ${circumference}`}
                fill="transparent"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                style={{ strokeDashoffset }}
            />
        </SvgCircle>
    );
};

ProgressRing.propTypes = {
    stroke: PropTypes.number,
    strokecolor: PropTypes.string,
    radius: PropTypes.number,
    progress: PropTypes.number,
};
ProgressRing.defaultProps = {
    stroke: 5,
    strokecolor: "white",
    radius: 25,
    progress: 0,
};

export default ProgressRing;
