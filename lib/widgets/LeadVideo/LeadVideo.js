import { useState } from "react";
import PropTypes from "prop-types";
import LeadVideoStyles from "./styles";
import {
    BoxVideoIcon,
    VideoIconsStyles,
    VideoPlayer,
    VideoButton,
} from "../EnhancementVideo/styles";
import { Image, Placeholder } from "../../accessories";

const LeadVideo = props => {
    const [play, setPlay] = useState(false);
    const onClickPlay = () => {
        setPlay(true);
    };
    const { src, ratio, size, icon, mcpId, verticalPlayer, mt } = props;
    const RATIO = verticalPlayer ? "aspect9x16" : "aspect16x9";
    return (
        <LeadVideoStyles variant="Transparent" mt={mt}>
            <Placeholder ratio={RATIO} icon={false}>
                {play ? (
                    <VideoPlayer>
                        {/* <Video
                    mcpId={mcpId}
                    idPlayer={`enhancement-${mcpId}`}
                    key={`enhancement-${mcpId}`}
                    playerConfig={uiConfig.playerConfig}
                /> Se descomenta en la ui */}
                    </VideoPlayer>
                ) : (
                    <VideoButton variant="Transparent" onClick={() => onClickPlay()}>
                        <BoxVideoIcon variant="Transparent">
                            <VideoIconsStyles name={icon} size={size} />
                        </BoxVideoIcon>
                        <Image alt="Lead" src={src} ratio={ratio} />
                    </VideoButton>
                )}
            </Placeholder>
        </LeadVideoStyles>
    );
};

LeadVideo.propTypes = {
    mcpId: PropTypes.string,
    title: PropTypes.string,
    src: PropTypes.shape({
        desktop: PropTypes.shape({}),
        mobile: PropTypes.shape({
            srcSet: PropTypes.string.isRequired,
            width: PropTypes.number.isRequired,
            height: PropTypes.number.isRequired,
        }),
    }),
    ratio: PropTypes.string,
    size: PropTypes.number,
    icon: PropTypes.string,
    mt: PropTypes.string,
};

LeadVideo.defaultProps = {
    mcpId: "",
    title: "",
    src: {
        desktop: {},
        mobile: {},
    },
    ratio: "aspect16x9",
    size: 10,
    icon: "Video",
    mt: "xl3",
};

export default LeadVideo;
