import cwrap from "./cwrap";
import linknav from "./linknav";

export interface ICTheme {
    cwrap: typeof cwrap;
    linknav: typeof linknav;
}

export const CTheme: ICTheme = {
    cwrap,
    linknav,
};

export default CTheme;