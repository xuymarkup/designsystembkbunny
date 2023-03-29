import React, { useState } from "react";
import PropTypes from "prop-types";
import { Icons, Box } from "../../accessories";
import {
    ModalSubsWrapStyles,
    ModalGrid,
    ModalSubsNumber,
    ModalBoxStyles,
    ModalSubsText,
    ModalSubsStatus,
    ModalBoxHead,
    ModalSubsSection,
    ModalSubsStatics,
    ModalBoxInfo,
    NumberContainer,
    SubsTextPosition,
    ModalContainer,
    StatusContainer,
    ActionsContainer,
} from "./styles";

const ModalSubsWrap = ({ active, handleModal, iconSize }) => {
    return (
        <ModalSubsWrapStyles 
            active={active} 
            id="ModalSearch" 
            handleClose={handleModal} 
            iconcolor="Interaction"
            iconSize={25}
            >
                <ModalBoxStyles variant="Transparent">
                    <ModalBoxHead variant="Transparent">
                        <Box variant="Flex">
                            <NumberContainer variant="Transparent">
                                <ModalSubsNumber>21</ModalSubsNumber>
                            </NumberContainer>
                            <Box variant="Transparent">
                                <ModalSubsText>Rogerio</ModalSubsText>
                                <SubsTextPosition>Medio</SubsTextPosition>
                            </Box>
                        </Box>
                        <ActionsContainer variant="Transparent">
                            <StatusContainer variant="Flex">
                                <Icons name="goal" variant="Outline" size={24} />
                                <ModalSubsStatus>78'</ModalSubsStatus>
                            </StatusContainer>

                            <StatusContainer variant="Flex">
                                <Icons name="red-card1" variant="Outline" size={24} color="#D35157" />
                                <ModalSubsStatus>89'</ModalSubsStatus>
                            </StatusContainer>
                        </ActionsContainer>
                    </ModalBoxHead>
                    <Box variant="Transparent">
                        <ModalGrid variant="Transparent">
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>2</ModalSubsStatics>
                                <ModalSubsSection>Remates</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>1</ModalSubsStatics>
                                <ModalSubsSection>Remates a puerta</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>25</ModalSubsStatics>
                                <ModalSubsSection>Toques</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>7</ModalSubsStatics>
                                <ModalSubsSection>Cahnces creadas</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>23</ModalSubsStatics>
                                <ModalSubsSection>Pases</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>95%</ModalSubsStatics>
                                <ModalSubsSection>Precisión de pases</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>2</ModalSubsStatics>
                                <ModalSubsSection>Quites</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>6</ModalSubsStatics>
                                <ModalSubsSection>Faltas recibidas</ModalSubsSection>
                            </ModalBoxInfo>
                            <ModalBoxInfo variant="Transparent">
                                <ModalSubsStatics>0</ModalSubsStatics>
                                <ModalSubsSection>Faltas cometidas</ModalSubsSection>
                            </ModalBoxInfo>
                        </ModalGrid>
                    </Box>
                </ModalBoxStyles>
        </ModalSubsWrapStyles>
    );
};

ModalSubsWrap.propTypes = {
    active: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    iconSize: PropTypes.number,
};

ModalSubsWrap.defaultProps = {
    iconSize: 20,
};


export default ModalSubsWrap;
