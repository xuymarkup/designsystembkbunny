import React from "react";
import PropTypes from "prop-types";
import {
    SquadItemStyles,
    SquadNumberBox,
    SquadNumberStyles,
    SquadTitleStyles,
    SquadTitleBox,
    SquadNationStyles,
    SquadNationBox,
} from "./styles";

const SquadItem = props => {
    const { number, title, nation } = props;
    return (
        <SquadItemStyles {...props} variant="Transparent">
            <SquadNumberBox>
                <SquadNumberStyles>{number}</SquadNumberStyles>
            </SquadNumberBox>
            <SquadTitleBox>
                <SquadTitleStyles variant="h3">{title}</SquadTitleStyles>
            </SquadTitleBox>
            <SquadNationBox>
                <SquadNationStyles>{nation}</SquadNationStyles>
            </SquadNationBox>
        </SquadItemStyles>
    );
};

SquadItem.propTypes = {
    title: PropTypes.string,
    number: PropTypes.string,
    nation: PropTypes.string,
};

SquadItem.defaultProps = {
    title: "David de Gea",
    number: "1",
    nation: "España",
};

export default SquadItem;
