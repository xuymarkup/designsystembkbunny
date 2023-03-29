import styled, { css } from "styled-components";
import Box from "../../accessories/Box";
import Title from "../../accessories/Title";
import Anchor from "../../accessories/Anchor";

const ItemLeagueStyles = styled(Anchor)(
    ({ theme }) => css`
    align-items: center;
    background: ${theme.colors.gray2};
    border-radius: 4px;
    display: flex;
    filter: grayscale(95%);
    height: 48px;
    cursor: pointer;
    min-width: 140px;
    margin-right: ${theme.space.sm};
    position: relative;
    width: 140px;

    &:active {
      color: ${theme.colors.Interaction};
      filter: none;
      border: solid 1px ${theme.colors.Interaction};
    }

    &:hover {
      filter: none;
    }
  `,
);

const ItemLeagueImageStyles = styled(Box)(
    ({ theme }) => css`
    display: flex;
    margin-left: ${theme.space.sm};
    width: 48px;
    height: 48px;
    background: transparent;
  `,
);

const ItemLeagueTitleStyles = styled(Title)(
    ({ theme }) => css`
    justify-content: center;
    display: flex;
    font-size: ${theme.fontSizes.fxs};
    color: ${theme.colors.Dark};
    text-align: center;
    line-height: ${theme.lineHeights.lxs};
    font-weight: normal;
    margin-right: ${theme.space.sm};
    width: 100%;

    &:active {
      color: ${theme.colors.Interaction};
    }
  `,
);

export { ItemLeagueStyles, ItemLeagueImageStyles, ItemLeagueTitleStyles };
