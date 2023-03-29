import React from "react";
import PropTypes from "prop-types";
import AvatarImg from "../../../assets/profile/mobile-avatar.png";

import {
    ProfileStyles,
    SectionStyles,
    ProfileSection,
    ProfileImageContainer,
    NameContainer,
    NameImage,
    TitleProfile,
    ProfileImage,
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
    ProgressLevel,
    LevelTimeBar,
    TextRanking,
    Points,
    AvatarImage,
} from "./styles";
import { Box, Icons } from "../../accessories";

const Profile = props => {
    const {
        stroke,
        strokecolor,
        progress,
        Eprogress,
        width,
        LevelPam,
        Level,
        Avatar,
        title,
        dl,
        nameprofile,
        email,
        edit,
        tudncoins,
        tudncoinslevel,
        niveles,
        llanero,
        pambolero,
        clasemundial,
        legendario,
        theme,
        tudn,
        changetheme,
        deleteprofile,
        changepassword,
    } = props;

    return (
        <ProfileStyles>
            <SectionStyles variant="Transparent">
                <TitleProfile>{title}</TitleProfile>

                <SectionsContainer variant="Transparent">
                    <Box variant="Transparent">
                        <ProfileSection>
                            <Box variant="Flex">
                                {Level && (
                                    <ProfileImageContainer variant="Transparent">
                                        <ProfileImage>
                                            <NameImage>{dl}</NameImage>
                                        </ProfileImage>
                                    </ProfileImageContainer>
                                )}
                                {LevelPam && (
                                    <ProfileImageContainer variant="Transparent">
                                        <ProfileImage>
                                            <NameImage>{dl}</NameImage>
                                        </ProfileImage>
                                    </ProfileImageContainer>
                                )}
                                {Avatar && (
                                    <ProfileImageContainer variant="Transparent">
                                        <AvatarImage src={AvatarImg} aria-label="Pumas" />
                                    </ProfileImageContainer>
                                )}

                                <NameContainer variant="Transparent">
                                    <Name>{nameprofile}</Name>
                                    <Box variant="Flex">
                                        <TextProfile>{email}</TextProfile>
                                        <TextAnchor>{edit}</TextAnchor>
                                    </Box>
                                </NameContainer>
                            </Box>
                        </ProfileSection>

                        <ProfileSection>
                            <Box variant="Flex">
                                <Icons
                                    color="#079F70"
                                    name="Moneda"
                                    variant="Transparent"
                                    size={28}
                                />
                                <Coins>{tudncoins}</Coins>
                                <Icons
                                    color="#FFFFFF"
                                    name="Trofeo"
                                    variant="Transparent"
                                    size={20}
                                />
                            </Box>

                            {Level && (
                                <ProgressLevel width={width}>
                                    <LevelTimeBar
                                        stroke={stroke}
                                        strokecolor={strokecolor}
                                        progress={Eprogress}
                                    />
                                </ProgressLevel>
                            )}

                            {LevelPam && (
                                <ProgressLevel width={width}>
                                    <LevelTimeBar
                                        stroke={stroke}
                                        strokecolor={strokecolor}
                                        progress={progress}
                                    />
                                </ProgressLevel>
                            )}

                            {Avatar && (
                                <ProgressLevel width={width}>
                                    <LevelTimeBar
                                        stroke={stroke}
                                        strokecolor={strokecolor}
                                        progress={Eprogress}
                                    />
                                </ProgressLevel>
                            )}
                            <TextProfile>{tudncoinslevel}</TextProfile>
                        </ProfileSection>

                        {LevelPam && (
                            <ProfileSection>
                                <SectionsTitles>{niveles}</SectionsTitles>
                                <Box variant="Flex">
                                    <LevelsBoxLlanero>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#FFFFFF" name="Escudo" size={30} />
                                        </IconLevelBox>
                                        <TitleLevel>{llanero}</TitleLevel>
                                    </LevelsBoxLlanero>
                                    <LevelsBoxPambolero>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#FFFFFF" name="Medalla" size={30} />
                                        </IconLevelBox>
                                        <TitleLevel>{pambolero}</TitleLevel>
                                    </LevelsBoxPambolero>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Trofeo" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{clasemundial}</TitleLevelInactive>
                                    </LevelsBox>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Insignia" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{legendario}</TitleLevelInactive>
                                    </LevelsBox>
                                </Box>
                            </ProfileSection>
                        )}

                        {Level && (
                            <ProfileSection>
                                <SectionsTitles>{niveles}</SectionsTitles>
                                <Box variant="Flex">
                                    <LevelsBoxLlanero>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#FFFFFF" name="Escudo" size={30} />
                                        </IconLevelBox>
                                        <TitleLevel>{llanero}</TitleLevel>
                                    </LevelsBoxLlanero>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Medalla" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{pambolero}</TitleLevelInactive>
                                    </LevelsBox>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Trofeo" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{clasemundial}</TitleLevelInactive>
                                    </LevelsBox>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Insignia" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{legendario}</TitleLevelInactive>
                                    </LevelsBox>
                                </Box>
                            </ProfileSection>
                        )}

                        {Avatar && (
                            <ProfileSection>
                                <SectionsTitles>{niveles}</SectionsTitles>
                                <Box variant="Flex">
                                    <LevelsBoxLlanero>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#FFFFFF" name="Escudo" size={30} />
                                        </IconLevelBox>
                                        <TitleLevel>{llanero}</TitleLevel>
                                    </LevelsBoxLlanero>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Medalla" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{pambolero}</TitleLevelInactive>
                                    </LevelsBox>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Trofeo" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{clasemundial}</TitleLevelInactive>
                                    </LevelsBox>
                                    <LevelsBox>
                                        <IconLevelBox variant="Transparent">
                                            <Icons color="#079F70" name="Insignia" size={30} />
                                        </IconLevelBox>
                                        <TitleLevelInactive>{legendario}</TitleLevelInactive>
                                    </LevelsBox>
                                </Box>
                            </ProfileSection>
                        )}
                    </Box>

                    <Box variant="Transparent">
                        <ProfileSection>
                            <Box variant="Flex">
                                <SectionsTitles>{theme}</SectionsTitles>
                                <ThemeContainer variant="Transparent">
                                    <ThemeColor />
                                    <ThemeColorTUDN />
                                </ThemeContainer>
                                <Box variant="Transparent">
                                    <TextProfile>{tudn}</TextProfile>
                                    <TextAnchor>{changetheme}</TextAnchor>
                                </Box>
                            </Box>
                        </ProfileSection>

                        {LevelPam && (
                            <ProfileSection>
                                <Box variant="Flex">
                                    <Box variant="Transparent">
                                        <SectionsTitles>Ranking Quiniela</SectionsTitles>
                                        <Box variant="Flex">
                                            <TextRanking>Ranking global:</TextRanking>
                                            <Points>39</Points>
                                        </Box>
                                        <Box variant="Flex">
                                            <TextRanking>Puntos acumulados:</TextRanking>
                                            <Points>54 pts</Points>
                                        </Box>
                                    </Box>
                                    <RankingButton variant="Solid">Ir a la quiniela</RankingButton>
                                </Box>
                                <Box variant="Flex">
                                    <Box variant="Transparent">
                                        <SectionsTitles>Ranking “Ponte Fit”</SectionsTitles>
                                        <Box variant="Flex">
                                            <TextRanking> Retos completados:</TextRanking>
                                            <Points>3</Points>
                                        </Box>
                                        <Box variant="Flex">
                                            <TextRanking> Puntos acumulados:</TextRanking>
                                            <Points>15 pts</Points>
                                        </Box>
                                    </Box>
                                    <RankingButton variant="Solid">Ir a sección</RankingButton>
                                </Box>
                            </ProfileSection>
                        )}

                        {Level && (
                            <ProfileSection>
                                <Box variant="Flex">
                                    <Box variant="Transparent">
                                        <SectionsTitles>Ranking Quiniela</SectionsTitles>
                                        <TextRanking>
                                            Sin registro de puntos.Para ganar puntos Juega en la
                                            Quiniela de TUDN.
                                        </TextRanking>
                                    </Box>
                                    <RankingButton variant="Solid">Ir a la quiniela</RankingButton>
                                </Box>
                                <Box variant="Flex">
                                    <Box variant="Transparent">
                                        <SectionsTitles>Ranking “Ponte Fit”</SectionsTitles>
                                        <TextRanking>
                                            {" "}
                                            Sin registro de puntos. Para ganar puntos completa los
                                            retos de la sección
                                        </TextRanking>
                                    </Box>
                                    <RankingButton variant="Solid">Ir a sección</RankingButton>
                                </Box>
                            </ProfileSection>
                        )}

                        {Avatar && (
                            <ProfileSection>
                                <Box variant="Flex">
                                    <Box variant="Transparent">
                                        <SectionsTitles>Ranking Quiniela</SectionsTitles>
                                        <TextRanking>
                                            Sin registro de puntos.Para ganar puntos Juega en la
                                            Quiniela de TUDN.
                                        </TextRanking>
                                    </Box>
                                    <RankingButton variant="Solid">Ir a la quiniela</RankingButton>
                                </Box>
                                <Box variant="Flex">
                                    <Box variant="Transparent">
                                        <SectionsTitles>Ranking “Ponte Fit”</SectionsTitles>
                                        <TextRanking>
                                            {" "}
                                            Sin registro de puntos. Para ganar puntos completa los
                                            retos de la sección
                                        </TextRanking>
                                    </Box>
                                    <RankingButton variant="Solid">Ir a sección</RankingButton>
                                </Box>
                            </ProfileSection>
                        )}
                    </Box>

                    <Box variant="Transparent">
                        <ProfileSection>
                            <Box variant="Flex">
                                <TextAnchor>{deleteprofile}</TextAnchor>
                                <TextAnchor>{changepassword}</TextAnchor>
                            </Box>
                        </ProfileSection>
                    </Box>
                </SectionsContainer>
            </SectionStyles>
        </ProfileStyles>
    );
};

Profile.propTypes = {
    stroke: PropTypes.number,
    strokecolor: PropTypes.string,
    progress: PropTypes.number,
    Eprogress: PropTypes.number,
    width: PropTypes.number,
    LevelPam: PropTypes.bool,
    Level: PropTypes.bool,
    Avatar: PropTypes.bool,
    title: PropTypes.string,
    dl: PropTypes.string,
    nameprofile: PropTypes.string,
    email: PropTypes.string,
    edit: PropTypes.string,
    tudncoins: PropTypes.string,
    tudncoinslevel: PropTypes.string,
    niveles: PropTypes.string,
    llanero: PropTypes.string,
    pambolero: PropTypes.string,
    clasemundial: PropTypes.string,
    legendario: PropTypes.string,
    theme: PropTypes.string,
    tudn: PropTypes.string,
    changetheme: PropTypes.string,
    deleteprofile: PropTypes.string,
    changepassword: PropTypes.string,
};
Profile.defaultProps = {
    stroke: 8,
    strokecolor: "",
    progress: 30,
    Eprogress: 0,
    width: 100,
    LevelPam: false,
    Level: false,
    Avatar: false,
    title: "Mi perfil",
    dl: "DL",
    nameprofile: "Daniel Lopez",
    email: "daniel.lopez@gmail.com",
    edit: "Editar",
    tudncoins: "3000 TUDNCoins",
    tudncoinslevel: "Te faltan 6000 TUDNCoins para subir al siguiente nivel.",
    niveles: "Niveles",
    llanero: "Llanero",
    pambolero: "Pambolero",
    clasemundial: "Clase Mundial",
    legendario: "Legendario",
    theme: "Tema",
    tudn: "TUDN.",
    changetheme: "Cambiar Tema",
    deleteprofile: "Eliminar tu perfil",
    changepassword: "Cambiar tu contraseña",
};

export default Profile;
