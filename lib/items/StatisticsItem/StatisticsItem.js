import React, { Fragment } from "react";
import Box from "../../accessories/Box";
import {
    StatisticsItemStyles,
    StatisticsItemNumber,
    StatisticsBoxSpace,
    StatisticsItemTopTeam,
    StatisticsItemBoxTop,
} from "./styles";

const StatisticsItem = props => {
    const { counts, points } = props;
    return (
        <StatisticsItemStyles>
            <StatisticsItemBoxTop>
                {points.map(point => {
                    return (
                        <Fragment key={point.id}>
                            <StatisticsItemTopTeam>{point.title}</StatisticsItemTopTeam>
                        </Fragment >
                    );
                })}
            </StatisticsItemBoxTop>
            <Box variant="Flex">
                {counts.map(count => {
                    return (
                        <Fragment key={count.id}>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber> {count.pts}</StatisticsItemNumber>
                            </StatisticsBoxSpace>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber> {count.ply}</StatisticsItemNumber>
                            </StatisticsBoxSpace>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber>  {count.win}</StatisticsItemNumber>
                            </StatisticsBoxSpace>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber>  {count.drw}</StatisticsItemNumber>
                            </StatisticsBoxSpace>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber>  {count.lts} </StatisticsItemNumber>
                            </StatisticsBoxSpace>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber> {count.gsc} </StatisticsItemNumber>
                            </StatisticsBoxSpace>
                            <StatisticsBoxSpace>
                                <StatisticsItemNumber> {count.gcc} </StatisticsItemNumber>
                            </StatisticsBoxSpace>
                        </Fragment>
                    );
                })}
            </Box>
        </StatisticsItemStyles >
    );
};

export default StatisticsItem;
