import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Text from "../../accessories/Text";
import Time from "../../accessories/Time";
import Button from "../../accessories/Button";
import Anchor from "../../accessories/Anchor";
import Info from "../../accessories/Info";

const CalendarItemStyles = styled(Box)(
    ({ theme, $active }) => css`
    position: relative;
    width: 100%;
    margin: ${theme.space.zero} ${theme.space.auto};
    background: ${$active ? theme.colors.Light : "none"};
    border-radius: 6px;
    padding: ${theme.space.md};
  `,
);
const CalendarItemContainerStyles = styled(Box)(
    ({ theme }) => css`
    cursor: pointer;
    display: flex;
    position: relative;
    height: auto;
    width: 340px;
    margin: ${theme.space.xl} ${theme.space.auto};
  `,
);
const CalendarItemTimeBoxStyles = styled(Box)(
    ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: 30%;
    padding: ${theme.space.sm};
    &::before {
      content: "";
      height: 80%;
      width: 1px;
      background: ${theme.colors.gray2};
      display: block;
      position: absolute;
      left: 0%;
      top: 5px;
    }
  `,
);
const CalendarItemTimeStyles = styled(Time)(
    ({ theme, $active  }) => css`
    color: ${$active ? theme.colors.Light : theme.colors.Dark};
    display: flex;
    font-size: ${theme.fontSizes.fxs};
    justify-content: center;
    margin: ${theme.space.xs};
    position: relative;
    font-family: ${theme.fonts[3]};
  `,
);
const BoxTimeContainer = styled(Box)(
    ({ theme, $outline }) => css`
    display: flex;
    border-bottom: ${$outline ? theme.colors.Interaction : theme.colors.gray2} 1px solid;
    width: 100%;
    margin: ${theme.space.md} ${theme.space.zero} ${theme.space.lg};
  `,
);
const BoxInfo = styled(Anchor)(
    ({ theme, $active }) => css`

    background: ${$active ? theme.colors.Dark : theme.colors.Light };
    border-radius: 10px 10px 0px 0px;
    display: inline-flex;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
    width: ${props => (props.w ? props.w : "100%")};
    @media (min-width: ${theme.breakpoints.md}) {
      margin: ${theme.space.zero};
    }
  `,
);
const CalendarItemDateStyles = styled(Time)(
    ({ theme, $active }) => css`
    color: ${$active ? theme.colors.Light : theme.colors.Dark};
    display: block;
    font-size: ${theme.fontSizes.fxs};
    justify-content: center;
    padding-left: ${theme.space.xs};
    text-align: left;
    width: auto;
    margin: ${theme.space.md} ${theme.space.zero};
    text-transform: capitalize;
    font-family: ${theme.fonts[3]};
  `,
);

const CalendarItemSeasonStyles = styled(Time)(
    ({ theme, $active }) => css`
    color: ${$active ? theme.colors.green : theme.colors.Light};
    font-size: ${theme.fontSizes.fxs};
    padding-right: ${theme.space.xs};
    margin: ${theme.space.md} ${theme.space.zero};
    text-transform: uppercase;
    font-family: ${theme.fonts[3]};
    font-weight: bold;
  `,
);

const CalendarItemTeamStyles = styled(Box)(
    ({ theme }) => css`
    position: relative;
    width: 70%;
    margin-right: ${theme.space.sm};
  `,
);
const CalendarItemImageStyles = styled(Box)(
    ({ theme }) => css`
    height: auto;
    margin-left: ${theme.space.sm};
    margin-bottom: ${theme.space.xs};
    width: 30px;
    height: 30px;
    display: flex;
  `,
);
const CalendarItemBoxStylesHome = styled(Box)(
    ({ theme }) => css`
    position: relative;
    padding: ${theme.space.sm};
  `,
);
const CalendarItemBoxStylesAway = styled(CalendarItemBoxStylesHome)(
    ({ theme }) => css`

  `,
);
const CalendarItemTitleStyles = styled(Text)(
    ({ theme, $active }) => css`
    align-items: center;
    color: ${$active ? theme.colors.Light : theme.colors.text};
    display: flex;
    font-size: ${theme.fontSizes.fxs};
    line-height: ${theme.lineHeights.lxs};
    margin-left: ${theme.space.sm};
    font-family: ${theme.fonts[0]};
    font-weight:${theme.fontWeights.bold};
    width: 148px;
  `,
);

const BoxItem = styled(Box)(
  ({ theme }) => css`
      display: block;
      margin-bottom: ${theme.space.xxl};

      @media (min-width: ${theme.breakpoints.md}) {
          margin: ${theme.space.zero} ${theme.space.sm} ${theme.space.xxl};
      }
  `,
);

const CalendarItemScoreStyles = styled(Info)(
    ({ theme,$active }) => css`
    align-items: center;
    color: ${$active ? theme.colors.Light : theme.colors.Dark};
    display: none;
    font-size: ${theme.fontSizes.fxs};
    font-weight: normal;
    line-height: ${theme.lineHeights.lxs};
    padding-left: ${theme.space.sm};
    font-family: ${theme.fonts[3]};
  `,
);

const CalendarItemContainer = styled(Anchor)(
  () => css`
      display: flex;
  `,
);

const ItemCalienteBoxStyles = styled(Anchor)(
  ({ theme }) => css`
      background: #ee0300;
      border-radius: 0px 0px 5px 5px;
      position: relative;
      display: flex;
      height: 36px;
      justify-content: space-evenly;
      align-items: center;
      padding: ${theme.space.xs} ${theme.space.lg} ${theme.space.sm};
  `,
);

const ItemCalienteImageStyles = styled(Box)(
  ({ theme }) => css`
      height: auto;
      max-width: 24px;
      width: 100%;
      margin: ${theme.space.zero} ${theme.space.xs};
      border-radius: 5px;
      top: 1px;
  `,
);

const TickerMomiosBoxStyles = styled(Box)(
  ({ theme }) => css`
      height: auto;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      margin-top: ${theme.space.xs};
  `,
);

const MomiosBoxStyles = styled(Box)(
  ({ theme }) => css`
      font-size: ${theme.fontSizes.fxs};
      display: flex;
      position: relative;
      text-align: center;
      width: 39px;
      height: 16px;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
  `,
);

const MomioStyles = styled(Info)(
  ({ theme }) => css`
      font-size: ${theme.fontSizes.fxs};
      border-radius: 6px;
      color: #ee0300;
      font-family: ${theme.fonts[3]};
      font-weight: bold;
  `,
);

const ItemCalienteTitle = styled(Text)(
  ({ theme }) => css`
      font-size: ${theme.fontSizes.fxs};
      text-transform: uppercase;
      text-align: center;
      display: block;
      color: ${theme.colors.Light};
      margin: ${theme.space.zero} ${theme.space.xs};
      font-family: ${theme.fonts[3]};
      font-weight: bold;
  `,
);

const ItemMomiosBoxStyles = styled(Box)(
  ({ theme }) => css`
      width: 100%;
      padding-left: ${theme.space.lg};
  `,
);


const CalienteClosedContainer = styled(Box)(
  () => css`
      display: flex;
      justify-content: center;
  `,
);

export {
    CalendarItemStyles,
    BoxTimeContainer,
    BoxInfo,
    CalendarItemTeamStyles,
    CalendarItemContainerStyles,
    CalendarItemBoxStylesHome,
    CalendarItemBoxStylesAway,
    CalendarItemImageStyles,
    CalendarItemTimeStyles,
    CalendarItemDateStyles,
    CalendarItemTitleStyles,
    CalendarItemContainer,
    CalendarItemScoreStyles,
    CalendarItemTimeBoxStyles,
    CalendarItemSeasonStyles,
    BoxItem,
    ItemCalienteImageStyles,
    ItemCalienteTitle,
    ItemCalienteBoxStyles,
    ItemMomiosBoxStyles,
    TickerMomiosBoxStyles,
    MomiosBoxStyles,
    MomioStyles,
    CalienteClosedContainer,
};