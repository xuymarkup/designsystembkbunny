import React, { useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import { Box, Image } from "../../accessories";
import {
    TabsMatchStyles,
    TabsMatchContainerStyles,
    TabsMatchButtonContainerStyles,
} from "../TabsMatch/styles";
import {
    VersusStyles,
    VersusFactButton,
    VersusFact,
    VersusBoxImage,
    VersusTabsActive,
    VersusTabs,
    VersusImageHome,
    VersusImageAway,
    VersusContainerProgress,
    ProgressLevel,
    LevelTimeBar,
    ContainerStats,
    ProgressContainer,
    Numbers,
    VersusContainerStats,
} from "./styles";
import { TitleSquad, InformationText } from "../Squad/styles";

const Versus = props => {
    const { 
        numbers, 
        src, 
        ratio, 
        sections,
        stroke,
        strokecolor,
        progress,
        Eprogress,
        stats,
        width,
     } = props;
    const themeContext = useContext(ThemeContext);
    const ui = themeContext.ui.name;
    return (
        <Box variant="Transparent">
            <TitleSquad variant="h2">Estadísticas de Equipo</TitleSquad>
            <VersusStyles>
                <TabsMatchStyles>
                    <TabsMatchContainerStyles variant="Transparent">
                        <TabsMatchButtonContainerStyles>
                            <VersusTabsActive href="/" variant="Transparent">
                                Ataque
                            </VersusTabsActive >
                        </TabsMatchButtonContainerStyles>
                        {sections.map(section => {
                            return (
                                <Fragment key={section.id}>
                                    <TabsMatchButtonContainerStyles>
                                        <VersusTabs href="/" variant="Transparent">
                                            {section.title}
                                        </VersusTabs>
                                    </TabsMatchButtonContainerStyles>
                                </Fragment >
                            );
                        })}
                    </TabsMatchContainerStyles>
                </TabsMatchStyles>

                <VersusContainerStats variant="Transparent">
                    <VersusFactButton variant="Flex">
                        <VersusImageHome variant="Transparent">
                            <VersusBoxImage>
                                <Image ratio={ratio} src={src} />
                            </VersusBoxImage>
                        </VersusImageHome>
                        <VersusImageAway variant="Transparent">
                            <VersusBoxImage>
                                <Image ratio={ratio} src={src} />
                            </VersusBoxImage>
                        </VersusImageAway>
                    </VersusFactButton>


                    {stats.map(stat => {
                    return (
                        <Fragment key={stat.id}>
                            <VersusContainerProgress>
                                <ProgressContainer>
                                    <ProgressLevel width={width}>
                                        <LevelTimeBar
                                            stroke={stroke}
                                            strokecolor={strokecolor}
                                            progress={Eprogress}
                                        />
                                    </ProgressLevel>
                                </ProgressContainer>

                                <ContainerStats variant="Flex">
                                    <Numbers>{stat.local}</Numbers>
                                        <VersusFact>{stat.info}</VersusFact>
                                    <Numbers>{stat.away}</Numbers>
                                </ContainerStats>
                            </VersusContainerProgress>
                        </Fragment >
                        );
                    })}
                </VersusContainerStats>
            </VersusStyles >
        </Box>
    )
};

Versus.propTypes = {
    src: PropTypes.shape({}),
    ratio: PropTypes.string,
    stroke: PropTypes.number,
    strokecolor: PropTypes.string,
    progress: PropTypes.number,
    Eprogress: PropTypes.number,
    width: PropTypes.number,
};

Versus.defaultProps = {
    src: {},
    ratio: "aspect1x1",
    stroke: 35,
    strokecolor: "",
    progress: 50,
    Eprogress: 50,
    width: 100,
};

export default Versus;
