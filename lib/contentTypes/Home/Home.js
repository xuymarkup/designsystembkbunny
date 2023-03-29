import React, { useEffect, useState } from "react";
import Layout from "../../layout";
import socialmedia from "../../widgets/HeaderTUDN/social.json";

import SportFollow from "../../widgets/SportFollow";
import VoteCardTUDN from "../../widgets/VoteCardTUDN";
import PromoEvent from "../../widgets/PromoEvent";
import LandingCard from "../../widgets/LandingCard";
import HighImpact from "../../widgets/HighImpact";

import {
    PageStyles,
    AdsHomeStyles,
    AdsImageStyles,
    WidgetBox,
} from "./styles";

const Home = props => {
    const { 
        aspect = "aspect16x9", 
        scoreLocal, 
        scoreAway, 
        imgLocal, 
        imgAway, 
        image, 
        newsItem,
        dataHighImpact,
        news,
        imageLanding,
        dataTorneos,
        imagePromo
    } = props;
    const [ratio, setRatio] = useState("aspect16x9");
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
            <PageStyles>
                <SportFollow SFActive={true} />
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
                />
                <AdsHomeStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="720"
                        height="90"
                    />
                </AdsHomeStyles>
                <LandingCard 
                    data={dataTorneos} 
                    src={imageLanding}
                />
                <VoteCardTUDN VCnormal={true} />
                <AdsHomeStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="720"
                        height="90"
                    />
                </AdsHomeStyles>
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
                <WidgetBox variant="Transparent">
                    <PromoEvent 
                        ratio={aspect} 
                        src={imagePromo} 
                    />
                </WidgetBox>
                <AdsHomeStyles>
                    <AdsImageStyles
                        src="https://dummyimage.com/250/cccccc/cccccc.png"
                        alt="ads"
                        width="720"
                        height="90"
                    />
                </AdsHomeStyles>
                <LandingCard 
                    data={dataTorneos} 
                    src={imageLanding}
                />
            </PageStyles>
        </Layout>
    );
};

export default Home;
