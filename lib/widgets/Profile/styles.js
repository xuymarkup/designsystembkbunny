import styled, { css } from "styled-components";
import { Anchor, Text, Icons, Box, Button } from "../../accessories";
import TUDNImage from "../../../assets/profile/background-darkmobile.png";


const ProfileStyles = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        background: #000000;
        margin: ${theme.space.zero} ${theme.space.auto};
    `,
);

const SectionStyles = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.xl};
        background: url(${TUDNImage}) no-repeat right top;

        @media (min-width: ${theme.breakpoints.lg}) {
        max-width: 1080px;
        margin: ${theme.space.zero} ${theme.space.auto};
    }
    `,
);

const TitleProfile = styled(Text)(
    ({ theme }) => css`
        font-weight: bold;
        color: ${theme.colors.green};
        font-size: ${theme.fontSizes.fmd};
        padding: ${theme.space.md};
    `,
);

const SectionsContainer = styled(Box)(
    ({ theme }) => css`
        display: block;
        @media (min-width: ${theme.breakpoints.lg}) {
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
    `,
);

const ProfileSection = styled(Box)(
    ({ theme }) => css`
        max-width: 326px;
        width: 100%;
        height: auto;
        border-radius: 10px;
        background: rgba(21, 21, 21, 0.6);
        padding: ${theme.space.base};
        margin-bottom: ${theme.space.xxl};
    `,
);

const ProfileImageContainer = styled(Box)(
    () => css`
        width: 54px;
        height: 54px;
    `,
);

const ProfileImage = styled(Box)(
    ({ theme }) => css`
        width: 54px;
        height: 54px;
        background: ${theme.colors.green};
        border-radius: 40px;
        text-align: center;
        display: flex;
        justify-content: center;
    `,
);

const NameImage = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        font-weight: bold;
        color: ${theme.colors.Secondary};
        font-size: ${theme.fontSizes.flg};
        padding: ${theme.space.md};
    `,
);

const NameContainer = styled(Box)(
    ({ theme }) => css`
        padding: ${theme.space.md};
    `,
);

const Name = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fbase};
        font-family: ${theme.fonts};
    `,
);

const TextProfile = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts};
        width: 100%;
        padding: ${theme.space.zero} ${theme.space.xl} ${theme.space.zero} ${theme.space.zero};
    `,
);

const TextAnchor = styled(Anchor)(
    ({ theme }) => css`
        color: ${theme.colors.green};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts};
        text-decoration: underline;
        margin: ${theme.space.zero} ${theme.space.auto};
        text-align: start;
        width: 100%;
    `,
);

const Coins = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        font-weight: bold;
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        padding: ${theme.space.md};
    `,
);

const ProgressLevel = styled.div(
    ({ theme }) => css`
        height: 8px;
        margin: ${theme.space.sm} ${theme.space.zero};
        width: ${props => (props.width ? props.width : 100)}%;
        position: relative;
        background: ${theme.colors.Light};
        border-radius: 5px;
    `,
);

const LevelTimeBar = styled(Box)(
    ({ theme }) => css`
        background: ${props => (props.strokecolor ? props.strokecolor : theme.colors.Interaction)};
        height: ${props => (props.stroke ? props.stroke : 4)}px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        width: ${props => (props.progress ? props.progress : 0)}%;
        border-radius: 5px;
    `,
);

const SectionsTitles = styled(Text)(
    ({ theme }) => css`
        
        font-weight: bold;
        color: ${theme.colors.green};
        font-size: ${theme.fontSizes.fxs};
        padding: ${theme.space.md};
    `,
);

const LevelsBox = styled(Box)(
    ({ theme }) => css`
        width: 70px;
        height: 90px;
        background: ${theme.colors.Light};
        border-radius: 9px;
        margin: ${theme.space.xs};
        padding:${theme.space.xs};
        opacity: 50%;
    `,
);

const LevelsBoxLlanero = styled(LevelsBox)(
    ({ theme }) => css`
        background: ${theme.colors.Interaction};
        opacity: 100%;
    `,
);

const LevelsBoxPambolero = styled(LevelsBox)(
    ({ theme }) => css`
        background: ${theme.colors.pambolero};
        opacity: 100%;
    `,
);

const IconLevelBox = styled(Box)(
    ({ theme }) => css`
        padding:${theme.space.md} ${theme.space.zero};
        display: flex;
        justify-content:center;
        align-items:center;
        
    `,
);

const TitleLevelInactive = styled(Text)(
    ({ theme }) => css`
        width: 100%;
        font-weight: bold;
        color: ${theme.colors.text};
        font-size: ${theme.fontSizes.fxs};
        text-align:center;
        line-height: ${theme.lineHeights.lxs};
    `,
);

const TitleLevel = styled(TitleLevelInactive)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
    `,
);

const ThemeContainer = styled(Box)(
    ({ theme }) => css`
        margin:${theme.space.zero} ${theme.space.xxl};
        width: 54px;
        height: 54px;
        display: flex;
    `,
);

const ThemeColor = styled(Box)(
    ({ theme }) => css`
        width: 27px;
        height: 54px;
        background: ${theme.colors.Interaction};
        border-radius: 40px 0px 0px 40px; 
    `,
);

const ThemeColorTUDN = styled(ThemeColor)(
    ({ theme }) => css`
        background: ${theme.colors.green};
        border-radius: 0px 40px 40px 0px;
    `,
);

const TextRanking = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts};
        padding: ${theme.space.zero} ${theme.space.md};
        word-spacing: 2px;
    `,
);

const Points = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.green};
        font-size: ${theme.fontSizes.fxs};
        font-family: ${theme.fonts};
    `,
);

const RankingButton = styled(Button)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxs};
        color: ${theme.colors.Light};
        justify-content: center;
        width: 150px;
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
    `,
);

const AvatarImage = styled.img(
    ({ theme }) => css`
        width: 48px;
        height: auto;
        border-radius: 10px 10px 0px 0px;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50px;
            border-radius: 10px 0px 0px 10px;
        }
    `,
);



export {
    ProfileStyles,
    SectionStyles,
    TitleProfile,
    ProfileSection,
    ProfileImageContainer,
    NameImage,
    ProfileImage,
    NameContainer,
    Name,
    TextProfile,
    TextAnchor,
    Coins,
    SectionsTitles,
    LevelsBox,
    LevelsBoxLlanero,
    LevelsBoxPambolero,
    TitleLevel,
    TitleLevelInactive,
    IconLevelBox,
    ThemeContainer,
    ThemeColor,
    ThemeColorTUDN,
    RankingButton,
    SectionsContainer,
    LevelTimeBar,
    ProgressLevel,
    TextRanking,
    Points,
    AvatarImage,
};
