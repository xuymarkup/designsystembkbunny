import styled, { css } from "styled-components";
import { Box, Text, Button, Icons, Title, Info } from "../../accessories";

const LineUpStyles = styled.section(
    ({ theme }) => css`
        width: 100%;
        background: transparent;
        margin: ${theme.space.zero} ${theme.space.auto};
        padding: ${theme.space.zero} ${theme.space.base};
        max-width: 525px;
        height: auto;
        @media (min-width: ${theme.breakpoints.lg}) {
            min-width: 478px;
            padding: ${theme.space.zero};
        }
    `,
);

const LineUpBoxHome = styled(Box)(
    ({ theme }) => css`
        min-height: 210px;
        justify-content: center; 
        width: 100%;
        @media (min-width: ${theme.breakpoints.lg}) {
            min-height: 275px;
        }
    `,
);

const LineUpBoxAway = styled(LineUpBoxHome)(
    ({ theme }) => css`
        grid-area: away;

    `,
);

const LineUpBoxHomeTeam = styled(LineUpBoxHome)(
    ({ theme }) => css`
    grid-area: hometeam;
    display: grid;
    width: 90%;
    margin: ${theme.space.auto};
    padding: ${theme.space.base} ${theme.space.zero};
    grid-template-columns: 1fr ;
    grid-template-rows: 25% 25% 25% 25%;
    grid-gap: 2px;
    grid-template-areas:
    "gk"
    "df "
    "md"
    "fw";

@media (min-width: ${theme.breakpoints.lg}) {
    width: 100%;
    margin:${theme.space.zero} ${theme.space.auto};
    padding: ${theme.space.auto};
        }
`,
);

const LineUpBoxAwayTeam = styled(LineUpBoxHomeTeam)(
    ({ theme }) => css`
    grid-area: awayteam;
    grid-template-areas:
    "fw"
    "md "
    "df"
    "gk";
`,
);

const LineUpBoxPlayer = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.auto}  ${theme.space.lg};
        text-align: center; 
        width: 80px;
        min-height: 52px;
        height: auto;
        border-bottom: 2px solid ${theme.colors.gray2};
        display: none;

        &:last-child {
            border-bottom: none;
    }

        @media (min-width: ${theme.breakpoints.lg}) {
            width: auto;
            margin-bottom: ${theme.space.md};
            min-height: 80px;
            display: grid;
        }
`,
);

const LineUpPlayerField = styled(LineUpBoxPlayer)(
    ({ theme }) => css`
        border-bottom: none;
        margin: ${theme.space.zero} ${theme.space.auto};
        display: flex;
`,
);

const LineUpPlayerFieldGk = styled(LineUpPlayerField)(
    ({ theme }) => css`
        @media (min-width: ${theme.breakpoints.lg}) {
            width: auto;
            margin: ${theme.space.zero} ${theme.space.auto};
        }
`,
);

const LineUpBoxField = styled(Box)(
    ({ theme }) => css`
        width:100%;
        background-image:url(widget-alineaciones-cancha_3-4.png);
        height:auto;
        max-height: 870px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position-y: none;
`,
);

const LineUpNumberHome = styled(Button)(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fsm};
        margin: ${theme.space.zero} ${theme.space.auto};
        font-weight: bold;
        background: ${theme.colors.Interaction};
        border: 1px solid  ${theme.colors.Secondary};
        min-width: 35px;
        min-height: 35px;
        border-radius: 50%;
        padding:${theme.space.zero} ;

        @media (min-width: ${theme.breakpoints.lg}) {
            width: 50px;
            height: 50px;
        }
        
        &:hover {
            transform: scale(1.1); 
            transition: all 0.2s ease-in-out 0s;
            opacity: 1;
    }
`,
);

const LineUpNumberAway = styled(LineUpNumberHome)(
    ({ theme }) => css`
        background: ${theme.colors.Secondary};
        border: 1px solid  ${theme.colors.Interaction};
`,
);

const LineUpIconsField = styled(Icons)(
    ({ theme }) => css`
        top: 0px;
        background: ${theme.colors.Light};
        border-radius: 50%;
        width: 14px;
        height: auto;
        position: absolute;
        right: 17px;
        @media (min-width: ${theme.breakpoints.lg}) {
            right: 0px;
            width: 17px;
        } 
`,
);

const LineUpContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        background:#4A8371;

`,
);

const LineUpGridField = styled(Box)(
    ({ theme }) => css`
    width: auto;
    display: flex;
    justify-content: center;
    max-width: 478px;
    grid-area: field;
    margin:${theme.space.auto};
    padding:${theme.space.zero} ${theme.space.sm};
    @media (min-width: ${theme.breakpoints.lg}) {
        width: 478px;
        padding:${theme.space.zero};
        }
`,
);

const LineUpTabsActive = styled(Button)(
    ({ theme }) => css`
    width: 100%;
    min-width: 162px;
    height: 40px;
    font-size: ${theme.fontSizes.fsm};
    font-weight: bold;
    border-bottom: 2px solid  ${theme.colors.Light};
    border-radius: 10px 0px 0px 0px;
    background: ${theme.colors.Interaction};
    color: ${theme.colors.Light};
    justify-content: center;
    @media (min-width: ${theme.breakpoints.lg}) {
        min-width: 239px;
        height: 60px;
        font-size: ${theme.fontSizes.fbase};
    }
`,
);

const LineUpTabs = styled(LineUpTabsActive)(
    ({ theme }) => css`
    border-bottom: none;
    border-radius: 0px 10px 0px 0px;
`,
);

const LineUpSubstitutes = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    height: auto;
    border-radius: 0px 0px 15px 15px;
    padding:${theme.space.zero} ${theme.space.zero} ${theme.space.xl2} ${theme.space.zero};
`,
);

const TeamsContainer = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    height: 31px;
    background: ${theme.colors.gray2};
    display: flex;
    @media (min-width: ${theme.breakpoints.lg}) {
        height: 45px;
    }
`,
);

const TeamsContainerHeadlines = styled(TeamsContainer)(
    ({ theme }) => css`
    background:#4A8371;
`,
);

const TeamTileHome = styled(Info)(
    ({ theme }) => css`
    font-weight: bold;
    font-family: ${theme.fonts[2]};
    font-size: ${theme.fontSizes.fsm};
    width: 100%;
    padding: ${theme.space.zero} ${theme.space.md};
    @media (min-width: ${theme.breakpoints.lg}) {
        font-size: ${theme.fontSizes.fbase};
    }
`,
);

const TeamTileAway = styled(TeamTileHome)(
    ({ theme }) => css`
    text-align: right;
    width: 100%;
`,
);

const TeamTileHeadlines = styled(TeamTileHome)(
    ({ theme }) => css`
    color: ${theme.colors.Light};
`,
);

const PlayersContainer = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    height: auto;
    display:flex;
    
`,
);


export { 
    LineUpStyles, 
    LineUpPlayerField, 
    LineUpBoxField, 
    LineUpBoxHome, 
    LineUpBoxAway, 
    LineUpBoxPlayer, 
    LineUpContainer, 
    LineUpNumberHome, 
    LineUpNumberAway, 
    LineUpGridField, 
    LineUpBoxHomeTeam, 
    LineUpBoxAwayTeam, 
    LineUpTabsActive, 
    LineUpTabs, 
    LineUpIconsField, 
    LineUpPlayerFieldGk,
    LineUpSubstitutes,
    TeamsContainer,
    TeamsContainerHeadlines,
    TeamTileHome,
    TeamTileAway,
    PlayersContainer,
    TeamTileHeadlines,
    };
