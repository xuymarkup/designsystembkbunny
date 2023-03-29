import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PageStyles,MatchGrid  } from "./styles";
import { Image } from "../../accessories";
import Layout from "../../layout";
import socialmedia from "../../widgets/HeaderTUDN/social.json";
import SportFollow from "../../widgets/SportFollow";
const Sports = props => {
    const {SFEmpty,SFPageEmpty,SFPageActive,favorites} = props;

    return (
        <Layout
            foot={true}
            breadcrumbs={[]}
            social={socialmedia}
            uri="https://tvsa-sandbox.github.io/widgets-beta/"
            filter=""
        >
            <PageStyles>
                <SportFollow SFPageEmpty={false}/>    
                <SportFollow SFPageActive={true}/> 
            </PageStyles>
          </Layout>   
           
    );
};

Sports.propTypes = {
    SFPageEmpty: PropTypes.arrayOf(PropTypes.shape({})),
    SFPageActive: PropTypes.arrayOf(PropTypes.shape({})),
  
};

Sports.defaultProps = {
    SFPageEmpty: [],
    SFPageActive:[],
};

export default Sports;
