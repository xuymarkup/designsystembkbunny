import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Button from "../../accessories/Button";
import Text from "../../accessories/Text";
import Title from "../../accessories/Title";
import Time from "../../accessories/Time";

const CalendarStyles = styled.section(
    ({ theme }) => css`

    max-width: 1268px;
    display: block;
    margin: ${theme.space.zero} ${theme.space.auto};
    padding: ${theme.space.zero} ${theme.space.base} ${theme.space.base};
    border-radius: 10px;
    @media (min-width: ${theme.breakpoints.xl}) {
        padding: ${theme.space.zero};
    }
  `,
);

const CalendarLeagueBox = styled(Box)(
    ({ theme }) => css`
    border-radius: 10px 10px 0px 0px;
    display: flex;
    height: 50px;
    width: 100%;
    background: ${props => (props.color ? props.color : theme.colors.Interaction)};
    @media (min-width: ${theme.breakpoints.xl}) {
      height: 60px;
    }
  `,
);
const BoxLeagueStyles = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    border-radius: 10px;
    @media (min-width: ${theme.breakpoints.xl}) {
      max-width: 1280px;
    }
  `,
);

const BoxLine = styled(Box)(
    ({ theme }) => css`
    transform: skewX(50deg);
    left: 72%;
    width: 6px;
    background-color: ${props => props.color};
    height: 50px;

    @media (min-width: ${theme.breakpoints.xl}) {
      height: 60px;
      left: 75%;
    }
  `,
);
const TitleCalendar = styled(Title)(
    ({ theme }) => css`
    color: ${theme.colors.Light};
    font-size: ${theme.fontSizes.fmd};
    font-family: ${theme.fonts[3]};
    font-weight: bold;
    text-transform: uppercase;
    margin-left: ${theme.space.lg};
    @media (min-width: ${theme.breakpoints.xl}) {
      font-size: ${theme.fontSizes.fsm};
      line-height: ${theme.lineHeights.lxs};
    }
  `,
);
const BoxButtonStyles = styled(Box)(
    ({ theme }) => css`
    background: ${theme.colors.Light};
    border-radius: 0px 0px 0px 0px;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto;
    display: grid;
  `,
);

const BeforeStyles = styled(Button)(
    ({ theme }) => css`
    color: ${theme.colors.Dark};
    font-weight: normal;
    font-size: ${theme.fontSizes.fsm};
    font-family: ${theme.fonts[3]};
    width: auto;
    padding: ${theme.space.md} ${theme.space.xs};
    margin: ${theme.space.zero};
    grid-column: 1 / 2;

    @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.xl2} ${theme.space.xl2} ${theme.space.zero};
        width: 30%;
    }
  `,
);
const NextStyles = styled(Button)(
    ({ theme }) => css`
    color: ${theme.colors.Dark};
    font-weight: normal;
    font-size: ${theme.fontSizes.fsm};
    font-family: ${theme.fonts[3]};
    padding: ${theme.space.md} ${theme.space.xs};
    width: auto;
    margin: ${theme.space.zero};
    grid-column: 2 / 3;
    display: flex;
    justify-content: flex-end;

    @media (min-width: ${theme.breakpoints.xl}) {
        font-size: ${theme.fontSizes.fmd};
        margin: ${theme.space.xl2} ${theme.space.xl2} ${theme.space.zero};
    }
  `,
);
const RoundLeagueTextStyles = styled(Text)(
    ({ theme }) => css`
    color: ${theme.colors.gray3};
    display: flex;
    justify-content: center;
    font-size: ${theme.fontSizes.fmd};
    font-family: ${theme.fonts[3]};
    font-weight: bold;
    margin: ${theme.space.md} ${theme.space.auto};
    @media (min-width: ${theme.breakpoints.xl}) {
      grid-column: 1/3;
    }
  `,
);
const ContainerItemsStyles = styled(Box)(
    ({ theme,$outline,$active }) => css`
    max-width: 1280px;
    display: block;
    padding: ${theme.space.xs};
    border-radius: 0px 0px 10px 10px;
    border: ${$outline ? theme.colors.Interaction : "none"} 2px solid;
    background: ${theme.colors.Light };
    overflow:scroll;

    @media (min-width: ${theme.breakpoints.xl}) {
      padding: ${props => (props.p ? props.p : theme.space.xl2)};
      overflow:scroll;
    }
  `,
);
const CalendarItemDateStyles = styled(Time)(
    ({ theme }) => css`
    color: ${theme.colors.gray3};
    display: flex;
    height: 18px;
    font-size: ${theme.fontSizes.fxs};
    justify-content: center;
    padding-left: ${theme.space.xs};
    text-align: center;
    width: auto;
  `,
);

const CalendarButtonContainer = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    height: auto;
    display: none;
    padding: ${theme.space.zero};
    justify-content: center;
    align-items: center;

    @media (min-width: ${theme.breakpoints.xl}) {
      display: none;
    }
  `,
);

const CalendarPlusButtonContainer = styled(CalendarButtonContainer)(
    ({ theme }) => css`

    display: flex;
    padding: ${theme.space.zero};
    margin: ${theme.space.base} ${theme.space.zero};
    @media (min-width: ${theme.breakpoints.xl}) {

    }
  `,
);
const CalendarButton = styled(Button)(
    ({ theme }) => css`
    width: 120px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    color: ${theme.colors.Light};
    border: 1px solid ${theme.colors.Interaction};
    background: transparent;
  `,
);

const CalendarButtonText = styled(Text)(
    ({ theme,$active }) => css`
    font-family: ${theme.fonts[0]};
    color:${$active ? theme.colors.Light : theme.colors.Dark };
    font-weight: normal;
  `,
);

const CalendarBoxButtons = styled(Box)(
    ({ theme }) => css`
    background: ${theme.colors.Interaction};
    display: flex;
    cursor: pointer;
    height: 40px;
    border-radius: 10px 10px 0px 0px;

    `,
);


const CalendarBoxButton = styled(Box)(
    ({ active }) => css`
    display:flex;
    justify-content:center;
    width: 100%;
    height: ${active ? "100%" : "auto"};
    
  `,
);

const CalendarBoxButtonActive = styled(CalendarBoxButton)(
  ({ active }) => css`
  display:flex;
  justify-content:center;
  width: 100%;
  height: ${active ? "100%" : "auto"};
  border-bottom: 5px solid rgb(255, 255, 255, 0.5);
`,
);

const SelectTeamButton = styled(Button)(
    ({ theme, active }) => css`
        font-weight: ${active ? "bold" : "normal"};
        font-size: ${theme.fontSizes.fsm};
        font-family: ${theme.fonts[3]};
        color: ${theme.colors.Light};
        padding: ${theme.space.sm};
        background: none;
        @media (min-width: ${theme.breakpoints.xl}) {
          font-size: ${theme.fontSizes.fmd};
  }
    `,
);

export {
    CalendarStyles,
    CalendarItemDateStyles,
    CalendarButtonContainer,
    CalendarPlusButtonContainer,
    CalendarButtonText,
    BoxLine,
    BoxLeagueStyles,
    BoxButtonStyles,
    BeforeStyles,
    NextStyles,
    CalendarLeagueBox,
    TitleCalendar,
    RoundLeagueTextStyles,
    ContainerItemsStyles,
    CalendarButton,
    CalendarBoxButtonActive,
    CalendarBoxButtons,
    CalendarBoxButton,
    SelectTeamButton,
};
