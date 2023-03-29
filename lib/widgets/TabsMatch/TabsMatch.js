import React, { useContext, Fragment } from "react";
import { ThemeContext } from "styled-components";
import {
    TabsMatchStyles,
    TabsMatchBoxStyles,
    TabsMatchButtonStyles,
    TabsMatchButtonContainerStyles,
    TabsMatchButtonActiveStyles,
} from "./styles";

const TabsMatch = props => {
    const { sections } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <TabsMatchStyles>
            <TabsMatchBoxStyles variant="Transparent">
                <TabsMatchButtonContainerStyles>
                    <TabsMatchButtonActiveStyles href="/" variant="Solid" color={ui === "tudn" ? "Light" : null} borderColor={ui === "tudn" ? "gray3" : null}>
                        Telenovelas
                    </TabsMatchButtonActiveStyles>
                </TabsMatchButtonContainerStyles>
                {sections.map(section => {
                    return (
                        <Fragment key={section.id}>
                            <TabsMatchButtonContainerStyles>
                                <TabsMatchButtonStyles href="/" variant="Outline">
                                    {section.title}
                                </TabsMatchButtonStyles>
                            </TabsMatchButtonContainerStyles>
                        </Fragment >
                    );
                })}
            </TabsMatchBoxStyles>
        </TabsMatchStyles>
    );
};

export default TabsMatch;
