import styled, { css } from "styled-components";
import { Modal, Box, Text, Info } from "../../accessories";

const ModalSubsWrapStyles = styled(Modal)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        opacity: 0.97;
        width: auto;
        height: auto;
        max-width: 524px;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const ModalGrid = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.xxl};
        display: grid;
        grid-template-columns: repeat(3, 0.3fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 10px;
        grid-row-gap: 15px;
        justify-content: center;
    `,
);

const ModalContainer = styled(Box)(
    ({ theme }) => css`
        
    `,
);

const ModalBoxStyles = styled(Box)(
    () => css`
        box-shadow: 0px 6px 10px #d6d6d6;
        width: 324px;
        border-radius: 10px;
    `,
);

const ModalBoxHead = styled(Box)(
    ({ theme, $outline }) => css`
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.xxl} ${theme.space.zero};
        display:flex;
        height: auto;
        width: 85%;
        justify-content: space-between;
        border-bottom: 1px solid ${theme.colors.gray2};
    `,
);

const ModalBoxInfo = styled(Box)(
    () => css`
        height: 65px;
    `,
);

const NumberContainer = styled(Box)(
    () => css`
        height: 50px;
        width: 50px;
        display:flex;
    `,
);

const StatusContainer = styled(Box)(
    () => css`
        height: auto;
        width: auto;
        
    `,
);

const ModalSubsNumber = styled(Info)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fxl3};
        font-weight: bold;
        font-family: ${theme.fonts[0]};
    `,
);

const ModalSubsStatics = styled(ModalSubsNumber)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.sm};
        background: none;
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[0]};
    `,
);

const ModalSubsText = styled(Text)(
    ({ theme }) => css`
        font-weight: bold;
        margin: ${theme.space.zero} ${theme.space.base};
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[0]};
    `,
);

const SubsTextPosition = styled(Text)(
    ({ theme }) => css`
        font-weight: normal;
        margin: ${theme.space.zero} ${theme.space.base};
        font-size: ${theme.fontSizes.fmd};
        font-family: ${theme.fonts[0]};
    `,
);

const ModalSubsStatus = styled(Text)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.base};
        font-size: ${theme.fontSizes.fsm};
        font-family: ${theme.fonts[0]};
    `,
);

const ModalSubsSection = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        text-align: center;
        font-family: ${theme.fonts[0]};
`,
);

const ActionsContainer = styled(Box)(
    () => css`
        height: auto;
        width: auto;
        
    `,
);

export { 
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
    };
