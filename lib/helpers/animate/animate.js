import styled from "styled-components";
import BaseAnimation from "./baseanimation";
import { flashAnimation } from "./Flash";
import { HeadShakeAnimation } from "./HeadShake";
import { jelloAnimation } from "./Jello";
import { PulseAnimation } from "./Pulse";
import { RubberBandAnimation } from "./RubberBand";
import { ShakeAnimation } from "./Shake";
import { SwingAnimation } from "./Swing";
import { TadaAnimation } from "./Tada";
import { WobbleAnimation } from "./Wobble";

import { bounceAnimation } from "./bounce";
import { bounceInAnimation } from "./bouncein";
import { bounceInUpAnimation } from "./bounceinup";
import { bounceInDownAnimation } from "./bounceindown";
import { bounceInLeftAnimation } from "./bounceinleft";
import { bounceInRightAnimation } from "./bounceinright";

import { bounceOutAnimation } from "./bounceOut";
import { bounceOutDownAnimation } from "./bounceOutDown";
import { bounceOutLeftAnimation } from "./bounceOutLeft";
import { bounceOutRightAnimation } from "./bounceOutRight";
import { bounceOutUpAnimation } from "./bounceOutUp";

import { FadeInAnimation } from "./fadeIn";
import { FadeInDownAnimation } from "./fadeInDown";
import { FadeInDownBigAnimation } from "./fadeInDownBig";
import { FadeInLeftAnimation } from "./fadeInLeft";
import { FadeInLeftBigAnimation } from "./fadeInLeftBig";
import { FadeInRightAnimation } from "./fadeInRight";
import { FadeInRightBigAnimation } from "./fadeInRightBig";
import { FadeInUpAnimation } from "./fadeInUp";
import { FadeInUpBigAnimation } from "./fadeInUpBig";

import { FadeOutAnimation } from "./fadeOut";
import { FadeOutDownAnimation } from "./fadeOutDown";
import { FadeOutDownBigAnimation } from "./fadeOutDownBig";
import { FadeOutLeftAnimation } from "./fadeOutLeft";
import { FadeOutLeftBigAnimation } from "./fadeOutLeftBig";
import { FadeOutRightAnimation } from "./fadeOutRight";
import { FadeOutRightBigAnimation } from "./fadeOutRightBig";
import { FadeOutUpAnimation } from "./fadeOutUp";
import { FadeOutUpBigAnimation } from "./fadeOutUpBig";

import { FlipAnimation } from "./flip";
import { FlipInXAnimation } from "./flipInX";
import { FlipInYAnimation } from "./flipInY";
import { FlipOutXAnimation } from "./flipOutX";
import { FlipOutYAnimation } from "./flipOutY";

import { LightSpeedInAnimation } from "./lightspeedIn";
import { LightSpeedOutAnimation } from "./lightspeedOut";

import { RotateInAnimation } from "./rotateIn";
import { RotateInDownLeftAnimation } from "./rotateInDownLeft";
import { RotateInDownRightAnimation } from "./rotateInDownRight";
import { RotateInUpLeftAnimation } from "./rotateInUpLeft";
import { RotateInUpRightAnimation } from "./rotateInUpRight";

import { RotateOutAnimation } from "./rotateOut";
import { RotateOutDownLeftAnimation } from "./rotateOutDownLeft";
import { RotateOutDownRightAnimation } from "./rotateOutDownRight";
import { RotateOutUpLeftAnimation } from "./rotateOutUpLeft";
import { RotateOutUpRightAnimation } from "./rotateOutUpRight";

import { SlideInDownAnimation } from "./slideInDown";
import { SlideInLeftAnimation } from "./slideInLeft";
import { SlideInRightAnimation } from "./slideInRight";
import { SlideInUpAnimation } from "./slideInUp";

import { SlideOutDownAnimation } from "./slideOutDown";
import { SlideOutLeftAnimation } from "./slideOutLeft";
import { SlideOutRightAnimation } from "./slideOutRight";
import { SlideOutUpAnimation } from "./slideOutUp";

import { HingeAnimation } from "./hinge";
import { RollInAnimation } from "./rollIn";
import { RollOutAnimation } from "./rollOut";

import { ZoomInAnimation } from "./zoomIn";
import { ZoomInDownAnimation } from "./zoomInDown";
import { ZoomInLeftAnimation } from "./zoomInLeft";
import { ZoomInRightAnimation } from "./zoomInRight";
import { ZoomInUpAnimation } from "./zoomInUp";

import { ZoomOutAnimation } from "./zoomOut";
import { ZoomOutDownAnimation } from "./zoomOutDown";
import { ZoomOutLeftAnimation } from "./zoomOutLeft";
import { ZoomOutRightAnimation } from "./zoomOutRight";
import { ZoomOutUpAnimation } from "./zoomOutUp";

const anima = {
    Bounce: bounceAnimation,
    Flash: flashAnimation,
    HeadShake: HeadShakeAnimation,
    Jello: jelloAnimation,
    Pulse: PulseAnimation,
    RubberBand: RubberBandAnimation,
    Shake: ShakeAnimation,
    Swing: SwingAnimation,
    Tada: TadaAnimation,
    Wobble: WobbleAnimation,
    BounceIn: bounceInAnimation,
    BounceInUp: bounceInUpAnimation,
    BounceInDown: bounceInDownAnimation,
    BounceInLeft: bounceInLeftAnimation,
    BounceInRight: bounceInRightAnimation,
    BounceOut: bounceOutAnimation,
    BounceOutDown: bounceOutDownAnimation,
    BounceOutLeft: bounceOutLeftAnimation,
    BounceOutRight: bounceOutRightAnimation,
    BounceOutUp: bounceOutUpAnimation,
    FadeIn: FadeInAnimation,
    FadeInDown: FadeInDownAnimation,
    FadeInDownBig: FadeInDownBigAnimation,
    FadeInLeft: FadeInLeftAnimation,
    FadeInLeftBig: FadeInLeftBigAnimation,
    FadeInRight: FadeInRightAnimation,
    FadeInRightBig: FadeInRightBigAnimation,
    FadeInUp: FadeInUpAnimation,
    FadeInUpBig: FadeInUpBigAnimation,
    FadeOut: FadeOutAnimation,
    FadeOutDown: FadeOutDownAnimation,
    FadeOutDownBig: FadeOutDownBigAnimation,
    FadeOutLeft: FadeOutLeftAnimation,
    FadeOutLeftBig: FadeOutLeftBigAnimation,
    FadeOutRight: FadeOutRightAnimation,
    FadeOutRightBig: FadeOutRightBigAnimation,
    FadeOutUp: FadeOutUpAnimation,
    FadeOutUpBig: FadeOutUpBigAnimation,
    Flip: FlipAnimation,
    FlipInX: FlipInXAnimation,
    FlipInY: FlipInYAnimation,
    FlipOutX: FlipOutXAnimation,
    FlipOutY: FlipOutYAnimation,
    LightSpeedIn: LightSpeedInAnimation,
    LightSpeedOut: LightSpeedOutAnimation,
    RotateIn: RotateInAnimation,
    RotateInDownLeft: RotateInDownLeftAnimation,
    RotateInDownRight: RotateInDownRightAnimation,
    RotateInUpLeft: RotateInUpLeftAnimation,
    RotateInUpRight: RotateInUpRightAnimation,
    RotateOut: RotateOutAnimation,
    RotateOutDownLeft: RotateOutDownLeftAnimation,
    RotateOutDownRight: RotateOutDownRightAnimation,
    RotateOutUpLeft: RotateOutUpLeftAnimation,
    RotateOutUpRight: RotateOutUpRightAnimation,
    SlideInDown: SlideInDownAnimation,
    SlideInLeft: SlideInLeftAnimation,
    SlideInRight: SlideInRightAnimation,
    SlideInUp: SlideInUpAnimation,
    SlideOutDown: SlideOutDownAnimation,
    SlideOutLeft: SlideOutLeftAnimation,
    SlideOutRight: SlideOutRightAnimation,
    SlideOutUp: SlideOutUpAnimation,
    Hinge: HingeAnimation,
    RollIn: RollInAnimation,
    RollOut: RollOutAnimation,
    ZoomIn: ZoomInAnimation,
    ZoomInDown: ZoomInDownAnimation,
    ZoomInLeft: ZoomInLeftAnimation,
    ZoomInRight: ZoomInRightAnimation,
    ZoomInUp: ZoomInUpAnimation,
    ZoomOut: ZoomOutAnimation,
    ZoomOutDown: ZoomOutDownAnimation,
    ZoomOutLeft: ZoomOutLeftAnimation,
    ZoomOutRight: ZoomOutRightAnimation,
    ZoomOutUp: ZoomOutUpAnimation,
};

const AnimationStyles = styled(BaseAnimation)`
    animation-name: ${props => (props.animation ? anima[props.animation] : anima.Flash)};
`;

export default AnimationStyles;
