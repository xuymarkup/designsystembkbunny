import PropTypes from "prop-types";

import BaseAnimation from "./baseanimation";
import Flash from "./Flash";
import HeadShake from "./HeadShake";
import Jello from "./Jello";
import Pulse from "./Pulse";
import RubberBand from "./RubberBand";
import Shake from "./Shake";
import Swing from "./Swing";
import Tada from "./Tada";
import Wobble from "./Wobble";

import Bounce from "./bounce";
import BounceIn from "./bouncein";
import BounceInUp from "./bounceinup";
import BounceInDown from "./bounceindown";
import BounceInLeft from "./bounceinleft";
import BounceInRight from "./bounceinright";

import BounceOut from "./bounceOut";
import BounceOutDown from "./bounceOutDown";
import BounceOutLeft from "./bounceOutLeft";
import BounceOutRight from "./bounceOutRight";
import BounceOutUp from "./bounceOutUp";

import FadeIn from "./fadeIn";
import FadeInDown from "./fadeInDown";
import FadeInDownBig from "./fadeInDownBig";
import FadeInLeft from "./fadeInLeft";
import FadeInLeftBig from "./fadeInLeftBig";
import FadeInRight from "./fadeInRight";
import FadeInRightBig from "./fadeInRightBig";
import FadeInUp from "./fadeInUp";
import FadeInUpBig from "./fadeInUpBig";

import FadeOut from "./fadeOut";
import FadeOutDown from "./fadeOutDown";
import FadeOutDownBig from "./fadeOutDownBig";
import FadeOutLeft from "./fadeOutLeft";
import FadeOutLeftBig from "./fadeOutLeftBig";
import FadeOutRight from "./fadeOutRight";
import FadeOutRightBig from "./fadeOutRightBig";
import FadeOutUp from "./fadeOutUp";
import FadeOutUpBig from "./fadeOutUpBig";

import Flip from "./flip";
import FlipInX from "./flipInX";
import FlipInY from "./flipInY";
import FlipOutX from "./flipOutX";
import FlipOutY from "./flipOutY";

import LightSpeedIn from "./lightspeedIn";
import LightSpeedOut from "./lightspeedOut";

import RotateIn from "./rotateIn";
import RotateInDownLeft from "./rotateInDownLeft";
import RotateInDownRight from "./rotateInDownRight";
import RotateInUpLeft from "./rotateInUpLeft";
import RotateInUpRight from "./rotateInUpRight";

import RotateOut from "./rotateOut";
import RotateOutDownLeft from "./rotateOutDownLeft";
import RotateOutDownRight from "./rotateOutDownRight";
import RotateOutUpLeft from "./rotateOutUpLeft";
import RotateOutUpRight from "./rotateOutUpRight";

import SlideInDown from "./slideInDown";
import SlideInLeft from "./slideInLeft";
import SlideInRight from "./slideInRight";
import SlideInUp from "./slideInUp";

import SlideOutDown from "./slideOutDown";
import SlideOutLeft from "./slideOutLeft";
import SlideOutRight from "./slideOutRight";
import SlideOutUp from "./slideOutUp";

import Hinge from "./hinge";
import RollIn from "./rollIn";
import RollOut from "./rollOut";

import ZoomIn from "./zoomIn";
import ZoomInDown from "./zoomInDown";
import ZoomInLeft from "./zoomInLeft";
import ZoomInRight from "./zoomInRight";
import ZoomInUp from "./zoomInUp";

import ZoomOut from "./zoomOut";
import ZoomOutDown from "./zoomOutDown";
import ZoomOutLeft from "./zoomOutLeft";
import ZoomOutRight from "./zoomOutRight";
import ZoomOutUp from "./zoomOutUp";

import AnimationStyles from "./animate";

const Animate = props => {
    const { children } = props;
    return <AnimationStyles {...props}>{children}</AnimationStyles>;
};

export {
    Bounce,
    Flash,
    HeadShake,
    Jello,
    Pulse,
    RubberBand,
    Shake,
    Swing,
    Tada,
    Wobble,
    BounceIn,
    BounceInUp,
    BounceInDown,
    BounceInLeft,
    BounceInRight,
    BounceOut,
    BounceOutDown,
    BounceOutLeft,
    BounceOutRight,
    BounceOutUp,
    FadeIn,
    FadeInDown,
    FadeInDownBig,
    FadeInLeft,
    FadeInLeftBig,
    FadeInRight,
    FadeInRightBig,
    FadeInUp,
    FadeInUpBig,
    FadeOut,
    FadeOutDown,
    FadeOutDownBig,
    FadeOutLeft,
    FadeOutLeftBig,
    FadeOutRight,
    FadeOutRightBig,
    FadeOutUp,
    FadeOutUpBig,
    Flip,
    FlipInX,
    FlipInY,
    FlipOutX,
    FlipOutY,
    LightSpeedIn,
    LightSpeedOut,
    RotateIn,
    RotateInDownLeft,
    RotateInDownRight,
    RotateInUpLeft,
    RotateInUpRight,
    RotateOut,
    RotateOutDownLeft,
    RotateOutDownRight,
    RotateOutUpLeft,
    RotateOutUpRight,
    SlideInDown,
    SlideInLeft,
    SlideInRight,
    SlideInUp,
    SlideOutDown,
    SlideOutLeft,
    SlideOutRight,
    SlideOutUp,
    Hinge,
    RollIn,
    RollOut,
    ZoomIn,
    ZoomInDown,
    ZoomInLeft,
    ZoomInRight,
    ZoomInUp,
    ZoomOut,
    ZoomOutDown,
    ZoomOutLeft,
    ZoomOutRight,
    ZoomOutUp,
    BaseAnimation,
};
Animate.propTypes = {
    children: PropTypes.node,
    animation: PropTypes.string,
    duration: PropTypes.string,
    timingFunction: PropTypes.string,
    delay: PropTypes.string,
    iterationCount: PropTypes.string,
    direction: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string,
    display: PropTypes.string,
};
Animate.defaultProps = {
    duration: "1s",
    animation: "",
    timingFunction: "ease",
    delay: "0s",
    iterationCount: "1",
    direction: "normal",
    fillMode: "both",
    playState: "running",
    display: "block",
};
export default Animate;
