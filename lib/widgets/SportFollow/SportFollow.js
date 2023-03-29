import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Icons } from "../../accessories";
import Team01 from "../../../assets/sports-follow/img-sports-follow-1-158x158.png";
import Event01 from "../../../assets/sports-follow/img-sports-follow-2-158x158.png";

import {
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
} from "./styles";
import Box from "../../accessories/Box/styles";

const SportFollow = props => {
    const { SFActive, SFEmpty, SFPageActive, SFPageEmpty } = props;

    return (
        <SportFollowStyles variant="Transparent">
            {SFEmpty && (
                <SportFollowCarouselBox variant="Transparent">
                    <SportFollowCarousel variant="Transparent">
                        <ItemSeguirBox>
                            <IconAdd name="Star" variant="Transparent" />
                            <ItemSeguirText>Favoritos</ItemSeguirText>
                        </ItemSeguirBox>
                        <ItemEmptyBox variant="Transparent">
                            <IconSports name="Sports" variant="Transparent" />
                        </ItemEmptyBox>
                        <ItemEmptyBox variant="Transparent">
                            <IconSports name="Sports" variant="Transparent" />
                        </ItemEmptyBox>
                        <ItemEmptyBox variant="Transparent">
                            <IconSports name="Sports" variant="Transparent" />
                        </ItemEmptyBox>
                        <ItemEmptyBox variant="Transparent">
                            <IconSports name="Sports" variant="Transparent" />
                        </ItemEmptyBox>
                    </SportFollowCarousel>
                </SportFollowCarouselBox>
            )}
            {SFActive && (
                <SportFollowCarouselBox variant="Transparent">
                    <SportFollowCarousel variant="Transparent">
                        <ItemSeguirBox>
                            <IconAddActive name="Star" variant="Transparent" />
                            <ItemSeguirText>Favoritos</ItemSeguirText>
                        </ItemSeguirBox>
                        <ItemTeamBox>
                            <ItemTeamImage src={Team01} aria-label="Pumas" />
                            <ItemTeamText>
                                PUM
                                <ItemLabelText>Equipo</ItemLabelText>
                            </ItemTeamText>
                        </ItemTeamBox>
                        <ItemTeamBox>
                            <ItemTeamImage src={Event01} aria-label="Champions" />
                            <ItemTeamText>
                                UCL
                                <ItemLabelText>Evento</ItemLabelText>
                            </ItemTeamText>
                        </ItemTeamBox>
                        <ItemTeamBox>
                            <ItemTeamImage src={Team01} aria-label="Pumas" />
                            <ItemTeamText>
                                PUM
                                <ItemLabelText>Equipo</ItemLabelText>
                            </ItemTeamText>
                        </ItemTeamBox>
                        <ItemTeamActiveBox>
                            <ItemTeamImage src={Event01} aria-label="Champions" />
                            <ItemTeamActiveText>
                                UCL
                                <ItemLabelActiveText>Evento</ItemLabelActiveText>
                            </ItemTeamActiveText>
                        </ItemTeamActiveBox>
                    </SportFollowCarousel>
                </SportFollowCarouselBox>
            )}
            {SFPageEmpty && (
                <SportFollowPage variant="Transparent">
                    <SportFollowLeft variant="Transparent">
                        <SportSearchBox variant="Transparent">
                            <SportSearchForm>
                                <SportSearchInput
                                    placeholder="Buscar torneo, equipo o deporte"
                                    inputWidth="100%"
                                    iconcolor="#AFAFAF"
                                    iconsize={25}
                                />
                                <DeleteButton variant="Transparent">
                                    <Icons
                                        color="#60676C"
                                        name="Close"
                                        size={20}
                                        variant="Transparent"
                                    />
                                </DeleteButton>
                            </SportSearchForm>
                            <SportFollowTitle variant="h2">Resultados</SportFollowTitle>
                            <FavoritesEmptyBox>
                                <FavoritesEmptyText>
                                    No existen resultados para tu búsqueda
                                </FavoritesEmptyText>
                            </FavoritesEmptyBox>
                        </SportSearchBox>
                        <FavoritesBox variant="Transparent">
                            <SportFollowTitle variant="h2">Favoritos</SportFollowTitle>
                        </FavoritesBox>
                        <FavoritesEmptyBox>
                            <FavoritesEmptyText>Aún no tienes favoritos</FavoritesEmptyText>
                        </FavoritesEmptyBox>
                    </SportFollowLeft>
                    <Box variant="Transparent">
                    <SportFollowRight variant="Transparent">
                        <FavoritesBox variant="Transparent">
                            <SportFollowTitle variant="h2">Equipos sugeridos</SportFollowTitle>
                            <ArrowsBox variant="Transparent">
                                <ArrowButton variant="Transparent">
                                    <Arrow name="ArrowLeft" variant="Transparent" />
                                </ArrowButton>
                                <ArrowButton variant="Transparent">
                                    <Arrow name="ArrowRight" variant="Transparent" />
                                </ArrowButton>
                            </ArrowsBox>
                        </FavoritesBox>
                        <SuggestionsCarousel variant="Transparent">
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavoriteActive name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                        </SuggestionsCarousel>
                    </SportFollowRight>
                    <SportFollowRight variant="Transparent">
                        <FavoritesBox variant="Transparent">
                            <SportFollowTitle variant="h2">Torneos Sugeridos</SportFollowTitle>
                        </FavoritesBox>
                        <SuggestionsCarousel variant="Transparent">
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavoriteActive name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                        </SuggestionsCarousel>
                    </SportFollowRight>
                    <SportFollowRight variant="Transparent">
                        <FavoritesBox variant="Transparent">
                            <SportFollowTitle variant="h2">Deportes Sugeridos</SportFollowTitle>
                        </FavoritesBox>
                        <SuggestionsCarousel variant="Transparent">
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavoriteActive name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                        </SuggestionsCarousel>
                    </SportFollowRight>
                    </Box>
                </SportFollowPage>
            )}
            {SFPageActive && (
                <SportFollowPage variant="Transparent">
                    <SportFollowLeft variant="Transparent">
                        <SportSearchBox variant="Transparent">
                            <SportSearchForm>
                                <SportSearchInput
                                    placeholder="Buscar torneo, equipo o deporte"
                                    inputWidth="100%"
                                    iconcolor="#AFAFAF"
                                    iconsize={25}
                                />
                                <DeleteButton variant="Transparent">
                                    <Icons
                                        color="#60676C"
                                        name="Close"
                                        size={20}
                                        variant="Transparent"
                                    />
                                </DeleteButton>
                            </SportSearchForm>
                            <FavoritesBox variant="Transparent">
                                <SportFollowTitle variant="h2">Resultados</SportFollowTitle>
                            </FavoritesBox>
                            <FavoriteItemBox>
                                <FavoriteItemImage src={Team01} aria-label="Pumas" />
                                <FavoriteItemText>
                                    PUMAS
                                    <FavoriteItemLabelText>Equipo</FavoriteItemLabelText>
                                </FavoriteItemText>
                                <AddButton variant="Transparent">
                                    <IconAdd name="Star" variant="Transparent" />
                                </AddButton>
                            </FavoriteItemBox>
                            <FavoriteItemBox>
                                <FavoriteItemImage src={Event01} aria-label="Champions" />
                                <FavoriteItemText>
                                    CHAMPIONS
                                    <FavoriteItemLabelText>Evento</FavoriteItemLabelText>
                                </FavoriteItemText>
                                <AddButton variant="Transparent">
                                    <IconAdd name="Star" variant="Transparent" />
                                </AddButton>
                            </FavoriteItemBox>
                        </SportSearchBox>
                        <FavoritesBox variant="Transparent">
                            <SportFollowTitle variant="h2">Favoritos</SportFollowTitle>
                            <CleanBox>
                                <IconClean name="Elimiar" variant="Transparent" />
                                <CleanText>Limpiar</CleanText>
                            </CleanBox>
                        </FavoritesBox>
                        <FavoriteItemBox>
                            <FavoriteItemImage src={Team01} aria-label="Pumas" />
                            <FavoriteItemText>
                                PUMAS
                                <FavoriteItemLabelText>Equipo</FavoriteItemLabelText>
                            </FavoriteItemText>
                            <AddButton variant="Transparent">
                                <IconAddActive name="Star" variant="Transparent" />
                            </AddButton>
                        </FavoriteItemBox>
                        <FavoriteItemBox>
                            <FavoriteItemImage src={Event01} aria-label="Champions" />
                            <FavoriteItemText>
                                CHAMPIONS
                                <FavoriteItemLabelText>Evento</FavoriteItemLabelText>
                            </FavoriteItemText>
                            <AddButton variant="Transparent">
                                <IconAddActive name="Star" variant="Transparent" />
                            </AddButton>
                        </FavoriteItemBox>
                    </SportFollowLeft>
                    <SportFollowRight variant="Transparent">
                        <FavoritesBox variant="Transparent">
                            <SportFollowTitle variant="h2">Equipos sugeridos</SportFollowTitle>
                            <ArrowsBox variant="Transparent">
                                <ArrowButton variant="Transparent">
                                    <Arrow name="ArrowLeft" variant="Transparent" />
                                </ArrowButton>
                                <ArrowButton variant="Transparent">
                                    <Arrow name="ArrowRight" variant="Transparent" />
                                </ArrowButton>
                            </ArrowsBox>
                        </FavoritesBox>
                        <SuggestionsCarousel variant="Transparent">
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavoriteActive name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Team01} aria-label="Pumas" />
                                <SuggestionText>PUMAS</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                            <SuggestionItem>
                                <SuggestionImage src={Event01} aria-label="Champions" />
                                <SuggestionText>CHAMPIONS LEAGUE</SuggestionText>
                                <IconFavorite name="Star" variant="Transparent" />
                            </SuggestionItem>
                        </SuggestionsCarousel>
                    </SportFollowRight>
                </SportFollowPage>
            )}
        </SportFollowStyles>
    );
};

SportFollow.propTypes = {
    SFActive: PropTypes.bool,
    SFEmpty: PropTypes.bool,
    SFPageActive: PropTypes.bool,
    SFPageEmpty: PropTypes.bool,
};
SportFollow.defaultProps = {
    SFEmpty: false,
    SFActive: false,
    SFPageActive: false,
    SFPageEmpty: false,
};

export default SportFollow;
