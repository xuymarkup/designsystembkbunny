import React from "react";
import PropTypes from "prop-types";
import { SwitchStyles, CircleStyles, LabelStyles } from "./styles";

const SwitchButton = props => {
    const { value, checked, onChange, id, disabled, title, w, h, circle, colorActive, colorDisabled } = props;
    return (
        <LabelStyles disabled={disabled} title={title} w={w} h={h} colorDisabled={colorDisabled}>
            <SwitchStyles
                id={id}
                type="checkbox"
                value={value}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
            />
            <CircleStyles circle={circle} colorActive={colorActive} colorDisabled={colorDisabled} h={h} />
        </LabelStyles>
    );
};

SwitchButton.propTypes = {
    disabled: PropTypes.bool,
    colorDisabled: PropTypes.string
};
SwitchButton.defaultProps = {
    disabled: false,
    colorDisabled: "grayfooter"
};

export default SwitchButton;
