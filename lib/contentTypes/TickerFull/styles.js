import styled, { css } from "styled-components";
import { Box, Text, Time, Button } from "../../accessories";

const TickerStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        margin: ${theme.space.lg} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.base};
        @media (min-width: ${theme.breakpoints.lg}) {
            margin: ${theme.space.zero} ${theme.space.auto} ${theme.space.xl};
            max-width: 1070px;
            width: 100%;
    }
    `,
);

const TickerTopContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        width: auto;
        align-items: flex-end;
        margin: ${theme.space.zero} ${theme.space.xs} ${theme.space.xl};
        @media (min-width: ${theme.breakpoints.lg}) {
        margin-bottom: ${theme.space.xxl};
        }
    `,
);

const TickerMatchesDay = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        padding-bottom: ${theme.space.md};
        font-family: ${theme.fonts[3]};
    `,
);

const TickerMatchesDate = styled(Time)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.gray3};
        font-family: ${theme.fonts[3]};
        text-transform: capitalize;
    `,
);

const TickerButton = styled(Button)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        width: 140px;
        height: 30px;
        border: solid 1px ${theme.colors.Interaction};
        background: transparent;
        display: flex;
        justify-content: space-between;
        padding: ${theme.space.sm};
        margin: ${theme.space.zero};
        font-family: ${theme.fonts[0]};
        @media (min-width: ${theme.breakpoints.xl}) {
        width: 120px;
        margin-right: ${theme.space.md};
    `,
);

const TickerBoxStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1280px;
        display: block;
        margin: ${theme.space.xs};

        @media (min-width: ${theme.breakpoints.xl}) {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
            grid-gap: 12px;
            
        }
    `,
);

const TickerThumb = styled(Box)(
    ({ theme }) => css`
    width: auto;
        height: 100%;
        display: flex;
        margin-bottom: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.lg}) {
        margin-bottom: ${theme.space.xxl};
        }       
    `,
);



export { 
    TickerStyles, 
    TickerThumb,  
    TickerBoxStyles, 
    TickerTopContainer, 
    TickerMatchesDay, 
    TickerMatchesDate, 
    TickerButton 
};
