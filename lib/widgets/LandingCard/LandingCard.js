import React  from "react";
import PropTypes from "prop-types";
import { LandingCardStyles, LandingCardTitle  } from "./styles";
import { Carousel } from "../../accessories";
import { LandingCardItem } from "../../items";

const LandingCard = props => {
    const{ title, data, src } = props;
    return (
        <LandingCardStyles variant="Transparent">
            <LandingCardTitle variant="h2">{title}</LandingCardTitle>
            <Carousel>
                {data.map(item => {
                    return <LandingCardItem src={src} name={item.name} key={item.id}/>
                })}
            </Carousel>
        </LandingCardStyles>
    );
};

LandingCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})),
    title: PropTypes.string,
};

LandingCard.defaultProps = {
    data: [], 
    title: "Torneos",
};

export default LandingCard;
