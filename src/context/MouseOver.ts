import React from "react";

export interface MouseOver {
    isMouseOver: boolean;
}

export const MouseOver = React.createContext<MouseOver | unknown>(false);

export default MouseOver;