import React from "react";
import GridStyles from "./styles";

const Grid = ({ widgets }) => {
    const AREAS = [];
    const COLUMNS = 14;
    const WIDGETS = [];
    let rowPosition = 0;
    let rowTotal = 0;

    const fillColumns = (array = [], widget, index) => {
        const WIDGET = `${widget.name}${index} `;
        WIDGETS.push({
            area: WIDGET,
            mock: widget.mock,
            widget: widget.widget,
        });
        const row = WIDGET.repeat(widget.size);
        return `${array}${row}`;
    };

    const fillRows = (acumulator, widget, index) => {
        rowTotal = acumulator + widget.size;
        if (rowTotal > COLUMNS) {
            rowPosition += 1;
            acumulator = widget.size;
        } else {
            acumulator += widget.size;
        }

        AREAS[rowPosition] = fillColumns(AREAS[rowPosition], widget, index);

        return acumulator;
    };

    widgets.reduce(fillRows, 0);

    let areas = AREAS.map(area => {
        const ROW = area.replace(/\s?$/, "");
        let newRow = ROW;
        if (!area.includes("Hero")) {
            newRow = `. ${ROW} .`;
        }
        const LAYOUT = newRow.split(" ");
        return newRow + " . ".repeat(COLUMNS - LAYOUT.length);
    });

    areas = JSON.stringify(areas);
    areas = areas.replace(/\[|\]|,/g, "");

    return (
        <GridStyles areas={areas}>
            {WIDGETS.map((item, index) => {
                const WIDGET = item.widget;
                return <WIDGET area={item.area} key={index} {...item.mock} />;
            })}
        </GridStyles>
    );
};

export default Grid;
