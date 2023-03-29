import React from "react";
import { Title, Box, Text } from "accessories";
import Animate, {
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
    BounceInDown,
    BounceInUp,
    BounceInRight,
    BounceInLeft,
    BounceOut,
    BounceOutDown,
    BounceOutLeft,
    BounceOutRight,
    BounceOutUp,
    FadeIn,
    FadeInDown,
    FadeInLeft,
    FadeInRight,
    FadeInUp,
    FadeOut,
    FadeOutDown,
    FadeOutLeft,
    FadeOutRight,
    FadeOutUp,
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
} from "../../lib/helpers/animate";

export default {
    title: "Desing System/Atoms/Animate",
    decorators: [
        Story => (
            <div style={{ margin: "3em" }}>
                <Title>animaciones</Title>
                <Story />
            </div>
        ),
    ],
};
export const ANIMATE = args => {
    return (
        <Box>
            <Animate {...args}>
                <Box variant="Flex" p="lg" color="Success" align="center">
                    <Text size="lg">Animate</Text>
                </Box>
            </Animate>
        </Box>
    );
};
ANIMATE.args = {
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

ANIMATE.argTypes = {
    duration: {
        description: "String of Animation duration in seconds",
        table: {
            defaultValue: {
                summary: "1s",
            },
        },
        control: {
            type: "text",
        },
    },
    timingFunction: {
        description: "Specifies the speed curve of the animation",
        table: {
            defaultValue: {
                summary: "ease",
            },
        },
        control: {
            type: "text",
        },
    },
    delay: {
        description: "Specifies a delay for the start of an animation in seconds",
        table: {
            defaultValue: {
                summary: "0s",
            },
        },
        control: {
            type: "text",
        },
    },
    direction: {
        description: "Specifies how long time an animation should take to complete one cycle",
        table: {
            defaultValue: {
                summary: "normal",
            },
        },
        control: {
            type: "text",
        },
    },
    fillMode: {
        description:
            "Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)",
        table: {
            defaultValue: {
                summary: "both",
            },
        },
        control: {
            type: "text",
        },
    },
    display: {
        description: "The dislay of teh wrapper div",
        table: {
            defaultValue: {
                summary: "block",
            },
        },
        control: {
            type: "text",
        },
    },
    playState: {
        description: "State of animation",
        table: {
            defaultValue: {
                summary: "running",
            },
        },
        control: {
            type: "select",
            options: ["running", "paused"],
        },
    },
    iterationCount: {
        description:
            "Specifies the number of times an animation should be played, infinite is a loop",
        table: {
            defaultValue: {
                summary: "1",
            },
        },
        control: {
            type: "text",
        },
    },
    animation: {
        description: "Animaciones",
        table: {
            defaultValue: {
                summary: "",
            },
        },
        control: {
            type: "select",
            options: [
                "Bounce",
                "Flash",
                "HeadShake",
                "Jello",
                "Pulse",
                "RubberBand",
                "Shake",
                "Swing",
                "Tada",
                "Wobble",
                "BounceIn",
                "BounceInUp",
                "BounceInDown",
                "BounceInLeft",
                "BounceInRight",
                "BounceOut",
                "BounceOutDown",
                "BounceOutLeft",
                "BounceOutRight",
                "BounceOutUp",
                "FadeIn",
                "FadeInDown",
                "FadeInDownBig",
                "FadeInLeft",
                "FadeInLeftBig",
                "FadeInRight",
                "FadeInRightBig",
                "FadeInUp",
                "FadeInUpBig",
                "FadeOut",
                "FadeOutDown",
                "FadeOutDownBig",
                "FadeOutLeft",
                "FadeOutLeftBig",
                "FadeOutRight",
                "FadeOutRightBig",
                "FadeOutUp",
                "FadeOutUpBig",
                "Flip",
                "FlipInX",
                "FlipInY",
                "FlipOutX",
                "FlipOutY",
                "LightSpeedIn",
                "LightSpeedOut",
                "RotateIn",
                "RotateInDownLeft",
                "RotateInDownRight",
                "RotateInUpLeft",
                "RotateInUpRight",
                "RotateOut",
                "RotateOutDownLeft",
                "RotateOutDownRight",
                "RotateOutUpLeft",
                "RotateOutUpRight",
                "SlideInDown",
                "SlideInLeft",
                "SlideInRight",
                "SlideInUp",
                "SlideOutDown",
                "SlideOutLeft",
                "SlideOutRight",
                "SlideOutUp",
                "Hinge",
                "RollIn",
                "RollOut",
                "ZoomIn",
                "ZoomInDown",
                "ZoomInLeft",
                "ZoomInRight",
                "ZoomInUp",
                "ZoomOut",
                "ZoomOutDown",
                "ZoomOutLeft",
                "ZoomOutRight",
                "ZoomOutUp",
                "BaseAnimation",
            ],
        },
    },
};
export const BOUNCEIN = args => {
    return (
        <Box>
            <Bounce duration="1.8s" delay="0.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce</Text>
                </Box>
            </Bounce>
            <BounceIn duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce in</Text>
                </Box>
            </BounceIn>
            <BounceInDown duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce in down</Text>
                </Box>
            </BounceInDown>
            <BounceInUp duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce in up</Text>
                </Box>
            </BounceInUp>
            <BounceInLeft duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce in left</Text>
                </Box>
            </BounceInLeft>
            <BounceInRight duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce in right</Text>
                </Box>
            </BounceInRight>
        </Box>
    );
};
export const BOUNCEOUT = args => {
    return (
        <Box>
            <BounceOut duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce out</Text>
                </Box>
            </BounceOut>
            <BounceOutDown duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce out down</Text>
                </Box>
            </BounceOutDown>
            <BounceOutUp duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce out up</Text>
                </Box>
            </BounceOutUp>
            <BounceOutLeft duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce out left</Text>
                </Box>
            </BounceOutLeft>
            <BounceOutRight duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Bounce out right</Text>
                </Box>
            </BounceOutRight>
        </Box>
    );
};
export const ATTENTION = args => {
    return (
        <Box>
            <Flash duration="1.8s" delay="0.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Flash</Text>
                </Box>
            </Flash>
            <HeadShake duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">HeadShake</Text>
                </Box>
            </HeadShake>
            <Jello duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Jello</Text>
                </Box>
            </Jello>
            <Pulse duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Pulse</Text>
                </Box>
            </Pulse>
            <RubberBand duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">RubberBand</Text>
                </Box>
            </RubberBand>
            <Shake duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Shake</Text>
                </Box>
            </Shake>
            <Swing duration="1.8s" delay="6.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Swing</Text>
                </Box>
            </Swing>
            <Tada duration="1.8s" delay="7.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Tada</Text>
                </Box>
            </Tada>
            <Wobble duration="1.8s" delay="8.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Wobble</Text>
                </Box>
            </Wobble>
        </Box>
    );
};
export const FADEIN = args => {
    return (
        <Box>
            <FadeIn duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade in</Text>
                </Box>
            </FadeIn>
            <FadeInDown duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade in down</Text>
                </Box>
            </FadeInDown>
            <FadeInUp duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade in up</Text>
                </Box>
            </FadeInUp>
            <FadeInLeft duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade in left</Text>
                </Box>
            </FadeInLeft>
            <FadeInRight duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade in right</Text>
                </Box>
            </FadeInRight>
        </Box>
    );
};
export const FADEOUT = args => {
    return (
        <Box>
            <FadeOut duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade out</Text>
                </Box>
            </FadeOut>
            <FadeOutDown duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade out down</Text>
                </Box>
            </FadeOutDown>
            <FadeOutUp duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade out up</Text>
                </Box>
            </FadeOutUp>
            <FadeOutLeft duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade out left</Text>
                </Box>
            </FadeOutLeft>
            <FadeOutRight duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Fade out right</Text>
                </Box>
            </FadeOutRight>
        </Box>
    );
};
export const FLIP = args => {
    return (
        <Box>
            <Flip duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Flip </Text>
                </Box>
            </Flip>
            <FlipOutX duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Flip out X</Text>
                </Box>
            </FlipOutX>
            <FlipOutY duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Flip out Y</Text>
                </Box>
            </FlipOutY>
            <FlipInX duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Flip in X</Text>
                </Box>
            </FlipInX>
            <FlipInY duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Flip in Y</Text>
                </Box>
            </FlipInY>
        </Box>
    );
};
export const LIGHTSPEED = args => {
    return (
        <Box>
            <LightSpeedIn duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">LightSpeedIn in</Text>
                </Box>
            </LightSpeedIn>
            <LightSpeedOut duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">LightSpeed Out</Text>
                </Box>
            </LightSpeedOut>
        </Box>
    );
};
export const ROTATEIN = args => {
    return (
        <Box>
            <RotateIn duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate in</Text>
                </Box>
            </RotateIn>
            <RotateInDownRight duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate in down right</Text>
                </Box>
            </RotateInDownRight>
            <RotateInUpLeft duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate in up left</Text>
                </Box>
            </RotateInUpLeft>
            <RotateInDownLeft duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate in down left</Text>
                </Box>
            </RotateInDownLeft>
            <RotateInDownRight duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate in down right</Text>
                </Box>
            </RotateInDownRight>
            <RotateInUpRight duration="1.8s" delay="6.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate in up right</Text>
                </Box>
            </RotateInUpRight>
        </Box>
    );
};
export const ROTATEDOWN = args => {
    return (
        <Box>
            <RotateOut duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate out</Text>
                </Box>
            </RotateOut>
            <RotateOutDownRight duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate out down right</Text>
                </Box>
            </RotateOutDownRight>
            <RotateOutUpLeft duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate out up left</Text>
                </Box>
            </RotateOutUpLeft>
            <RotateOutDownLeft duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate out left</Text>
                </Box>
            </RotateOutDownLeft>
            <RotateOutDownRight duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate out right</Text>
                </Box>
            </RotateOutDownRight>
            <RotateOutUpRight duration="1.8s" delay="6.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Rotate out right</Text>
                </Box>
            </RotateOutUpRight>
        </Box>
    );
};
export const SLIDEIN = args => {
    return (
        <Box>
            <SlideInDown duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide in down</Text>
                </Box>
            </SlideInDown>
            <SlideInLeft duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide in left</Text>
                </Box>
            </SlideInLeft>
            <SlideInRight duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide in right</Text>
                </Box>
            </SlideInRight>
            <SlideInUp duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide in up</Text>
                </Box>
            </SlideInUp>
        </Box>
    );
};
export const SLIDEOUT = args => {
    return (
        <Box>
            <SlideOutDown duration="1.8s" delay="0.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide out down</Text>
                </Box>
            </SlideOutDown>
            <SlideOutLeft duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide out left</Text>
                </Box>
            </SlideOutLeft>
            <SlideOutRight duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide out right</Text>
                </Box>
            </SlideOutRight>
            <SlideOutUp duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide out up</Text>
                </Box>
            </SlideOutUp>
        </Box>
    );
};
export const ZOOMIN = args => {
    return (
        <Box>
            <ZoomIn duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom in</Text>
                </Box>
            </ZoomIn>
            <ZoomInDown duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom in down</Text>
                </Box>
            </ZoomInDown>
            <ZoomInLeft duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom in left</Text>
                </Box>
            </ZoomInLeft>
            <ZoomInRight duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom in right</Text>
                </Box>
            </ZoomInRight>
            <ZoomInUp duration="1.8s" delay="5.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Slide in up</Text>
                </Box>
            </ZoomInUp>
        </Box>
    );
};
export const ZOOMOUT = args => {
    return (
        <Box>
            <ZoomOut duration="1.8s" delay="0.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom out </Text>
                </Box>
            </ZoomOut>
            <ZoomOutDown duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom out down</Text>
                </Box>
            </ZoomOutDown>
            <ZoomOutLeft duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom out left</Text>
                </Box>
            </ZoomOutLeft>
            <ZoomOutRight duration="1.8s" delay="3.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom out right</Text>
                </Box>
            </ZoomOutRight>
            <ZoomOutUp duration="1.8s" delay="4.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Zoom out up</Text>
                </Box>
            </ZoomOutUp>
        </Box>
    );
};
export const ROLL = args => {
    return (
        <Box>
            <RollIn duration="1.8s" delay="0.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Roll in </Text>
                </Box>
            </RollIn>
            <RollOut duration="1.8s" delay="1.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Roll out </Text>
                </Box>
            </RollOut>
            <Hinge duration="1.8s" delay="2.2s">
                <Box variant="Flex" p="lg" color="Warning" align="center">
                    <Text size="lg">Hinge</Text>
                </Box>
            </Hinge>
        </Box>
    );
};
