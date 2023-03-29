import React, { useRef, useEffect, useState } from "react";

const useHover = () => {
    const ref = useRef(null);
    const [hovered, setHovered] = useState("paused");
    const enter = () => setHovered("running");
    const leave = () => setHovered("paused");

    useEffect(() => {
        const el = ref.current; // cache external ref value for cleanup use
        if (el) {
            el.addEventListener("mouseenter", enter);
            el.addEventListener("mouseleave", leave);

            return () => {
                el.removeEventLisener("mouseenter", enter);
                el.removeEventLisener("mouseleave", leave);
            };
        }
    }, []);

    return [ref, hovered];
};
export default useHover;
