import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    EnhancementVideoStyles,
    BoxTextStyles,
    EnhancementVideoText,
    BoxVideoIcon,
    VideoIconsStyles,
    VideoPlayer,
    VideoButton,
} from "./styles";
import { Image, Placeholder } from "../../accessories";

const EnhancementVideo = props => {
    const [play, setPlay] = useState(false);
    const onClickPlay = () => {
        setPlay(true);
    };
    const { src, size, title, icon, mcpId, verticalPlayer } = props;
    const RATIO = verticalPlayer ? "aspect9x16" : "aspect16x9";
    return (
        <EnhancementVideoStyles variant="Transparent" vertical={verticalPlayer}>
            <Placeholder ratio={RATIO} icon={false}>
                {play ? (
                    <VideoPlayer>
                        {/* <Video
                            mcpId={mcpId}
                            idPlayer={`enhancement-${mcpId}`}
                            key={`enhancement-${mcpId}`}
                            playerConfig={uiConfig.playerConfig}
                            isPlay={play}
                            autoplay={play}
                        /> Se descomenta en la ui */}
                    </VideoPlayer>
                ) : (
                    <VideoButton variant="Transparent" onClick={() => onClickPlay()}>
                        <BoxVideoIcon variant="Transparent">
                            <VideoIconsStyles name={icon} size={size} />
                        </BoxVideoIcon>
                        <Image alt="Enhancement" src={src} ratio={RATIO} />
                    </VideoButton>
                )}
            </Placeholder>
            <BoxTextStyles variant="Transparent">
                <EnhancementVideoText>{title}</EnhancementVideoText>
            </BoxTextStyles>
        </EnhancementVideoStyles>
    );
};

EnhancementVideo.propTypes = {
    mcpId: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.number,
    ratio: PropTypes.string,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
    verticalPlayer: PropTypes.bool,
};

EnhancementVideo.defaultProps = {
    mcpId: "",
    title: "",
    icon: "Video",
    size: 50,
    ratio: "aspect9x16",
    src: {
        desktop: {},
        mobile: {},
    },
    verticalPlayer: false,
};

export default EnhancementVideo;
