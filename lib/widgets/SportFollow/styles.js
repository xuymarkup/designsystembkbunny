import styled, { css } from "styled-components";
import { Title, Box, Text, Button, Icons, Inputs, Form, Anchor } from "../../accessories";

const SportFollowStyles = styled(Box)(
    ({ theme }) => css`
        max-width: 1024px;
        margin: ${theme.space.md} auto;
        padding: ${theme.space.zero} ${theme.space.base};
    `,
);

const SportFollowCarouselBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: 100px;
        overflow: hidden;
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 70px;
        }
    `,
);

const SportFollowCarousel = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.zero} auto;
        padding: ${theme.space.zero};
        height: 105px;
        display: flex;
        overflow: scroll hidden;
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 85px;
        }
    `,
);

const ItemSeguirBox = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        height: 74px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 3px 5px #d6d6d6;
        width: auto;
        flex-direction: column;
        cursor: pointer;
        padding: ${theme.space.md} ${theme.space.md};
        margin: ${theme.space.zero} ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 50px;
            flex-direction: initial;
        }
    `,
);

const IconAdd = styled(Icons)(
    ({ theme }) => css`
        margin: ${theme.space.sm};
        width: 25px;
        height: 25px;
        fill: ${theme.colors.Dark};
        opacity: .1;
    `,
);

const IconAddActive = styled(Icons)(
    ({ theme }) => css`
        margin: ${theme.space.sm};
        width: 25px;
        height: 25px;
        fill: ${theme.colors.Interaction};
    `,
);

const ItemSeguirText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.lsm};
        }
    `,
);

const ItemEmptyBox = styled(Box)(
    ({ theme }) => css`
        height: 74px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        border: 2px dashed #DDDDDD;
        padding: ${theme.space.md} ${theme.space.md};
        margin: ${theme.space.zero} ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 50px;
            padding: ${theme.space.md} ${theme.space.xxl};
            margin: ${theme.space.zero} ${theme.space.sm};
        }
    `,
);

const IconSports = styled(Icons)(
    ({ theme }) => css`
        margin: ${theme.space.sm} ${theme.space.zero};
        width: 35px;
        height: 35px;
        fill: #DDDDDD;
    `,
);

const ItemTeamBox = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        height: 74px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 3px 5px #d6d6d6;
        width: auto;
        flex-direction: column;
        cursor: pointer;
        padding: ${theme.space.zero};
        margin: ${theme.space.zero} ${theme.space.sm};
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 50px;
            flex-direction: initial;
        }
    `,
);

const ItemTeamActiveBox = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.Interaction};
        height: 74px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 6px 10px #d6d6d6;
        width: auto;
        flex-direction: column;
        cursor: pointer;
        padding: ${theme.space.zero};
        margin: ${theme.space.zero} ${theme.space.xs};
        @media (min-width: ${theme.breakpoints.xl}) {
            height: 50px;
            flex-direction: initial;
        }
    `,
);

const ItemTeamImage = styled.img(
    ({ theme }) => css`
        width: 54px;
        height: auto;
        border-radius: 10px 10px 0px 0px;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 50px;
            border-radius: 10px 0px 0px 10px;
        }
    `,
);

const ItemTeamText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        padding-bottom: ${theme.space.xs};
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.lsm};
            padding: ${theme.space.xs} ${theme.space.sm};
        }
    `,
);

const ItemTeamActiveText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        padding-bottom: ${theme.space.xs};
        text-align: center;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.lsm};
            padding: ${theme.space.xs} ${theme.space.sm};
        }
    `,
);

const ItemLabelText = styled.span(
    ({ theme }) => css`
        color: ${theme.colors.Dark};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        padding-bottom: ${theme.space.xs};
        display: none;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.lsm};
            padding: ${theme.space.xs} ${theme.space.sm};
            display: block;
        }
    `,
);

const ItemLabelActiveText = styled.span(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        padding-bottom: ${theme.space.xs};
        display: none;
        @media (min-width: ${theme.breakpoints.xl}) {
            font-size: ${theme.fontSizes.fsm};
            line-height: ${theme.lineHeights.lsm};
            padding: ${theme.space.xs} ${theme.space.sm};
            display: block;
        }
    `,
);

const SportFollowPage = styled(Box)(
    ({ theme }) => css`
        max-width: 1180px;
        margin: ${theme.space.xs} auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @media (min-width: ${theme.breakpoints.xl}) {
            flex-direction: initial;
        }
    `,
);

const SportFollowLeft = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 60%;
            padding: ${theme.space.zero} ${theme.space.xxl};
        }
    `,
);

const SportFollowRight = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        @media (min-width: ${theme.breakpoints.xl}) {
            width: 75%;
            padding: ${theme.space.zero} ${theme.space.xxl};
        }
    `,
);

const SportSearchBox = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.xxl} auto;
    `,
);

const SportSearchForm = styled(Form)(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        margin-bottom: ${theme.space.xxl};
        background: ${theme.colors.Light};
        border: 1px solid ${theme.colors.gray2};
        border-radius: 10px;
        padding: ${theme.space.zero} ${theme.space.sm};
    `,
);

const SportSearchInput = styled(Inputs)(
    ({ theme }) => css`
        align-self: stretch;
        background: none;
        border: 0;
        box-sizing: content-box;
        color: ${theme.colors.gray};
        flex-grow: 1;
        width: 100%;
        padding: 0 0.75rem;
        margin: ${theme.space.zero};
        line-height: 1.225rem;
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        
        &::placeholder {
            color: ${theme.colors.gray4};
            opacity: 1;
        }
    `,
);

const DeleteButton = styled(Button)(
    ({ theme }) => css`
        width: 20px;
        min-width: 20px;
        margin: ${theme.space.zero};
        padding: ${theme.space.zero};
    `,
);

const SportFollowTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Interaction};
        margin: ${theme.space.zero} ${theme.space.auto};
        display: block;
        line-height: ${theme.lineHeights.lmd};
        position: relative;
        font-family: ${theme.fonts[1]};
        width: 100%;
    `,
);

const FavoritesBox = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.lg} auto ${theme.space.md};
        display: flex;
    `,
);

const ArrowsBox = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.zero} auto;
        width: 100px;
        height: 40px;
        display: none;
        @media (min-width: ${theme.breakpoints.xl}) {
            display: flex;
        }
    `,
);

const ArrowButton = styled(Button)(
    ({ theme }) => css`
        min-width: 40px;
        width: 40px;
        height: 40px;
        margin: ${theme.space.zero};
        padding: ${theme.space.zero};
    `,
);

const Arrow = styled(Icons)(
    ({ theme }) => css`
        margin: ${theme.space.zero} ${theme.space.sm};
        width: 40px;
        height: 40px;
        fill: ${theme.colors.Interaction};
    `,
);

const CleanBox = styled(Anchor)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        height: 28px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 6px 10px #d6d6d6;
        width: auto;
        cursor: pointer;
        border: 1px solid ${theme.colors.Interaction};
        padding: ${theme.space.zero} ${theme.space.md};
        margin: ${theme.space.zero};
    `,
);

const CleanText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
    `,
);

const IconClean = styled(Icons)(
    ({ theme }) => css`
        width: 22px;
        height: 22px;
        fill: ${theme.colors.Interaction};
    `,
);

const FavoritesEmptyBox = styled(Box)(
    ({ theme }) => css`
        margin: ${theme.space.lg} ${theme.space.auto} ${theme.space.xxl};
        background: ${theme.colors.Light};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 6px 10px #d6d6d6;
        width: 100%;
        padding: ${theme.space.xl} ${theme.space.md};
    `,
);

const FavoritesEmptyText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lsm};
        font-family: ${theme.fonts[0]};
    `,
);

const FavoriteItemBox = styled(Box)(
    ({ theme }) => css`
        background: ${theme.colors.Light};
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0px 6px 10px #d6d6d6;
        width: 100%;
        padding: ${theme.space.zero};
        margin: ${theme.space.lg} ${theme.space.zero};
    `,
);

const FavoriteItemImage = styled.img(
    ({ theme }) => css`
        width: 50px;
        height: auto;
        border-radius: 10px 0px 0px 10px;
    `,
);

const FavoriteItemText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lsm};
        font-family: ${theme.fonts[0]};
        width: 100%;
        text-align: left;
        padding: ${theme.space.xs} ${theme.space.base};
    `,
);

const FavoriteItemLabelText = styled.span(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        display: block;
    `,
);

const FollowingButton = styled(Button)(
    ({ theme }) => css`
        color: ${theme.colors.Light};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lsm};
        font-family: ${theme.fonts[0]};
        min-width: 90px;
        text-align: center;
        padding: ${theme.space.sm} ${theme.space.base};
        background: ${theme.colors.Interaction};
        border-radius: 10px;
        margin-right: ${theme.space.lg};
        justify-content: center;
        min-height: 35px;
    `,
);

const FollowButton = styled(Button)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        font-size: ${theme.fontSizes.fsm};
        line-height: ${theme.lineHeights.lsm};
        font-family: ${theme.fonts[0]};
        min-width: 90px;
        text-align: center;
        padding: ${theme.space.sm} ${theme.space.base};
        border-radius: 10px;
        margin-right: ${theme.space.lg};
        border: 1px solid ${theme.colors.Interaction};
        justify-content: center;
        min-height: 35px;
    `,
);

const SuggestionsCarousel = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        margin: ${theme.space.md} auto ${theme.space.xxl};
        padding: ${theme.space.zero};
        height: 185px;
        display: flex;
        overflow: scroll hidden;
    `,
);

const SuggestionItem = styled(Anchor)(
    ({ theme }) => css`
        width: 100px;
        margin: ${theme.space.zero} ${theme.space.base} ${theme.space.zero} ${theme.space.zero};
        padding: ${theme.space.zero};
        height: 150px;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        box-shadow: 0px 6px 10px #d6d6d6;
        cursor: pointer;
        position: relative;
    `,
);

const SuggestionImage = styled.img(
    ({ theme }) => css`
        width: 100px;
        height: auto;
        border-radius: 10px 10px 0px 0px;
    `,
);

const SuggestionText = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        font-size: ${theme.fontSizes.fxs};
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[0]};
        width: 100%;
        text-align: center;
        padding: ${theme.space.md};
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
);

const IconFavorite = styled(Icons)(
    ({ theme }) => css`
        width: 22px;
        height: 22px;
        fill: ${theme.colors.Light};
        position: absolute;
        top: 4px;
        right: 4px;
    `,
);

const IconFavoriteActive = styled(Icons)(
    ({ theme }) => css`
        width: 22px;
        height: 22px;
        fill: ${theme.colors.Interaction};
        position: absolute;
        top: 4px;
        right: 4px;
    `,
);

const AddButton = styled(Button)(
    ({ theme }) => css`
        width: 50px;
        min-width: 50px;
        margin: ${theme.space.zero};
        padding: ${theme.space.zero};
    `,
);


export {
    SportFollowStyles,
    SportFollowCarouselBox,
    SportFollowCarousel, 
    ItemSeguirBox,
    IconAdd,
    IconAddActive,
    ItemSeguirText,
    ItemEmptyBox,
    IconSports,
    ItemTeamBox,
    ItemTeamActiveBox,
    ItemTeamImage,
    ItemTeamText,
    ItemTeamActiveText,
    ItemLabelText,
    ItemLabelActiveText,
    SportFollowPage,
    SportFollowLeft,
    SportFollowRight,  
    SportSearchBox,
    SportSearchForm,
    SportSearchInput,
    DeleteButton,
    SportFollowTitle,
    FavoritesBox,
    ArrowsBox,
    ArrowButton,
    Arrow,
    CleanBox,
    CleanText,
    IconClean,
    FavoritesEmptyBox,
    FavoritesEmptyText,
    FavoriteItemBox,
    FavoriteItemImage,
    FavoriteItemText,
    FavoriteItemLabelText,
    FollowingButton,
    FollowButton,
    SuggestionsCarousel,
    SuggestionItem,
    SuggestionImage,
    SuggestionText,
    IconFavorite,
    IconFavoriteActive,
    AddButton,
};
