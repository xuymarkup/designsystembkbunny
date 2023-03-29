import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Layout from "../../layout";
import socialmedia from "../../widgets/HeaderTUDN/social.json";
import Ads from "../../accessories/Ads";

import {
    HighImpact,
    SportFollow,
    EventRemminder,
} from "../../widgets";

import {
    AdsImageStyles,
    BoxEvent,
    BoxHighImpact,
    TitleHighImpact,
} from "./styles";


const Tournament = props => {
    const { image, 
        newsItem, 
        dataHighImpact, 
        news, 
        scoreLocal, 
        scoreAway, 
        imgLocal, 
        imgAway } = props;
    const [ratio, setRatio] = useState("aspect3x4");
    useEffect(() => {
        setRatio(window.innerWidth > 767 ? "aspect16x9" : "aspect3x4");
    });
    return (
        <Layout
            foot={true}
            breadcrumbs={[]}
            social={socialmedia}
            uri="https://tvsa-sandbox.github.io/widgets-beta/"
            filter=""
        >
                <SportFollow SFActive={true} />
                <BoxEvent variant="Transparent" >
                    <EventRemminder/>
                </BoxEvent>
                <BoxHighImpact variant="Transparent">
                    <HighImpact
                        ratio={ratio}
                        src={image}
                        newsitem={newsItem}
                        datas={dataHighImpact}
                        news={news}
                        srcLocal={imgLocal}
                        srcAway={imgAway}
                        scoreLocal={scoreLocal}
                        scoreAway={scoreAway}
                        event={false}
                    />
                </BoxHighImpact>
                <Ads>
                    <AdsImageStyles/>
                </Ads>
                <BoxHighImpact variant="Transparent" >
                    <HighImpact
                            ratio={ratio}
                            src={image}
                            newsitem={newsItem}
                            datas={dataHighImpact}
                            news={news}
                            srcLocal={imgLocal}
                            srcAway={imgAway}
                            scoreLocal={scoreLocal}
                            scoreAway={scoreAway}
                            event={false}
                        />
                </BoxHighImpact>
                <BoxHighImpact variant="Transparent">
                    <TitleHighImpact variant="h2">Ultimas Noticias</TitleHighImpact>
                        <HighImpact
                            ratio={ratio}
                            src={image}
                            newsitem={newsItem}
                            datas={dataHighImpact}
                            news={news}
                            srcLocal={imgLocal}
                            srcAway={imgAway}
                            scoreLocal={scoreLocal}
                            scoreAway={scoreAway}
                            event={false}
                        />
                </BoxHighImpact>
                <Ads>
                    <AdsImageStyles/>
                </Ads>
                <BoxHighImpact variant="Transparent">
                    <TitleHighImpact variant="h2">Ultimas Noticias</TitleHighImpact>
                        <HighImpact
                            ratio={ratio}
                            src={image}
                            newsitem={newsItem}
                            datas={dataHighImpact}
                            news={news}
                            srcLocal={imgLocal}
                            srcAway={imgAway}
                            scoreLocal={scoreLocal}
                            scoreAway={scoreAway}
                            event={false}
                        />
                </BoxHighImpact>
        </Layout>
    );
};
Tournament.propTypes = {
    dataHighImpact: PropTypes.arrayOf(PropTypes.shape({})),
    news: PropTypes.arrayOf(PropTypes.shape({})),
};

Tournament.defaultProps = {
    dataHighImpact: [],
    news: [],
};
export default Tournament;