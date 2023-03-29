import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../accessories/Button";
import Icon from "../../accessories/Icons";
import Box from "../../accessories/Box";
import { 
  CommentaryTitle, 
  CommentaryContainerStyles, 
  BoxCommentaryTitle,
  TitleCommentaryStyles, 
} from "./styles";
import {
  SquadBoxScroll,
} from "../../widgets/Squad/styles";
import {
  CommentaryStyles,
  CommentaryTitleStyles,
  CommentaryPlaceStyles,
  CommentaryBoxStyles,
  CommentaryBoxIcon,
  CommentaryBoxImage,
  CommentaryBoxCaption,
  CommentaryTextStyles,
  CommentaryDescriptionStyles,
} from "../../items/CommentaryItem/styles";

const Commentary = props => {
  const { ratio, src, matches } = props;
  return (
    <Box variant="Transparent">
    <CommentaryTitle variant="h2">Minuto a minuto</CommentaryTitle>
    <CommentaryContainerStyles>
        <BoxCommentaryTitle variant="Flex">
          <TitleCommentaryStyles>Acciones</TitleCommentaryStyles>
        </BoxCommentaryTitle>
        <SquadBoxScroll variant="Transparent">
        {matches.map(match => {
          return (
              <Fragment key={match.id}>
                <CommentaryStyles variant="Transparent">
                  <CommentaryBoxStyles variant="Flex">
                    <CommentaryBoxIcon variant="Transparent">
                      <Icon name={match.icon} variant="Transparent" />
                    </CommentaryBoxIcon>
                    <CommentaryTextStyles>{match.event}</CommentaryTextStyles>
                      <CommentaryTitleStyles variant="h3">
                        {match.status}
                      </CommentaryTitleStyles>                   
                    <CommentaryBoxImage variant="Transparent">
                      <CommentaryPlaceStyles icon={false} ratio={ratio} src={src} />
                    </CommentaryBoxImage>
                  </CommentaryBoxStyles>
                  <CommentaryBoxCaption variant="Solid">
                    <CommentaryDescriptionStyles>{match.description}</CommentaryDescriptionStyles>
                  </CommentaryBoxCaption>
                </CommentaryStyles>
              </Fragment>
          );
        })}
        </SquadBoxScroll>
    </CommentaryContainerStyles>
    </Box>
  );
};

Commentary.propTypes = {
  src: PropTypes.shape({}),
  ratio: PropTypes.string,
  matches: PropTypes.arrayOf(PropTypes.shape({})),
};

Commentary.defaultProps = {
  src: {},
  ratio: "aspect1x1",
  matches: [],
};

export default Commentary;
