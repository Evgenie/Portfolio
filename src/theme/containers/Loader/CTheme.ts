import cwrap from "./cwrap";
import wait from "./wait";

export type ICTheme = {
    cwrap: typeof cwrap;
    wait: typeof wait;
}

export const CTheme: ICTheme = {
    cwrap,
    wait,
};

export default CTheme;