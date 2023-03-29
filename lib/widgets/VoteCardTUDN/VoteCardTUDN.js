import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Caliente from "../../../assets/caliente-lg.png";
import Back from "../../../assets/desktop/40_17-desktop-votacion.jpg";
import Team1 from "../../../assets/Equipos/esc_chamlg-bdortm.png";
import Team2 from "../../../assets/Equipos/esc_chamlg-chelsa.png";

import {
    VoteCardStyles,
    VoteCardLabelBox,
    VoteCardBack,
    VoteCardLabelText,
    VoteCardBox,
    VoteCardTitle,
    VoteCardFooter,
    VoteCardFooterText,
    VoteCardTeams,
    VoteCardTeamItem,
    VoteCardVSText,
    VoteCardTeamLogo,
    VoteCardRegisterText,
    VoteCardPercentageBox,
    VoteCardPercentageText,
    VoteCardOptionsBox,
    VoteCardQuinielaBox,
    VoteCardCalienteBox,
    CalienteLogo,
    VoteCardOptionText,
    VoteCardOptionsLeft,
    VoteCardOptionsRight,
    VoteCardCalienteLeft,
    VoteCardCalienteRight,
    VoteCardOptionTextSub,
    VoteCardBar,
    VoteCardTimeBar,
    VoteCardButton,
    VoteCardOptionsButton,
} from "./styles";

const VoteCardTUDN = props => {
    const { stroke, strokecolor, progress, width, VCnormal, VCactive } = props;

    return (
        <VoteCardStyles variant="Transparent">
            <VoteCardLabelBox>
                <VoteCardLabelText>
                    UEFA CHAMPIONS LEAGUE
                </VoteCardLabelText>
            </VoteCardLabelBox>
            {VCnormal && 
            <VoteCardBox>
                <VoteCardBack src={Back} aria-label="Caliente" />
                <VoteCardTitle>
                    ¿Quién ganará?
                </VoteCardTitle>
                <VoteCardTeams variant="Transparent">
                    <VoteCardTeamItem variant="Transparent">
                        <VoteCardTeamLogo src={Team1} aria-label="Borussia" />
                        <VoteCardButton variant="Solid" >
                            Votar
                        </VoteCardButton>
                    </VoteCardTeamItem>
                    <VoteCardTeamItem variant="Transparent">
                        <VoteCardVSText>
                            VS
                        </VoteCardVSText>
                    </VoteCardTeamItem>   
                    <VoteCardTeamItem variant="Transparent">
                        <VoteCardTeamLogo src={Team2} aria-label="Chelsea" />
                        <VoteCardButton variant="Solid" >
                            Votar
                        </VoteCardButton>
                    </VoteCardTeamItem>      
                </VoteCardTeams>
                <VoteCardFooter>
                    <VoteCardFooterText>
                        Presentado por
                    </VoteCardFooterText>
                    <CalienteLogo src={Caliente} width="50px" aria-label="Caliente" />
                </VoteCardFooter>
            </VoteCardBox>
            }
            {VCactive && 
            <VoteCardBox>
                <VoteCardBack src={Back} aria-label="Caliente" />
                <VoteCardRegisterText>
                    Tu voto se ha registrado
                </VoteCardRegisterText>
                <VoteCardPercentageBox variant="Transparent">
                    <VoteCardPercentageText>
                        60%
                    </VoteCardPercentageText>
                    <VoteCardBar width={width}>
                        <VoteCardTimeBar stroke={stroke} strokecolor={strokecolor} progress={progress} />
                    </VoteCardBar>
                    <VoteCardPercentageText>
                        40%
                    </VoteCardPercentageText>
                </VoteCardPercentageBox>
                <VoteCardOptionsBox variant="Transparent">
                    <VoteCardQuinielaBox variant="Transparent">
                        <VoteCardOptionsLeft variant="Transparent">
                            <VoteCardOptionText>
                                Juega en la Quiniela* de TUDN y gana grandes premios
                            </VoteCardOptionText>
                            <VoteCardOptionTextSub>
                                *Para participar necesitas descargar la APP
                            </VoteCardOptionTextSub>
                        </VoteCardOptionsLeft>
                        <VoteCardOptionsRight variant="Transparent">
                            <VoteCardOptionsButton variant="Solid" >
                                Jugar
                            </VoteCardOptionsButton>
                        </VoteCardOptionsRight>
                    </VoteCardQuinielaBox>
                    <VoteCardCalienteBox variant="Transparent">
                        <VoteCardCalienteLeft variant="Transparent">
                            <VoteCardOptionText>
                                Apuesta ahora en
                            </VoteCardOptionText>
                            <CalienteLogo src={Caliente} width="50px" aria-label="Caliente" />
                        </VoteCardCalienteLeft>
                        <VoteCardCalienteRight variant="Transparent">
                            <VoteCardOptionsButton variant="Solid" >
                                Apostar
                            </VoteCardOptionsButton>
                        </VoteCardCalienteRight>
                    </VoteCardCalienteBox>
                </VoteCardOptionsBox>
                <VoteCardFooter>
                    <VoteCardFooterText>
                        Presentado por
                    </VoteCardFooterText>
                    <CalienteLogo src={Caliente} width="50px" aria-label="Caliente" />
                </VoteCardFooter>
            </VoteCardBox>
            }
        </VoteCardStyles>
        
    );
};

VoteCardTUDN.propTypes = {
    stroke: PropTypes.number,
    strokecolor: PropTypes.string,
    progress: PropTypes.number,
    width: PropTypes.number,
    VCnormal: PropTypes.bool,
    VCactive: PropTypes.bool,
};
VoteCardTUDN.defaultProps = {
    stroke: 10,
    strokecolor: "",
    progress: 60,
    width: 100,
    VCnormal: false,
    VCactive: false,
};


export default VoteCardTUDN;
