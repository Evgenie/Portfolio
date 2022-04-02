import React from "react";
import { MouseCoords } from "../definitions";

export const MouseContext = React.createContext<MouseCoords>({x: 0, y: 0});

export default MouseContext;