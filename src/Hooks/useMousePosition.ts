import { useLayoutEffect, useState } from "react";
import { MouseCoords } from "../types";

export const useMousePosition = (): number[] => {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    const setPosition = ({ x, y }: MouseCoords) => {
        setX(x);
        setY(y);
    };

    useLayoutEffect(() => {
        window.addEventListener('mousemove', setPosition);
        return () => window.removeEventListener('mousemove', setPosition);
    }, []);

    return [x, y];
};

export default useMousePosition;