import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Time from "../../accessories/Time";

import Anchor from "../../accessories/Anchor";
import Info from "../../accessories/Info";
import Text from "../../accessories/Text";

const TickerItemStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 5px;
        cursor: pointer;
        position: relative;
        display: block;
        height: 148px;
        width: 232px;
        margin-right: ${theme.space.sm};
        background-repeat: no-repeat;
        background-image: url('https://sportdata-design.televisa.com/graphics/widgets/ticker/background.png');
    `,
);

const TickerItemTimeBoxStyles = styled(Box)(
    ({ theme }) => css`
        border-radius: 5px 5px 0px 0px;
        align-items: center;
        padding: ${theme.space.md} ${theme.space.md} ${theme.space.zero} ${theme.space.md};
        justify-content: space-between;
    `,
);

const TickerItemLeagueStyles = styled(Text)(
    ({ theme }) => css`
        color: ${theme.colors.gray3};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        font-family: ${theme.fonts[3]};
        line-height: ${theme.lineHeights.lxs};
        height: auto;
    `,
);

const TickerItemTimeStyles = styled(Time)(
    ({ theme }) => css`
        color: ${theme.colors.Interaction};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        justify-content: center;
        position: relative;
        font-family: ${theme.fonts[3]};
    `,
);


const TickerItemContainer = styled(Box)(
    ({ theme }) => css`
        display: flex;
        height: auto;
        padding: ${theme.space.md} ${theme.space.md} ${theme.space.zero} ${theme.space.md};
    `,
);

const ItemCalienteBoxStyles = styled(Anchor)(
    ({ theme }) => css`
        background: #ee0300;
        border-radius: 0px 0px 5px 5px;
        position: relative;
        display: flex;
        height: 42px;
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
    `,
);

const TickerItemTeamStyles = styled(Anchor)`
    width: 100%;
`;

const TickerItemImageStyles = styled(Box)(
    ({ theme }) => css`
        height: 24px;
        width: 24px;
        background: ${theme.colors.Light};
    `,
);

const TickerItemBoxStylesHome = styled(Box)(
    ({ theme }) => css`
        position: relative;
        padding-bottom: ${theme.space.md};
    `,
);

const TickerItemBoxStylesAway = styled(Box)(
    ({ theme }) => css`
        position: relative;
        padding-bottom: ${theme.space.sm};
    `,
);

const TickerItemTitleStyles = styled(Text)(
    ({ theme }) => css`
        align-items: center;
        color: ${theme.colors.Dark};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: normal;
        line-height: ${theme.lineHeights.lxs};
        margin-left: ${theme.space.sm};
        font-family: ${theme.fonts[3]};
    `,
);

const TickerItemScoreStyles = styled(Info)(
    ({ theme }) => css`
        align-items: center;
        color: ${theme.colors.gray3};
        display: flex;
        font-size: ${theme.fontSizes.fxs};
        font-weight: normal;
        line-height: ${theme.lineHeights.lxs};
        font-family: ${theme.fonts[3]};
    `,
);

const TickerMomiosBoxStyles = styled(Box)(
    () => css`
        height: auto;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
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
        height: 16px;
        color: ${theme.colors.Light};
        margin-bottom: ${theme.space.xs};
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

const TickerContainerLeague = styled(Box)(
    () => css`
        height: 26px;
    `,
);

const TickerContainerTime = styled(Box)(
    () => css`
        justify-content: flex-end;
        width: 100px;
    `,
);



export {
    TickerItemStyles,
    TickerItemTeamStyles,
    TickerItemBoxStylesHome,
    TickerItemBoxStylesAway,
    TickerItemImageStyles,
    TickerItemTimeStyles,
    TickerItemLeagueStyles,
    MomioStyles,
    MomiosBoxStyles,
    TickerItemTitleStyles,
    TickerMomiosBoxStyles,
    ItemCalienteBoxStyles,
    ItemCalienteImageStyles,
    TickerItemContainer,
    TickerItemScoreStyles,
    TickerItemTimeBoxStyles,
    TickerContainerLeague,
    TickerContainerTime,
    ItemCalienteTitle,
    ItemMomiosBoxStyles,
};
