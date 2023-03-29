import React, { useRef, useEffect, useState, useMemo } from "react";

//Creando Hook personalizado para intersectar elemntos en pantalla
const useElementOnScreen = options => {
    // contendor con la referencia
    const containerRef = useRef([null]);
    // estado del componente si esta visible
    const [isVisible, setIsVisible] = useState(false);
    // Callback function para cuando el elemento se esta intersectando cambia su estado
    const callbackFunction = entries => {
        // const entry = entries[0]
        const [entry] = entries;
        // cambia el estado cuando se intersecta
        setIsVisible(entry.isIntersecting);
        /*
        iteracion por cada entry y compara con ratio mayor a 0
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                setIsVisible(entry.isIntersecting);
            }
        });
        */
    };
    // opciones de Itersection con Memo para evitar rerenders
    const optionsMemo = useMemo(() => {
        return options;
    }, [options]);
    // effect hook donde se inicia el InteersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, optionsMemo);
        const currentTarget = containerRef.current;
        // containerRef.forEach(conref => {
        //     observer.observe(conref);
        //   });
        if (currentTarget) observer.observe(currentTarget);
        // Retrono que limpia  y deja de observar
        return () => {
            if (currentTarget) observer.unobserve(currentTarget);
        };
    }, [containerRef, optionsMemo]);

    // retorna un array con la referencia y el estado
    return [containerRef, isVisible];
};

export default useElementOnScreen;
