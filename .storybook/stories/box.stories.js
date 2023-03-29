import React from "react";
import styled, { css } from "styled-components";

import { Title, Box, Text } from "accessories";

export default {
    title: "Desing System/Atoms/Box",
};

const BoxContainer = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin: auto;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxDescription = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-top: ${theme.space.lg};
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxSection = styled(Box)(
    ({ theme }) => css`
        width: 100%;
        display: block;
        position: relative;
        margin-bottom: ${theme.space.xxl};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxTitle = styled(Title)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fxl2};
        color: ${theme.colors.Dark};
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        padding-bottom: ${theme.space.lg};
    `,
);

const BoxCaption = styled(Text)(
    ({ theme }) => css`
        padding-left: ${theme.space.lg};
        padding-right: ${theme.space.lg};
        font-size: ${theme.fontSizes.fsm};
        color: ${theme.colors.Dark};
        line-height: ${theme.lineHeights.llg};
    `,
);

const BoxContent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        padding-left: ${theme.space.lg};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 1024px;
        }
    `,
);

const BoxType = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 150px;
        height: 100px;
        background-color: ${theme.colors.Dark};
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 600px;
        }
    `,
);

const BoxTransparent = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        max-width: 150px;
        height: 100px;
        border: 1px #cccccc solid;
        @media (min-width: ${theme.breakpoints.xl}) {
            max-width: 600px;
        }
    `,
);

const SubTitleBox = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Light};
        padding: ${theme.space.lg};
    `,
);

const SubTitleTransparent = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fmd};
        color: ${theme.colors.Dark};
        padding: ${theme.space.lg};
    `,
);

const SubTitleText = styled(Text)(
    ({ theme }) => css`
        font-size: ${theme.fontSizes.fbase};
        font-weight: ${theme.fontWeights.bold};
        color: ${theme.colors.graycataloge};
        padding-bottom: ${theme.space.base};
    `,
);

const BoxText = styled(Text)(
    ({ theme }) => css`
        line-height: ${theme.lineHeights.llg};
        font-size: ${theme.fontSizes.fsm};
    `,
);
const BoxStyle = styled(Box)(
    ({ theme }) => css`
        display: block;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: ${theme.space.xxl};
        margin-top: ${theme.space.xxl};
    `,
);

export const BOX = args => {
    return (
        <BoxContainer variant="Transparent">
            <BoxDescription variant="Transparent">
                <BoxTitle variant="h2">Box</BoxTitle>
                <BoxCaption>
                    The Box is an element, which can be modified by yourself as you need.
                </BoxCaption>
            </BoxDescription>
            <BoxContent variant="Transparent">
                <BoxStyle variant="Transparent">
                    <BoxSection variant="Transparent">
                        <SubTitleText variant="h2">Box Solid</SubTitleText>
                        <BoxText>Box with background color.</BoxText>
                    </BoxSection>
                    <BoxType variant="Solid">
                        <SubTitleBox>Solid</SubTitleBox>
                    </BoxType>
                </BoxStyle>
                <BoxStyle variant="Transparent">
                    <BoxDescription variant="Transparent">
                        <SubTitleText variant="h2">Box Space</SubTitleText>
                        <BoxText>Box with 15px margin.</BoxText>
                    </BoxDescription>
                    <BoxType variant="Space">
                        <SubTitleBox>Space</SubTitleBox>
                    </BoxType>
                </BoxStyle>
                <BoxStyle variant="Transparent">
                    <BoxDescription variant="Transparent">
                        <SubTitleText variant="h2">Box Transparent</SubTitleText>
                        <BoxText>Box without background color.</BoxText>
                    </BoxDescription>
                    <BoxTransparent variant="Transparent">
                        <SubTitleTransparent>Transparent</SubTitleTransparent>
                    </BoxTransparent>
                </BoxStyle>
                <BoxStyle variant="Transparent">
                    <BoxDescription variant="Transparent">
                        <SubTitleText variant="h2">Box Flex</SubTitleText>
                        <BoxText>Wrapper to combine the elements in one single row.</BoxText>
                    </BoxDescription>
                    <Box variant="Flex">
                        <BoxType variant="Solid">
                            <SubTitleBox>Flex</SubTitleBox>
                        </BoxType>
                        <BoxTransparent variant="Tranparent">
                            <SubTitleTransparent>Flex</SubTitleTransparent>
                        </BoxTransparent>
                    </Box>
                </BoxStyle>
            </BoxContent>
        </BoxContainer>
    );
};
BOX.args = {
    children: "Solid",
    variant: "Solid",
};
BOX.argTypes = {
    children: { 
        description: "Node",
        control: {
            type: "text",
        },
        table: {
            defaultValue: {
                summary: "null",
            },
        },
     },
    variant: {
        description: "Variants",
        control: {
            type: "select",
            options: ["Solid", "Space", "Transparent", "Flex"],
        },
        table: {
            defaultValue: {
                summary: "Solid",
            },
        },
    },
};
