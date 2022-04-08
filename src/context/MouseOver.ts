import React from "react";

export interface MouseOver {
    isMouseOver: boolean;
    handleMouseOver?: () => void;
}

export const MouseOver = React.createContext<MouseOver>({
    isMouseOver: false,
});

export default MouseOver;