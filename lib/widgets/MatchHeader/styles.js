import styled, { css } from "styled-components";
import Title from "../../accessories/Title";
import Box from "../../accessories/Box";
import Info from "../../accessories/Info";
import Text from "../../accessories/Text";

const MatchHeaderStyles = styled.section(
    ({ theme }) => css`
    width: 95%;
    margin: ${theme.space.base} ${theme.space.auto} ${theme.space.zero};

    @media (min-width: ${theme.breakpoints.md}) {
        width: 100%;
        max-width: 1100px;
    }
  `,
);

const MatchHeaderBoxStyles = styled(Box)(
    ({ theme }) => css`
    width: 100%;
    height: auto;
    margin:${theme.space.base} ${theme.space.zero};   
    ::before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://sportdata-design.televisa.com/graphics/widgets/matcheader/frame3.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
     
      }

    @media (min-width: ${theme.breakpoints.md}) {
      padding-bottom: ${theme.space.base};
     
    }
  `,
);

const BoxTitle = styled(Box)(
    ({ theme }) => css`
    display: flex;
    width: 100%;
    height: auto;
    margin: ${theme.space.auto};
    overflow: hidden;
    justify-content: center;
  `,
);

const BoxLeague = styled(Box)(
  ({ theme,$active  }) => css`
    background:${$active ? theme.colors.Light : "#03247B"};
    display: flex;
    height: 35px;
    width: 100%;

    @media (min-width: ${theme.breakpoints.md}) {
      height: 40px;
     
    }
`,
);
const BoxGrid = styled(Box)(
    ({ theme }) => css`
    display: grid;
    grid-template-columns: 42% 16% 42%;
    width: 100%;
    margin: ${theme.space.sm} ${theme.space.auto} ${theme.space.zero};
    overflow: hidden;
    align-items: unset;
    @media (min-width: ${theme.breakpoints.md}) {
      margin: ${theme.space.zero};
        }
  `,
);

const BoxHomeGrid = styled(Box)(
    ({ theme }) => css`
    display: grid;
    grid-template-columns: 30px auto;
    column-gap: 9px;
    width: 100%;
    min-height: 40px;
    margin: ${theme.space.auto};
    padding-bottom: ${theme.space.xs};
    overflow: hidden;
    border-bottom: 1px solid rgba(255,255,255, .2);

    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 84px auto;
      min-height: 80px;
      column-gap: 37px;
    }
  `,
);

const BoxImage = styled(Box)(
  ({ theme }) => css`
   margin-left: ${theme.space.xs};

   @media (min-width: ${theme.breakpoints.md}) {
    margin-left: ${theme.space.xl2};
    }
`,
);

const BoxImageRight = styled(Box)(
  ({ theme }) => css`
  right:6px;
  @media (min-width: ${theme.breakpoints.md}) {
    right:20px;
    
  }
`,
);

const BoxAwayGrid = styled(BoxHomeGrid)(
    ({ theme }) => css`
    grid-template-columns: auto 30px;
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: auto 84px;
    }
  `,
);

const BoxMatchHeaderTime = styled(Box)(
      ({ theme }) => css`
    display: inline;
    align-items: center;
    justify-content: center;
    text-align: center;
    top:0px;

    @media (min-width: ${theme.breakpoints.md}) {
      top:20px;
  }
  `,
);

   
const HomeGoals = styled(Box)(
    ({ theme }) => css`
    justify-content: flex-end;
    padding-right: ${theme.space.zero};
    margin-bottom: ${theme.space.xs};
    color: ${theme.colors.gray};
    margin-top: ${theme.space.xs};
    width: auto;
    height: auto;
    overflow: hidden;
    display: block;
    text-align: right;

    @media (min-width: ${theme.breakpoints.md}) {
      position: relative;
      margin-top: ${theme.space.zero};
    
    }
  `,
);

const AwayGoals = styled(HomeGoals)`
    justify-content: flex-start;
    text-align: left;
  `;

const MatchHeaderNumber = styled(Box)(
    ({ theme }) => css`
    background:${theme.colors.Light};
    height: 50px;
    display: flex;
    justify-content: center;
    margin: ${theme.space.auto};
    width: 46px;

    @media (min-width: ${theme.breakpoints.md}) {
      height: 52px;
      width: 130px;
    }
  `,
);

const TextStyles = styled(Text)(
    ({ theme }) => css`
    display: flex;
    font-size: ${theme.fontSizes.fxs};
    line-height: ${theme.lineHeights.lxs};
    color: ${theme.colors.Light};
    margin: ${theme.space.zero} ${theme.space.md};
    justify-content: flex-start;
    width: 100%;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.fmd};
      line-height: ${theme.lineHeights.lmd};
      letter-spacing: .5px;
   
    }
  `,
);

const HomeTitle = styled(Text)(
    ({ theme }) => css`
    width: auto;
    text-align: left;
    font-size: ${theme.fontSizes.fxs};
    font-family: ${theme.fonts[0]};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.lxs};
    color: ${theme.colors.Light};
    text-transform: uppercase;
    letter-spacing: 1px;
    overflow: hidden;

    @media (min-width: ${theme.breakpoints.md}) {
      text-align: right;
      font-size: ${theme.fontSizes.fbase};
      line-height: ${theme.lineHeights.lxl};
    }
  `,
);

const AwayTitle = styled(HomeTitle)(
 ({ theme }) => css`
 text-align: right;
    @media (min-width: ${theme.breakpoints.md}) {
      text-align: left;
      font-size: ${theme.fontSizes.fbase};
      line-height: ${theme.lineHeights.lxl};
    }
  `,
);

const PlayerName = styled(Info)(
    ({ theme }) => css`
    display: contents;
    width: auto;
    font-size: ${theme.fontSizes.fxs};
    margin-bottom: ${theme.space.xs};
    line-height: ${theme.lineHeights.lxs};
    &::after {
        content: ", " ;
        white-space: pre;
        }

        &:last-child::after {
          content: '';
        }
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.fsm};
      text-align: right;
      
    }
  `,
);


const HomeNumber = styled(Info)(
    ({ theme }) => css`
    color: ${theme.colors.Interaction};
    font-size: ${theme.fontSizes.fbase};
    font-family: ${theme.fonts[0]};
    font-weight: ${theme.fontWeights.bold};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.fxxl};
      margin: ${theme.space.zero} ${theme.space.md};
    }
  `,
);

const AwayNumber = styled(HomeNumber)``;

const SeparatorStyles = styled(Info)(
    ({ theme }) => css`
    color: ${theme.colors.Interaction};
    font-size: ${theme.fontSizes.flg};
    font-family: ${theme.fonts[2]};
    font-weight: ${theme.fontWeights.bold};
    margin: ${theme.space.zero} ${theme.space.sm};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.fxxl};
      margin: ${theme.space.zero} ${theme.space.sm};
    }
  `,
);

const TimeStyles = styled(Info)(
    ({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    font-size: ${theme.fontSizes.fsm};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.lxs};
    color: ${theme.colors.Light};
    margin: ${theme.space.zero} ${theme.space.md};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.fmd};
      letter-spacing: 0.5px;

    }
  `,
);

export {
  MatchHeaderStyles,
  TextStyles,
  BoxGrid,
  BoxTitle,
  BoxHomeGrid,
  BoxAwayGrid,
  BoxMatchHeaderTime,
  HomeTitle,
  HomeGoals,
  PlayerName,
  AwayTitle,
  AwayGoals,
  MatchHeaderNumber,
  HomeNumber,
  AwayNumber,
  SeparatorStyles,
  TimeStyles,
  MatchHeaderBoxStyles,
  BoxLeague,
  BoxImage,
  BoxImageRight,
};
