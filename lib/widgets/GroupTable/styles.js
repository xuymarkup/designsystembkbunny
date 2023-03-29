import styled, { css } from "styled-components";
import { Box, Title} from "../../accessories";

import {
    TabsMatchButtonStyles,
    TabsMatchButtonActiveStyles,
    TabsMatchStyles,
    TabsMatchButtonContainerStyles,
} from "../TabsMatch/styles";


const GroupTableStyles = styled(Box)(
    ({ theme }) => css`
        width: 360px;
        height: auto;
        border-radius: 10px; 
        background: #7C072E;
        padding: ${theme.space.xl};
    `,
);

const  TextProfile = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Light};
        font-family: ${theme.fonts};
        font-weight: ${theme.fontWeights.normal};
        width: 100%;
        font-family: ${theme.fonts[1]};
        
    `,
);

const GroupsTabsStyles = styled(TabsMatchStyles)(
    ({ theme }) => css`
        background: transparent;
    `,
);

const GroupTabsContainer = styled(TabsMatchButtonContainerStyles)(
    ({ theme }) => css`
        min-width: 93px;
        margin-right: ${theme.space.md};
    `,
);

const GroupsTabsActive = styled(TabsMatchButtonActiveStyles)(
    ({ theme }) => css`
            font-weight: bold;
            height: 36px;
            background: #E53B83;
            min-width: 93px;

    `,
);

const GroupsTabs = styled(TabsMatchButtonStyles)(
    ({ theme }) => css`
        border: 1px solid #E53B83;
        font-weight: bold;
        height: 36px;
        min-width: 93px;
    `,
);

const GroupsImageContainer = styled(Box)(
    ({ theme }) => css`
        width: 324px;
        height: 324px;
        border: 1px solid #E53B83;
        border-radius: 5px;
        box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.1);
        margin: ${theme.space.lg} ${theme.space.zero};
    `,
);

const GroupsTableContainer = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        height: auto;
        border: 1px solid #E53B83;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    `,
);

export {
    GroupTableStyles, 
    TextProfile,
    GroupsTabsActive,
    GroupsTabs,
    GroupsTabsStyles,
    GroupsImageContainer,
    GroupsTableContainer,
    GroupTabsContainer,
};
